<template>
  <tr v-if="hasFilterRow">
    <th v-if="lineNumbers"></th>
    <th v-if="selectable"></th>
    <template v-for="(column, index) in columns" :key="index">
      <th v-if="!column.hidden" :class="getClasses(column)">

        <slot name="column-filter" :column="column" :updateFilters="updateSlotFilter">

          <div v-if="isFilterable(column)">
            <input v-if="!isDropdown(column)" :name="getName(column)" type="text" class="vgt-input"
              :placeholder="getPlaceholder(column)" :value="columnFilters[fieldKey(column.field)]"
              @keyup.enter="updateFiltersOnEnter(column, $event)" @input="updateFiltersOnKeyup(column, $event)" />

            <!-- options are a list of primitives -->
            <select v-if="isDropdownArray(column)" :name="getName(column)" class="vgt-select"
              :value="columnFilters[fieldKey(column.field)]" @change="updateFiltersImmediately(column.field, $event)">
              <option value="" key="-1">{{ getPlaceholder(column) }}</option>
              <option v-for="(option, i) in column.filterOptions.filterDropdownItems" :key="i" :value="option">
                {{ option }}
              </option>
            </select>

            <!-- options are a list of objects with text and value -->
            <select v-if="isDropdownObjects(column)" :name="getName(column)" class="vgt-select"
              :value="columnFilters[fieldKey(column.field)]" @change="updateFiltersImmediately(column.field, $event)">
              <option value="" key="-1">{{ getPlaceholder(column) }}</option>
              <option v-for="(option, i) in column.filterOptions.filterDropdownItems" :key="i" :value="option.value">{{
                  option.text
              }}</option>
            </select>

          </div>
        </slot>
      </th>
    </template>
  </tr>
</template>

<script lang="ts">
import {
  computed,
  defineComponent, PropType, reactive, toRefs, watch,
} from 'vue';
import { Column } from '../interfaces';

/* eslint-disable no-param-reassign */
export default defineComponent({
  name: 'FilterRow',
  props: {
    lineNumbers: {
      type: Boolean,
    },
    columns: {
      type: Array as PropType<Column[]>,
      default: () => [],
    },
    typedColumns: {
      type: Array,
    },
    globalSearchEnabled: {
      type: Boolean,
    },
    selectable: {
      type: Boolean,
    },
    mode: {
      type: String,
    },
  },
  emits: ['filter-changed'],
  setup(props, ctx) {
    const data = reactive({
      columnFilters: {} as any,
      timer: 0,
    });
    const reset = (emitEvent = false) => {
      data.columnFilters = {};
      if (emitEvent) {
        ctx.emit('filter-changed', data.columnFilters);
      }
    };
    const isFilterable = (column: Column) => column.filterOptions
      && column.filterOptions.enabled;
    const isDropdown = (column: Column) => isFilterable(column)
      && column.filterOptions.filterDropdownItems
      && column.filterOptions.filterDropdownItems.length;
    const fieldKey = (field: any) => {
      if (typeof (field) === 'function' && field.name) {
        return field.name;
      }
      return field;
    };
    const isDropdownObjects = (column: Column) => isDropdown(column)
      && typeof column.filterOptions.filterDropdownItems[0] === 'object';
    const isDropdownArray = (column: Column) => isDropdown(column)
      && typeof column.filterOptions.filterDropdownItems[0] !== 'object';
    const getClasses = (column: Column) => {
      const firstClass = 'filter-th';
      return (column.filterOptions && column.filterOptions.styleClass) ? [firstClass, ...column.filterOptions.styleClass.split(' ')].join(' ') : firstClass;
    };
    // get column's defined placeholder or default one
    const getPlaceholder = (column: Column) => {
      const placeholder = (isFilterable(column) && column.filterOptions.placeholder) || `Filter ${column.label}`;
      return placeholder;
    };
    const getName = (column: Column) => `vgt-${fieldKey(column.field)}`;
    const updateFiltersImmediately = (field: any, event: Event) => {
      data.columnFilters[fieldKey(field)] = (event.target as HTMLInputElement).value;
      ctx.emit('filter-changed', data.columnFilters);
    };
    const updateFiltersOnEnter = (column: Column, event: KeyboardEvent) => {
      if (data.timer) window.clearTimeout(data.timer);
      updateFiltersImmediately(column.field, event);
    };
    // since vue doesn't detect property addition and deletion, we
    // need to create helper function to set property etc
    const updateFilters = (column: Column, value: any) => {
      window.clearTimeout(data.timer);
      data.timer = window.setTimeout(() => {
        updateFiltersImmediately(column.field, value);
      }, 400);
    };
    const updateFiltersOnKeyup = (column: Column, event: Event) => {
      // if the trigger is enter, we don't filter on keyup
      if (column.filterOptions.trigger === 'enter') return;
      updateFilters(column, (event.target as HTMLInputElement).value);
    };
    const populateInitialFilters = () => {
      for (let i = 0; i < props.columns.length; i += 1) {
        const col = props.columns[i];
        // lets see if there are initial
        // filters supplied by user
        if (isFilterable(col)
          && typeof col.filterOptions.filterValue !== 'undefined'
          && col.filterOptions.filterValue !== null) {
          data.columnFilters[fieldKey(col.field)] = col.filterOptions.filterValue;
          // this.updateFilters(col, col.filterOptions.filterValue);
          // this.$set(col.filterOptions, 'filterValue', undefined);
        }
      }
      //* lets emit event once all filters are set
      ctx.emit('filter-changed', data.columnFilters);
    };
    const updateSlotFilter = (column: Column, value: any) => {
      const fieldToFilter = column.filterOptions.slotFilterField || column.field;
      if (typeof column.filterOptions.formatValue === 'function') {
        value = column.filterOptions.formatValue(value);
      }
      updateFiltersImmediately(fieldToFilter, value);
    };

    watch(() => props.columns, () => {
      populateInitialFilters();
    }, { immediate: true, deep: true });

    const hasFilterRow = computed(() => {
      // to create a filter row, we need to
      // make sure that there is atleast 1 column
      // that requires filtering
      // if (this.mode === 'remote' || !this.globalSearchEnabled) {
      for (let i = 0; i < props.columns.length; i += 1) {
        const col = props.columns[i];
        if (col.filterOptions && col.filterOptions.enabled) {
          return true;
        }
      }
      // }
      return false;
    });
    return {
      ...toRefs(data),
      isFilterable,
      fieldKey,
      reset,
      isDropdown,
      isDropdownObjects,
      isDropdownArray,
      getClasses,
      getPlaceholder,
      getName,
      updateFiltersOnEnter,
      updateFiltersImmediately,
      updateFilters,
      updateFiltersOnKeyup,
      updateSlotFilter,
      hasFilterRow,
    };
  },
});
</script>

<style lang="less" scoped>
@text-color: #606266;
@link-color: #409eff;
@input-border-color: #DCDFE6;

/* input */
.vgt-input,
.vgt-select {
  width: 100%;
  height: 32px;
  line-height: 1;
  display: block;
  font-size: 14px;
  font-weight: normal;
  padding: 6px 12px;
  color: @text-color;
  border-radius: 4px;
  box-sizing: border-box;
  background-image: none;
  background-color: #fff;
  border: 1px solid @input-border-color;
  transition: border-color .2s cubic-bezier(.645, .045, .355, 1);

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: @text-color;
    opacity: 0.3;
    /* Firefox */
  }

  &:focus {
    outline: none;
    border-color: @link-color;
  }
}
</style>
