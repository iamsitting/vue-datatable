<template>
  <div class="vgt-wrap__footer vgt-clearfix">
    <div v-if="perPageDropdownEnabled" class="footer__row-count vgt-pull-left">
      <form>
        <label :for="id" class="footer__row-count__label">{{rowsPerPageText}}:</label>
        <select
          :id="id"
          autocomplete="off"
          name="perPageSelect"
          class="footer__row-count__select"
          v-model="currentPerPage"
          @change="perPageChanged"
          aria-controls="vgt-table">
          <option
            v-for="(option, idx) in rowsPerPageOptions"
            :key="idx"
            :value="option">
            {{ option }}
          </option>
          <option v-if="paginateDropdownAllowAll" :value="total">{{allText}}</option>
        </select>
      </form>
    </div>
    <div class="footer__navigation vgt-pull-right">
      <pagination-page-info
        @page-changed="changePage"
        :total-records="total"
        :last-page="pagesCount"
        :current-page="currentPage"
        :current-per-page="currentPerPage"
        :of-text="ofText"
        :page-text="pageText"
        :info-fn="infoFn"
        :mode="mode" />
      <button
        type="button"
        aria-controls="vgt-table"
        class="footer__navigation__page-btn"
        :class="{ disabled: !prevIsPossible }"
        @click.prevent.stop="previousPage">
        <span aria-hidden="true" :class="['chevron', { 'left': !rtl, 'right': rtl }]"></span>
        <span>{{prevText}}</span>
      </button>

      <button
        type="button"
        aria-controls="vgt-table"
        class="footer__navigation__page-btn"
        :class="{ disabled: !nextIsPossible }"
        @click.prevent.stop="nextPage">
        <span>{{nextText}}</span>
        <span aria-hidden="true" :class="['chevron', { 'right': !rtl, 'left': rtl }]"></span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent, PropType, reactive, toRefs, watch,
} from 'vue';
import PaginationPageInfo from './PaginationPageInfo.vue';
import {
  PAGINATION_MODES,
  DEFAULT_ROWS_PER_PAGE_DROPDOWN,
} from '../utils/constants';

export default defineComponent({
  name: 'DtPagination',
  props: {
    styleClass: {
      type: String,
      default: 'uk-table uk-table-bordered',
    },
    total: { type: Number, default: null },
    perPage: { type: Number },
    rtl: { type: Boolean, default: false },
    perPageDropdownEnabled: { type: Boolean, default: true },
    customRowsPerPageDropdown: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
    paginateDropdownAllowAll: { type: Boolean, default: true },
    mode: { type: String, default: PAGINATION_MODES.Records },
    // text options
    nextText: { type: String, default: 'Next' },
    prevText: { type: String, default: 'Prev' },
    rowsPerPageText: { type: String, default: 'Rows per page:' },
    ofText: { type: String, default: 'of' },
    pageText: { type: String, default: 'page' },
    allText: { type: String, default: 'All' },
    infoFn: { type: Function as PropType<CallableFunction|null>, default: null },
  },
  setup(props, ctx) {
    const getId = () => `vgt-select-rpp-${Math.floor(Math.random() * Date.now())}`;
    const data = reactive({
      id: getId(),
      currentPage: 1,
      prevPage: 0,
      currentPerPage: 10,
      rowsPerPageOptions: [] as any[],
    });
    // Indicate page changing
    const pageChanged = (emit = true) => {
      const payload = {
        currentPage: data.currentPage,
        prevPage: data.prevPage,
        noEmit: false,
      };
      if (!emit) payload.noEmit = true;
      ctx.emit('page-changed', payload);
    };
    // Change current page
    const changePage = (pageNumber: number, emit = true) => {
      if (pageNumber > 0 && props.total > data.currentPerPage * (pageNumber - 1)) {
        data.prevPage = data.currentPage;
        data.currentPage = pageNumber;
        pageChanged(emit);
      }
    };

    // Number of pages
    const pagesCount = computed(() => {
      const quotient = Math.floor(props.total / data.currentPerPage);
      const remainder = props.total % data.currentPerPage;
      return remainder === 0 ? quotient : quotient + 1;
    });

    // Can go to next page
    const nextIsPossible = computed(() => data.currentPage < pagesCount.value);

    // Can go to previous page
    const prevIsPossible = computed(() => data.currentPage > 1);

    // Go to next page
    const nextPage = () => {
      if (nextIsPossible.value) {
        data.prevPage = data.currentPage;
        data.currentPage += 1;
        pageChanged();
      }
    };

    // Go to previous page
    const previousPage = () => {
      if (prevIsPossible.value) {
        data.prevPage = data.currentPage;
        data.currentPage -= 1;
        pageChanged();
      }
    };

    // Indicate per page changing
    const perPageChanged = (oldValue: any) => {
      // go back to first page
      if (oldValue) {
        //* only emit if this isn't first initialization
        ctx.emit('per-page-changed', { currentPerPage: data.currentPerPage });
      }
      changePage(1, false);
    };

    // Handle per page changing
    const handlePerPage = () => {
      //* if there's a custom dropdown then we use that
      if (props.customRowsPerPageDropdown !== null
        && (Array.isArray(props.customRowsPerPageDropdown)
        && props.customRowsPerPageDropdown.length !== 0)) {
        data.rowsPerPageOptions = JSON.parse(JSON.stringify(props.customRowsPerPageDropdown));
      } else {
        //* otherwise we use the default rows per page dropdown
        data.rowsPerPageOptions = JSON.parse(JSON.stringify(DEFAULT_ROWS_PER_PAGE_DROPDOWN));
      }
      if (props.perPage) {
        data.currentPerPage = props.perPage;
        // if perPage doesn't already exist, we add it
        let found = false;
        for (let i = 0; i < data.rowsPerPageOptions.length; i += 1) {
          if (data.rowsPerPageOptions[i] === props.perPage) {
            found = true;
          }
        }
        if (!found && props.perPage !== -1) {
          data.rowsPerPageOptions.unshift(props.perPage);
        }
      } else {
        // reset to default
        data.currentPerPage = 10;
      }
    };

    watch(() => props.perPage, (_, oldValue) => {
      handlePerPage();
      perPageChanged(oldValue);
    }, { immediate: true });

    watch(() => props.customRowsPerPageDropdown, () => {
      handlePerPage();
    });

    watch(() => props.total, (newValue) => {
      if (data.rowsPerPageOptions.indexOf(data.currentPerPage) === -1) {
        data.currentPerPage = newValue;
      }
    });
    return {
      ...toRefs(data),
      getId,
      changePage,
      pageChanged,
      nextPage,
      previousPage,
      perPageChanged,
      handlePerPage,
      pagesCount,
      nextIsPossible,
      prevIsPossible,
    };
  },
  components: {
    PaginationPageInfo,
  },
});
</script>

