<template>
<thead>
  <tr>
    <th scope="col" v-if="lineNumbers" class="line-numbers"></th>
    <th scope="col" v-if="selectable" class="vgt-checkbox-col">
      <input
        type="checkbox"
        :checked="allSelected"
        :indeterminate.prop="allSelectedIndeterminate"
        @change="toggleSelectAll" />
    </th>
    <template
        v-for="(column, index) in columns"
        :key="index"
    >
      <th v-if="!column.hidden"
        scope="col"
        :title="column.tooltip"
        :class="getHeaderClasses(column, index as number)"
        :style="wrapperStyles(index as number)"
        :aria-sort="getColumnSortLong(column)"
        :aria-controls="`col-${index}`"
      >
        <slot name="table-column" :column="column">
          {{column.label}}
        </slot>
        <button
        v-if="isSortableColumn(column)"
        @click="sort($event, column)">
        </button>
      </th>
    </template>
  </tr>
  <filter-row
    ref="filter-row"
    @filter-changed="filterRows"
    :global-search-enabled="searchEnabled"
    :line-numbers="lineNumbers"
    :selectable="selectable"
    :columns="columns"
    :mode="mode"
    :typed-columns="typedColumns">
      <template #column-filter="slotProps">
        <slot
          name="column-filter"
          :column="slotProps.column"
          :updateFilters="slotProps.updateFilters"
        >
        </slot>
      </template>
  </filter-row>
</thead>
</template>

<script lang="ts">
import {
  defineComponent, nextTick, onBeforeUnmount, onMounted, PropType, reactive, toRefs, watch,
} from 'vue';
import FilterRow from './FilterRow.vue';
import { Column, Sort, ColumnStyle } from '../interfaces';
import { primarySort, secondarySort } from '../utils/sort';

