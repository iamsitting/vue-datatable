<template>
<div class="footer__navigation__page-info">
  <div v-if="infoFn">
    {{infoFn(infoParams)}}
  </div>
  <form v-else-if="mode === 'pages'" @submit.prevent>
    <label :for="id" class="page-info__label">
      <span>{{pageText}}</span>
      <input
        :id="id"
        aria-describedby="change-page-hint"
        aria-controls="vgb-table"
        class="footer__navigation__page-info__current-entry"
        type="text"
        @keyup.enter.stop="changePage"
        :value="currentPage">
      <span>{{pageInfo}}</span>
    </label>
    <span id="change-page-hint" style="display: none;">
      Type a page number and press Enter to change the page.
    </span>
  </form>
  <div v-else>
    {{recordInfo}}
  </div>
</div>
</template>

<script lang="ts">
import {
  computed, defineComponent, reactive, toRefs, PropType,
} from 'vue';
import { HTMLElementEvent } from '../interfaces';
import {
  PAGINATION_MODES,
} from '../utils/constants';

export default defineComponent({
  name: 'PaginationPageInfo',
  props: {
    currentPage: {
      default: 1,
    },
    lastPage: {
      default: 1,
    },
    totalRecords: {
      default: 0,
    },
    ofText: {
      default: 'of',
      type: String,
    },
    pageText: {
      default: 'page',
      type: String,
    },
    currentPerPage: { default: 0 },
    mode: {
      default: PAGINATION_MODES.Records,
    },
    infoFn: { 
      type: Object as PropType<any>,
      default: null
    },
  },
  setup(props, ctx) {
    const getId = () => `vgt-page-input-${Math.floor(Math.random() * Date.now())}`;
    const pageInfo = computed(() => `${props.ofText} ${props.lastPage}`);
    const firstRecordOnPage = computed(() => ((props.currentPage - 1) * props.currentPerPage) + 1);
    const lastRecordOnPage = computed(() => Math.min(props.totalRecords, props.currentPage * props.currentPerPage));
    const recordInfo = computed(() => {
      let first = firstRecordOnPage.value;
      const last = lastRecordOnPage.value;
      if (last === 0) {
        first = 0;
      }
      return `${first} - ${last} ${props.ofText} ${props.totalRecords}`;
    });
    const infoParams = computed(() => {
      let first = firstRecordOnPage.value;
      const last = lastRecordOnPage.value;
      if (last === 0) {
        first = 0;
      }
      return {
        firstRecordOnPage: first,
        lastRecordOnPage: last,
        totalRecords: props.totalRecords,
        currentPage: props.currentPage,
        totalPages: props.lastPage,
      };
    });
    const data = reactive({
      id: getId(),
    });

    const changePage = (event: Event) => {
      const value = parseInt((event.target as HTMLInputElement).value, 10);
      //! invalid number
      if (Number.isNaN(value)
        || value > props.lastPage
        || value < 1) {
        // eslint-disable-next-line no-param-reassign
        (event.target as HTMLInputElement).value = props.currentPage.toString();
        // return false;
      }
      //* valid number
      // eslint-disable-next-line no-param-reassign
      (event.target as HTMLInputElement).value = value.toString();
      ctx.emit('page-changed', value);
      // return true;
    };
    return {
      ...toRefs(data),
      pageInfo,
      firstRecordOnPage,
      lastRecordOnPage,
      recordInfo,
      infoParams,
      changePage,
    };
  },
});
</script>
