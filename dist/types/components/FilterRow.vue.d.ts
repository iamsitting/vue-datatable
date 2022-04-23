import { PropType } from 'vue';
import { Column } from '../interfaces';
declare const _default: import("vue").DefineComponent<{
    lineNumbers: {
        type: BooleanConstructor;
    };
    columns: {
        type: PropType<Column[]>;
        default: () => never[];
    };
    typedColumns: {
        type: ArrayConstructor;
    };
    globalSearchEnabled: {
        type: BooleanConstructor;
    };
    selectable: {
        type: BooleanConstructor;
    };
    mode: {
        type: StringConstructor;
    };
}, {
    isFilterable: (column: Column) => boolean;
    fieldKey: (field: any) => any;
    reset: (emitEvent?: boolean) => void;
    isDropdown: (column: Column) => number | false;
    isDropdownObjects: (column: Column) => boolean | 0;
    isDropdownArray: (column: Column) => boolean | 0;
    getClasses: (column: Column) => string;
    getPlaceholder: (column: Column) => string;
    getName: (column: Column) => string;
    updateFiltersOnEnter: (column: Column, event: KeyboardEvent) => void;
    updateFiltersImmediately: (field: any, event: Event) => void;
    updateFilters: (column: Column, value: any) => void;
    updateFiltersOnKeyup: (column: Column, event: Event) => void;
    updateSlotFilter: (column: Column, value: any) => void;
    hasFilterRow: import("vue").ComputedRef<boolean>;
    columnFilters: import("vue").Ref<any>;
    timer: import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "filter-changed"[], "filter-changed", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    lineNumbers: {
        type: BooleanConstructor;
    };
    columns: {
        type: PropType<Column[]>;
        default: () => never[];
    };
    typedColumns: {
        type: ArrayConstructor;
    };
    globalSearchEnabled: {
        type: BooleanConstructor;
    };
    selectable: {
        type: BooleanConstructor;
    };
    mode: {
        type: StringConstructor;
    };
}>> & {
    "onFilter-changed"?: ((...args: any[]) => any) | undefined;
}, {
    lineNumbers: boolean;
    columns: Column[];
    globalSearchEnabled: boolean;
    selectable: boolean;
}>;
export default _default;
