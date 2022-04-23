/// <reference types="resize-observer-browser" />
import { PropType } from 'vue';
import { Column, Sort } from '../interfaces';
declare const _default: import("vue").DefineComponent<{
    lineNumbers: {
        default: boolean;
        type: BooleanConstructor;
    };
    selectable: {
        default: boolean;
        type: BooleanConstructor;
    };
    allSelected: {
        default: boolean;
        type: BooleanConstructor;
    };
    allSelectedIndeterminate: {
        default: boolean;
        type: BooleanConstructor;
    };
    columns: {
        type: PropType<Column[]>;
        required: true;
    };
    mode: {
        type: StringConstructor;
    };
    typedColumns: {
        type: PropType<Object[]>;
    };
    sortable: {
        type: BooleanConstructor;
    };
    multipleColumnSort: {
        type: BooleanConstructor;
        default: boolean;
    };
    getClasses: {
        type: FunctionConstructor;
        required: true;
    };
    searchEnabled: {
        type: BooleanConstructor;
    };
    tableRef: {
        type: ObjectConstructor;
    };
    paginated: {};
}, {
    toggleSelectAll: () => void;
    isSortableColumn: (column: Column) => boolean;
    sort: (e: any, column: Column) => void;
    setInitialSort: (sorts: Sort[]) => void;
    getColumnSort: (column: Column) => string | null;
    getColumnSortLong: (column: Column) => "ascending" | "descending";
    getHeaderClasses: (column: Column, index: number) => any;
    filterRows: (columnFilters: any) => void;
    getWidthStyle: (dom: Element) => {
        width: string;
    };
    setColumnStyles: () => void;
    getColumnStyle: (column: Column, index: number) => {
        minWidth: string;
        maxWidth: string;
        width: string;
    };
    wrapperStyles: (index: any) => any;
    checkBoxThStyle: import("vue").Ref<{}>;
    lineNumberThStyle: import("vue").Ref<{}>;
    columnStyles: import("vue").Ref<{
        width?: string | undefined;
        maxWidth?: string | undefined;
        minWidth?: string | undefined;
    }[]>;
    sorts: import("vue").Ref<{
        field: string;
        type: string;
    }[]>;
    ro: import("vue").Ref<{
        disconnect: () => void;
        observe: (target: Element, options?: ResizeObserverOptions | undefined) => void;
        unobserve: (target: Element) => void;
    } | null>;
    filterRow: import("vue").Ref<import("vue").DefineComponent<{
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
    }>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("filter-changed" | "toggle-select-all" | "sort-change")[], "filter-changed" | "toggle-select-all" | "sort-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    lineNumbers: {
        default: boolean;
        type: BooleanConstructor;
    };
    selectable: {
        default: boolean;
        type: BooleanConstructor;
    };
    allSelected: {
        default: boolean;
        type: BooleanConstructor;
    };
    allSelectedIndeterminate: {
        default: boolean;
        type: BooleanConstructor;
    };
    columns: {
        type: PropType<Column[]>;
        required: true;
    };
    mode: {
        type: StringConstructor;
    };
    typedColumns: {
        type: PropType<Object[]>;
    };
    sortable: {
        type: BooleanConstructor;
    };
    multipleColumnSort: {
        type: BooleanConstructor;
        default: boolean;
    };
    getClasses: {
        type: FunctionConstructor;
        required: true;
    };
    searchEnabled: {
        type: BooleanConstructor;
    };
    tableRef: {
        type: ObjectConstructor;
    };
    paginated: {};
}>> & {
    "onFilter-changed"?: ((...args: any[]) => any) | undefined;
    "onToggle-select-all"?: ((...args: any[]) => any) | undefined;
    "onSort-change"?: ((...args: any[]) => any) | undefined;
}, {
    searchEnabled: boolean;
    lineNumbers: boolean;
    selectable: boolean;
    allSelected: boolean;
    allSelectedIndeterminate: boolean;
    sortable: boolean;
    multipleColumnSort: boolean;
}>;
export default _default;