export default defineComponent({
  name: 'TableHeader',
  props: {
    lineNumbers: {
      default: false,
      type: Boolean,
    },
    selectable: {
      default: false,
      type: Boolean,
    },
    allSelected: {
      default: false,
      type: Boolean,
    },
    allSelectedIndeterminate: {
      default: false,
      type: Boolean,
    },
    columns: {
      type: Array as PropType<Column[]>,
      required: true,
    },
    mode: {
      type: String,
    },
    typedColumns: {
      type: Array as PropType<Object[]>,
    },
    //* Sort related
    sortable: {
      type: Boolean,
    },
    multipleColumnSort: {
      type: Boolean,
      default: true,
    },
    getClasses: {
      type: Function,
      required: true,
    },
    //* search related
    searchEnabled: {
      type: Boolean,
    },
    tableRef: {
      type: Object,
    },
    paginated: {},
  },
  emits: ['toggle-select-all', 'sort-change', 'filter-changed'],
  setup(props, ctx) {
    const data = reactive({
      checkBoxThStyle: {},
      lineNumberThStyle: {},
      columnStyles: [] as ColumnStyle[],
      sorts: [] as Sort[],
      ro: null as ResizeObserver|null,
      filterRow: {} as typeof FilterRow,
    });
    // reset() {
    //   this.$refs['filter-row'].reset(true);
    // },
    const toggleSelectAll = () => {
      ctx.emit('toggle-select-all');
    };
    const isSortableColumn = (column: Column) => (typeof column.sortable === 'boolean' ? column.sortable : props.sortable);
    const sort = (e: any, column: Column) => {
      //* if column is not sortable, return right here
      if (!isSortableColumn(column)) return;
      if (e.shiftKey && props.multipleColumnSort) {
        data.sorts = secondarySort(data.sorts, column);
      } else {
        data.sorts = primarySort(data.sorts, column);
      }
      ctx.emit('sort-change', data.sorts);
    };
    const setInitialSort = (sorts: Sort[]) => {
      data.sorts = sorts;
      ctx.emit('sort-change', data.sorts);
    };
    const getColumnSort = (column: Column) => {
      for (let i = 0; i < data.sorts.length; i += 1) {
        if (data.sorts[i].field === column.field) {
          return data.sorts[i].type || 'asc';
        }
      }
      return null;
    };

    const getColumnSortLong = (column: Column) => (getColumnSort(column) === 'asc'
      ? 'ascending'
      : 'descending');

    const getHeaderClasses = (column: Column, index: number) => {
      const classes = {
        sortable: isSortableColumn(column),
        'sorting sorting-desc': getColumnSort(column) === 'desc',
        'sorting sorting-asc': getColumnSort(column) === 'asc',
      };
      if (props.getClasses) {
        return {
          ...props.getClasses(index, 'th'),
          ...classes,
        };
      }
      return classes;
    };
    const filterRows = (columnFilters: any) => {
      ctx.emit('filter-changed', columnFilters);
    };
    const getWidthStyle = (dom: Element) => {
      if (window && window.getComputedStyle && dom) {
        const cellStyle = window.getComputedStyle(dom, null);
        return {
          width: cellStyle.width,
        };
      }
      return {
        width: 'auto',
      };
    };
    const setColumnStyles = () => {
      const colStyles = [];
      for (let i = 0; i < props.columns.length; i += 1) {
        if (props.tableRef) {
          let skip = 0;
          if (props.selectable) skip += 1;
          if (props.lineNumbers) skip += 1;
          const cell = (props.tableRef as any).rows[0].cells[i + skip];
          colStyles.push(getWidthStyle(cell));
        } else {
          colStyles.push({
            minWidth: props.columns[i].width ? props.columns[i].width : 'auto',
            maxWidth: props.columns[i].width ? props.columns[i].width : 'auto',
            width: props.columns[i].width ? props.columns[i].width : 'auto',
          });
        }
      }
      data.columnStyles = colStyles;
    };
    const getColumnStyle = (column: Column, index: number) => {
      let i = index;
      const styleObject = {
        minWidth: column.width ? column.width : 'auto',
        maxWidth: column.width ? column.width : 'auto',
        width: column.width ? column.width : 'auto',
      };
      //* if fixed header we need to get width from original table
      if (props.tableRef) {
        if (props.selectable) i += 1;
        if (props.lineNumbers) i += 1;
        const cell = (props.tableRef as any).rows[0].cells[i];
        const cellStyle = window.getComputedStyle(cell, null);
        styleObject.width = cellStyle.width;
      }
      return styleObject;
    };
    onBeforeUnmount(() => {
      if (data.ro) {
        data.ro.disconnect();
      }
    });
    onMounted(() => {
      nextTick(() => {
        // // We're going to watch the parent element for resize events, and calculate column widths if it changes
        // if ('ResizeObserver' in window) {
        //   data.ro = new ResizeObserver(() => {
        //     setColumnStyles();
        //   });
        //   data.ro.observe(ctx.$parent.$el);
        //   // If this is a fixed-header table, we want to observe each column header from the non-fixed header.
        //   // You can imagine two columns swapping widths, which wouldn't cause the above to trigger.
        //   // This gets the first tr element of the primary table header,
        //   // and iterates through its children (the th elements)
        //   if (this.tableRef) {
        //     Array.from(this.$parent.$refs['table-header-primary'].$el.children[0].children).forEach((header) => {
        //       data.ro.observe(header);
        //     });
        //   }
        // }
      });
    });
    const wrapperStyles = (index: any) => {
      return { ...data.columnStyles[index] } as any;
    };
    watch(() => props.columns, () => {
      setColumnStyles();
    }, { immediate: true });
    watch(() => props.tableRef, () => {
      setColumnStyles();
    }, { immediate: true });
    watch(() => props.paginated, () => {
      if (props.tableRef) setColumnStyles();
    }, { deep: true });
    return {
      ...toRefs(data),
      toggleSelectAll,
      isSortableColumn,
      sort,
      setInitialSort,
      getColumnSort,
      getColumnSortLong,
      getHeaderClasses,
      filterRows,
      getWidthStyle,
      setColumnStyles,
      getColumnStyle,
      wrapperStyles,
    };
  },
  components: {
    FilterRow,
  },
});
</script>

<style lang="less" scoped>
  @media (max-width: 576px) {
    th.line-numbers {
      width: 100% !important;
      display: block;
      padding: 0.3em 1em !important;
    }
  }

  th.sorting:after,
  th.sorting-asc:after{
    margin-right:  5px;
    margin-left:  0px;
  }

  th.sortable:after,
  th.sortable:before {
    right: inherit;
    left: 6px;
  }
</style>
