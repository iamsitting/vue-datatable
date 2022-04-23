<template>
  <tr>
    <th v-if="headerRow.mode === 'span'" class="vgt-left-align vgt-row-header" :colspan="fullColspan">
      <template v-if="selectAllByGroup">
        <slot name="table-header-group-select" :columns="columns" :row="headerRow">
          <input type="checkbox" :checked="allSelected" @change="toggleSelectGroup($event)" />
        </slot>
      </template>
      <span @click="collapsable ? $emit('vgtExpand', !headerRow.vgtIsExpanded) : () => { }">
        <span v-if="collapsable" :class="['triangle', { 'expand': headerRow.vgtIsExpanded }]"></span>
        <slot :row="headerRow" name="table-header-row">
          <span v-if="headerRow.html" v-html="headerRow.label">
          </span>
          <span v-else>
            {{ headerRow.label }}
          </span>
        </slot>
      </span>
    </th>
    <!-- if the mode is not span, we display every column -->
    <th class="vgt-row-header" v-if="headerRow.mode !== 'span' && lineNumbers"></th>
    <th class="vgt-row-header" v-if="headerRow.mode !== 'span' && selectable">
      <template v-if="selectAllByGroup">
        <slot name="table-header-group-select" :columns="columns" :row="headerRow">
          <input type="checkbox" :checked="allSelected" @change="toggleSelectGroup($event)" />
        </slot>
      </template>
    </th>
    <template v-for="(column, i) in columns" :key="i">
      <th v-if="headerRow.mode !== 'span' && !column.hidden" class="vgt-row-header" :class="getClasses(i, 'td')"
        @click="columnCollapsable(i as number) ? $emit('vgtExpand', !headerRow.vgtIsExpanded) : () => { }">
        <span v-if="columnCollapsable(i as number)" :class="['triangle', { 'expand': headerRow.vgtIsExpanded }]"></span>
        <slot name="table-header-row" :row="headerRow" :column="column" :formattedRow="formattedRow(headerRow, true)">
          <span v-if="!column.html">
            {{ collectFormatted(headerRow, column, true) }}
          </span>
          <span v-if="column.html" v-html="collectFormatted(headerRow, column, true)">
          </span>
        </slot>
      </th>
    </template>
  </tr>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { HeaderRow, Column } from '../interfaces';

export default defineComponent({
  name: 'HeaderRow',
  props: {
    headerRow: {
      type: Object as PropType<HeaderRow>,
      required: true,
    },
    columns: {
      type: Array as PropType<Column[]>,
      required: true,
    },
    lineNumbers: {
      type: Boolean,
    },
    selectable: {
      type: Boolean,
    },
    selectAllByGroup: {
      type: Boolean,
    },
    collapsable: {
      type: [Boolean, Number],
      default: false,
    },
    collectFormatted: {
      type: Function,
      required: true,
    },
    formattedRow: {
      type: Function,
      required: true,
    },
    getClasses: {
      type: Function,
      required: true,
    },
    fullColspan: {
      type: Number,
    },
    groupIndex: {
      type: Number,
    },
  },
  emits: ['vgtExpand', 'select-group-change'],
  setup(props, ctx) {
    const allSelected = computed(() => props.headerRow.children.filter((row) => row.vgtSelected).length === props.headerRow.children.length);
    const columnCollapsable = (currentIndex: any) => {
      if (props.collapsable === true) {
        return currentIndex === 0;
      }
      return currentIndex === props.collapsable;
    };
    const toggleSelectGroup = (event: any) => {
      ctx.emit('select-group-change', { groupIndex: props.groupIndex, checked: event.target.checked });
    };
    return {
      allSelected,
      columnCollapsable,
      toggleSelectGroup,
    };
  },
});
</script>