<style lang="less" scoped>
/* footer */
@footer-font-size: 1.1rem;
@border-color: #DCDFE6;
@text-color: #606266;
@secondary-text-color: #909399;
@thead-bg-color-1: #F4F5F8;
@thead-bg-color-2: #F1F3F6;
@link-color: #409eff;

.vgt-wrap__footer{
  color: @text-color;
  font-size:  @footer-font-size;
  padding:  1em;
  border: 1px solid @border-color;
  background: linear-gradient(@thead-bg-color-1, @thead-bg-color-2);
  .footer__row-count{
    position: relative;
    padding-right: 3px;
    &__label, &__select{
      display: inline-block;
      vertical-align: middle;
    }
    &__label{
      font-size: @footer-font-size;
    }
    &__select{
      font-size: @footer-font-size;
      background-color: transparent;
      width: auto;
      padding: 0;
      border: 0;
      border-radius: 0;
      height: auto;
      margin-left: 8px;
      color:  @text-color;
      font-weight: bold;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      padding-right: 15px;
      padding-left: 5px;
      &::-ms-expand{
        display: none;
      }
      &:focus{
        outline: none;
        border-color: @link-color;
      }
    }
    &::after{
      content: '';
      display: block;
      position: absolute;
      height: 0px;
      width: 0px;
      right: 6px;
      top: 50%;
      margin-top: -1px;
      border-top:  6px solid @text-color;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: none;
      pointer-events: none
    }
  }
  .footer__navigation{
    > button:first-of-type {
      margin-right: 16px;
    }
    font-size: @footer-font-size;
    &__page-btn, &__info, &__page-info{
      display: inline-block;
      vertical-align: middle;
      color: @secondary-text-color;
    }
    &__page-btn{
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background: transparent;
      border: none;
      text-decoration: none;
      color: @text-color;
      font-weight: bold;
      white-space:nowrap;
      vertical-align: middle;
      &:hover{
        cursor: pointer;
      }
      &.disabled,
      &.disabled:hover {
        opacity: 0.5;
        cursor: not-allowed;
        .chevron.left:after{
          border-right-color: @text-color;
        }
        .chevron.right:after{
          border-left-color: @text-color;
        }
      }
      span{
        display: inline-block;
        vertical-align: middle;
        font-size: @footer-font-size;
      }
      .chevron{
        width:  24px;
        height:  24px;
        border-radius: 15%;
        position:  relative;
        margin:  0;
        display: inline-block;
        vertical-align: middle;
        &:after{
          content:  '';
          position:  absolute;
          display:  block;
          left:  50%;
          top:  50%;
          margin-top:  -6px;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
        }
        &.left::after{
          border-right:  6px solid @link-color;
          margin-left:  -3px;
        }

        &.right::after{
          border-left:  6px solid @link-color;
          margin-left:  -3px;
        }
      }
    }
    &__info, &__page-info{
      display: inline-block;
      margin:  0px 16px;
    }
    &__page-info{
      span{
        display: inline-block;
        vertical-align: middle;
      }
      &__current-entry{
        width: 30px;
        text-align: center;
        vertical-align: middle;
        display: inline-block;
        margin: 0px 10px;
        font-weight: bold;
      }
    }
  }
}

@media only screen and (max-width: 750px) {
  /* on small screens hide the info */
  .vgt-wrap__footer .footer__navigation__info{
    display:  none;
  }
  .vgt-wrap__footer .footer__navigation__page-btn{
    margin-left: 16px;
  }
}
</style>
