declare namespace _default {
    const name: string;
    namespace props {
        namespace canExport {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
        namespace isLoading {
            const _default_1: null;
            export { _default_1 as default };
            const type_1: BooleanConstructor;
            export { type_1 as type };
        }
        namespace maxHeight {
            const _default_2: null;
            export { _default_2 as default };
            const type_2: StringConstructor;
            export { type_2 as type };
        }
        const fixedHeader: BooleanConstructor;
        namespace theme {
            const _default_3: string;
            export { _default_3 as default };
        }
        namespace mode {
            const _default_4: string;
            export { _default_4 as default };
        }
        const totalRows: {};
        namespace styleClass {
            const _default_5: string;
            export { _default_5 as default };
        }
        const columns: {};
        const rows: {};
        const lineNumbers: BooleanConstructor;
        namespace responsive {
            const _default_6: boolean;
            export { _default_6 as default };
            const type_3: BooleanConstructor;
            export { type_3 as type };
        }
        const rtl: BooleanConstructor;
        namespace rowStyleClass {
            const _default_7: null;
            export { _default_7 as default };
            const type_4: (StringConstructor | FunctionConstructor)[];
            export { type_4 as type };
        }
        const compactMode: BooleanConstructor;
        namespace groupOptions {
            function _default(): {
                enabled: boolean;
                collapsable: boolean;
                rowKey: null;
            };
            function _default(): {
                enabled: boolean;
                collapsable: boolean;
                rowKey: null;
            };
            export { _default as default };
        }
        namespace selectOptions {
            function _default(): {
                enabled: boolean;
                selectionInfoClass: string;
                selectionText: string;
                clearSelectionText: string;
                disableSelectInfo: boolean;
                selectAllByGroup: boolean;
            };
            function _default(): {
                enabled: boolean;
                selectionInfoClass: string;
                selectionText: string;
                clearSelectionText: string;
                disableSelectInfo: boolean;
                selectAllByGroup: boolean;
            };
            export { _default as default };
        }
        namespace sortOptions {
            function _default(): {
                enabled: boolean;
                multipleColumns: boolean;
                initialSortBy: {};
            };
            function _default(): {
                enabled: boolean;
                multipleColumns: boolean;
                initialSortBy: {};
            };
            export { _default as default };
        }
        namespace paginationOptions {
            function _default(): {
                enabled: boolean;
                position: string;
                perPage: number;
                perPageDropdown: null;
                perPageDropdownEnabled: boolean;
                dropdownAllowAll: boolean;
                mode: string;
                infoFn: null;
            };
            function _default(): {
                enabled: boolean;
                position: string;
                perPage: number;
                perPageDropdown: null;
                perPageDropdownEnabled: boolean;
                dropdownAllowAll: boolean;
                mode: string;
                infoFn: null;
            };
            export { _default as default };
        }
        namespace searchOptions {
            function _default(): {
                enabled: boolean;
                trigger: null;
                externalQuery: null;
                searchFn: null;
                placeholder: string;
            };
            function _default(): {
                enabled: boolean;
                trigger: null;
                externalQuery: null;
                searchFn: null;
                placeholder: string;
            };
            export { _default as default };
        }
    }
    function data(): {
        tableLoading: boolean;
        nextText: string;
        prevText: string;
        rowsPerPageText: string;
        ofText: string;
        allText: string;
        pageText: string;
        selectable: boolean;
        selectOnCheckboxOnly: boolean;
        selectAllByPage: boolean;
        disableSelectInfo: boolean;
        selectionInfoClass: string;
        selectionText: string;
        clearSelectionText: string;
        maintainExpanded: boolean;
        expandedRowKeys: Set<any>;
        sortable: boolean;
        defaultSortBy: null;
        multipleColumnSort: boolean;
        searchEnabled: boolean;
        searchTrigger: null;
        externalSearchQuery: null;
        searchFn: null;
        searchPlaceholder: string;
        searchSkipDiacritics: boolean;
        perPage: null;
        paginate: boolean;
        paginateOnTop: boolean;
        paginateOnBottom: boolean;
        customRowsPerPageDropdown: never[];
        paginateDropdownAllowAll: boolean;
        paginationMode: string;
        paginationInfoFn: null;
        currentPage: number;
        currentPerPage: number;
        sorts: never[];
        globalSearchTerm: string;
        filteredRows: never[];
        columnFilters: {};
        forceSearch: boolean;
        sortChanged: boolean;
        dataTypes: {};
    };
    const emits: string[];
    namespace watch {
        export namespace rows_1 {
            function handler(): void;
            function handler(): void;
            const deep: boolean;
            const immediate: boolean;
        }
        export { rows_1 as rows };
        export namespace selectOptions_1 {
            export function handler(): void;
            export function handler(): void;
            const deep_1: boolean;
            export { deep_1 as deep };
            const immediate_1: boolean;
            export { immediate_1 as immediate };
        }
        export { selectOptions_1 as selectOptions };
        export namespace paginationOptions_1 {
            export function handler(newValue: any, oldValue: any): void;
            export function handler(newValue: any, oldValue: any): void;
            const deep_2: boolean;
            export { deep_2 as deep };
            const immediate_2: boolean;
            export { immediate_2 as immediate };
        }
        export { paginationOptions_1 as paginationOptions };
        export namespace searchOptions_1 {
            export function handler(): void;
            export function handler(): void;
            const deep_3: boolean;
            export { deep_3 as deep };
            const immediate_3: boolean;
            export { immediate_3 as immediate };
        }
        export { searchOptions_1 as searchOptions };
        export namespace sortOptions_1 {
            export function handler(newValue: any, oldValue: any): void;
            export function handler(newValue: any, oldValue: any): void;
            const deep_4: boolean;
            export { deep_4 as deep };
        }
        export { sortOptions_1 as sortOptions };
        export function selectedRows(newValue: any, oldValue: any): void;
        export function selectedRows(newValue: any, oldValue: any): void;
    }
    namespace computed {
        function tableStyles(): string | (() => any);
        function tableStyles(): string | (() => any);
        function hasFooterSlot(): any;
        function hasFooterSlot(): any;
        function wrapperStyles(): any;
        function wrapperStyles(): any;
        function rowKeyField(): any;
        function rowKeyField(): any;
        function hasHeaderRowTemplate(): any;
        function hasHeaderRowTemplate(): any;
        function showEmptySlot(): boolean;
        function showEmptySlot(): boolean;
        function allSelected(): any;
        function allSelected(): any;
        function allSelectedIndeterminate(): any;
        function allSelectedIndeterminate(): any;
        function selectionInfo(): string;
        function selectionInfo(): string;
        function selectedRowCount(): number;
        function selectedRowCount(): number;
        function selectedPageRowsCount(): number;
        function selectedPageRowsCount(): number;
        function selectedPageRows(): any[];
        function selectedPageRows(): any[];
        function selectedRows(): any[];
        function selectedRows(): any[];
        function fullColspan(): number;
        function fullColspan(): number;
        function groupHeaderOnTop(): boolean;
        function groupHeaderOnTop(): boolean;
        function groupHeaderOnBottom(): boolean;
        function groupHeaderOnBottom(): boolean;
        function totalRowCount(): any;
        function totalRowCount(): any;
        function totalPageRowCount(): any;
        function totalPageRowCount(): any;
        function wrapStyleClasses(): string;
        function wrapStyleClasses(): string;
        function tableStyleClasses(): any;
        function tableStyleClasses(): any;
        function searchTerm(): any;
        function searchTerm(): any;
        function globalSearchAllowed(): boolean;
        function globalSearchAllowed(): boolean;
        function processedRows(): any;
        function processedRows(): any;
        function paginated(): any[] | (() => any);
        function paginated(): any[] | (() => any);
        function originalRows(): any;
        function originalRows(): any;
        function typedColumns(): any;
        function typedColumns(): any;
        function hasRowClickListener(): any;
        function hasRowClickListener(): any;
    }
    namespace methods {
        function handleExpanded(headerRow: any): void;
        function handleExpanded(headerRow: any): void;
        function toggleExpand(id: any): void;
        function toggleExpand(id: any): void;
        function expandAll(): void;
        function expandAll(): void;
        function collapseAll(): void;
        function collapseAll(): void;
        function getColumnForField(field: any): any;
        function getColumnForField(field: any): any;
        function handleSearch(): void;
        function handleSearch(): void;
        function reset(): void;
        function reset(): void;
        function emitSelectedRows(): void;
        function emitSelectedRows(): void;
        function unselectAllInternal(forceAll: any): void;
        function unselectAllInternal(forceAll: any): void;
        function toggleSelectAll(): void;
        function toggleSelectAll(): void;
        function toggleSelectGroup(event: any, headerRow: any): void;
        function toggleSelectGroup(event: any, headerRow: any): void;
        function changePage(value: any): void;
        function changePage(value: any): void;
        function pageChangedEvent(): {
            currentPage: any;
            currentPerPage: any;
            total: number;
        };
        function pageChangedEvent(): {
            currentPage: any;
            currentPerPage: any;
            total: number;
        };
        function pageChanged(pagination: any): void;
        function pageChanged(pagination: any): void;
        function perPageChanged(pagination: any): void;
        function perPageChanged(pagination: any): void;
        function changeSort(sorts: any): void;
        function changeSort(sorts: any): void;
        function onCheckboxClicked(row: any, index: any, event: any): void;
        function onCheckboxClicked(row: any, index: any, event: any): void;
        function onRowDoubleClicked(row: any, index: any, event: any): void;
        function onRowDoubleClicked(row: any, index: any, event: any): void;
        function onRowClicked(row: any, index: any, event: any): void;
        function onRowClicked(row: any, index: any, event: any): void;
        function onRowAuxClicked(row: any, index: any, event: any): void;
        function onRowAuxClicked(row: any, index: any, event: any): void;
        function onCellClicked(row: any, column: any, rowIndex: any, event: any): void;
        function onCellClicked(row: any, column: any, rowIndex: any, event: any): void;
        function onMouseenter(row: any, index: any): void;
        function onMouseenter(row: any, index: any): void;
        function onMouseleave(row: any, index: any): void;
        function onMouseleave(row: any, index: any): void;
        function searchTableOnEnter(): void;
        function searchTableOnEnter(): void;
        function searchTableOnKeyUp(): void;
        function searchTableOnKeyUp(): void;
        function resetTable(): void;
        function resetTable(): void;
        function collect(obj: any, field: any): any;
        function collect(obj: any, field: any): any;
        function collectFormatted(obj: any, column: any, headerRow?: boolean): any;
        function collectFormatted(obj: any, column: any, headerRow?: boolean): any;
        function formattedRow(row: any, isHeaderRow?: boolean): {};
        function formattedRow(row: any, isHeaderRow?: boolean): {};
        function getClasses(index: any, element: any, row: any): {
            'vgt-right-align': any;
            'vgt-left-align': boolean;
        };
        function getClasses(index: any, element: any, row: any): {
            'vgt-right-align': any;
            'vgt-left-align': boolean;
        };
        function filterRows(columnFilters: any, fromFilter?: boolean): void;
        function filterRows(columnFilters: any, fromFilter?: boolean): void;
        function getCurrentIndex(rowId: any): number;
        function getCurrentIndex(rowId: any): number;
        function getRowStyleClass(row: any): string;
        function getRowStyleClass(row: any): string;
        function handleGrouped(originalRows: any): any;
        function handleGrouped(originalRows: any): any;
        function initializePagination(): void;
        function initializePagination(): void;
        function initializeSearch(): void;
        function initializeSearch(): void;
        function initializeSort(): void;
        function initializeSort(): void;
        function initializeSelect(): void;
        function initializeSelect(): void;
    }
    function mounted(): void;
    function mounted(): void;
    const components: {
        DtPagination: import("vue").DefineComponent<{
            styleClass: {
                type: StringConstructor;
                default: string;
            };
            total: {
                type: NumberConstructor;
                default: null;
            };
            perPage: {
                type: NumberConstructor;
            };
            rtl: {
                type: BooleanConstructor;
                default: boolean;
            };
            perPageDropdownEnabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            customRowsPerPageDropdown: {
                type: import("vue").PropType<any[]>;
                default: () => never[];
            };
            paginateDropdownAllowAll: {
                type: BooleanConstructor;
                default: boolean;
            };
            mode: {
                type: StringConstructor;
                default: string;
            };
            nextText: {
                type: StringConstructor;
                default: string;
            };
            prevText: {
                type: StringConstructor;
                default: string;
            };
            rowsPerPageText: {
                type: StringConstructor;
                default: string;
            };
            ofText: {
                type: StringConstructor;
                default: string;
            };
            pageText: {
                type: StringConstructor;
                default: string;
            };
            allText: {
                type: StringConstructor;
                default: string;
            };
            infoFn: {
                type: import("vue").PropType<CallableFunction | null>;
                default: null;
            };
        }, {
            getId: () => string;
            changePage: (pageNumber: number, emit?: boolean) => void;
            pageChanged: (emit?: boolean) => void;
            nextPage: () => void;
            previousPage: () => void;
            perPageChanged: (oldValue: any) => void;
            handlePerPage: () => void;
            pagesCount: import("vue").ComputedRef<number>;
            nextIsPossible: import("vue").ComputedRef<boolean>;
            prevIsPossible: import("vue").ComputedRef<boolean>;
            id: import("vue").Ref<string>;
            currentPage: import("vue").Ref<number>;
            prevPage: import("vue").Ref<number>;
            currentPerPage: import("vue").Ref<number>;
            rowsPerPageOptions: import("vue").Ref<any[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            styleClass: {
                type: StringConstructor;
                default: string;
            };
            total: {
                type: NumberConstructor;
                default: null;
            };
            perPage: {
                type: NumberConstructor;
            };
            rtl: {
                type: BooleanConstructor;
                default: boolean;
            };
            perPageDropdownEnabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            customRowsPerPageDropdown: {
                type: import("vue").PropType<any[]>;
                default: () => never[];
            };
            paginateDropdownAllowAll: {
                type: BooleanConstructor;
                default: boolean;
            };
            mode: {
                type: StringConstructor;
                default: string;
            };
            nextText: {
                type: StringConstructor;
                default: string;
            };
            prevText: {
                type: StringConstructor;
                default: string;
            };
            rowsPerPageText: {
                type: StringConstructor;
                default: string;
            };
            ofText: {
                type: StringConstructor;
                default: string;
            };
            pageText: {
                type: StringConstructor;
                default: string;
            };
            allText: {
                type: StringConstructor;
                default: string;
            };
            infoFn: {
                type: import("vue").PropType<CallableFunction | null>;
                default: null;
            };
        }>>, {
            ofText: string;
            pageText: string;
            mode: string;
            infoFn: CallableFunction | null;
            styleClass: string;
            total: number;
            rtl: boolean;
            perPageDropdownEnabled: boolean;
            customRowsPerPageDropdown: any[];
            paginateDropdownAllowAll: boolean;
            nextText: string;
            prevText: string;
            rowsPerPageText: string;
            allText: string;
        }>;
        'vgt-global-search': import("vue").DefineComponent<{
            value: {
                type: StringConstructor;
            };
            searchEnabled: {
                type: BooleanConstructor;
            };
            globalSearchPlaceholder: {
                type: StringConstructor;
            };
        }, {
            showControlBar: import("vue").ComputedRef<boolean>;
            entered: (ev: Event) => void;
            updateValue: (ev: Event) => void;
            globalSearchTerm: import("vue").Ref<null>;
            id: import("vue").Ref<string>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "keyup" | "enter")[], "input" | "keyup" | "enter", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            value: {
                type: StringConstructor;
            };
            searchEnabled: {
                type: BooleanConstructor;
            };
            globalSearchPlaceholder: {
                type: StringConstructor;
            };
        }>> & {
            onInput?: ((...args: any[]) => any) | undefined;
            onKeyup?: ((...args: any[]) => any) | undefined;
            onEnter?: ((...args: any[]) => any) | undefined;
        }, {
            searchEnabled: boolean;
        }>;
        'vgt-header-row': import("vue").DefineComponent<{
            headerRow: {
                type: import("vue").PropType<import("../interfaces").HeaderRow>;
                required: true;
            };
            columns: {
                type: import("vue").PropType<import("../interfaces").Column[]>;
                required: true;
            };
            lineNumbers: {
                type: BooleanConstructor;
            };
            selectable: {
                type: BooleanConstructor;
            };
            selectAllByGroup: {
                type: BooleanConstructor;
            };
            collapsable: {
                type: (BooleanConstructor | NumberConstructor)[];
                default: boolean;
            };
            collectFormatted: {
                type: FunctionConstructor;
                required: true;
            };
            formattedRow: {
                type: FunctionConstructor;
                required: true;
            };
            getClasses: {
                type: FunctionConstructor;
                required: true;
            };
            fullColspan: {
                type: NumberConstructor;
            };
            groupIndex: {
                type: NumberConstructor;
            };
        }, {
            allSelected: import("vue").ComputedRef<boolean>;
            columnCollapsable: (currentIndex: any) => boolean;
            toggleSelectGroup: (event: any) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("vgtExpand" | "select-group-change")[], "vgtExpand" | "select-group-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            headerRow: {
                type: import("vue").PropType<import("../interfaces").HeaderRow>;
                required: true;
            };
            columns: {
                type: import("vue").PropType<import("../interfaces").Column[]>;
                required: true;
            };
            lineNumbers: {
                type: BooleanConstructor;
            };
            selectable: {
                type: BooleanConstructor;
            };
            selectAllByGroup: {
                type: BooleanConstructor;
            };
            collapsable: {
                type: (BooleanConstructor | NumberConstructor)[];
                default: boolean;
            };
            collectFormatted: {
                type: FunctionConstructor;
                required: true;
            };
            formattedRow: {
                type: FunctionConstructor;
                required: true;
            };
            getClasses: {
                type: FunctionConstructor;
                required: true;
            };
            fullColspan: {
                type: NumberConstructor;
            };
            groupIndex: {
                type: NumberConstructor;
            };
        }>> & {
            onVgtExpand?: ((...args: any[]) => any) | undefined;
            "onSelect-group-change"?: ((...args: any[]) => any) | undefined;
        }, {
            lineNumbers: boolean;
            selectable: boolean;
            selectAllByGroup: boolean;
            collapsable: number | boolean;
        }>;
        'vgt-table-header': import("vue").DefineComponent<{
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
                type: import("vue").PropType<import("../interfaces").Column[]>;
                required: true;
            };
            mode: {
                type: StringConstructor;
            };
            typedColumns: {
                type: import("vue").PropType<Object[]>;
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
            isSortableColumn: (column: import("../interfaces").Column) => boolean;
            sort: (e: any, column: import("../interfaces").Column) => void;
            setInitialSort: (sorts: import("../interfaces").Sort[]) => void;
            getColumnSort: (column: import("../interfaces").Column) => string | null;
            getColumnSortLong: (column: import("../interfaces").Column) => "ascending" | "descending";
            getHeaderClasses: (column: import("../interfaces").Column, index: number) => any;
            filterRows: (columnFilters: any) => void;
            getWidthStyle: (dom: Element) => {
                width: string;
            };
            setColumnStyles: () => void;
            getColumnStyle: (column: import("../interfaces").Column, index: number) => {
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
                    type: import("vue").PropType<import("../interfaces").Column[]>;
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
                isFilterable: (column: import("../interfaces").Column) => boolean;
                fieldKey: (field: any) => any;
                reset: (emitEvent?: boolean) => void;
                isDropdown: (column: import("../interfaces").Column) => number | false;
                isDropdownObjects: (column: import("../interfaces").Column) => boolean | 0;
                isDropdownArray: (column: import("../interfaces").Column) => boolean | 0;
                getClasses: (column: import("../interfaces").Column) => string;
                getPlaceholder: (column: import("../interfaces").Column) => string;
                getName: (column: import("../interfaces").Column) => string;
                updateFiltersOnEnter: (column: import("../interfaces").Column, event: KeyboardEvent) => void;
                updateFiltersImmediately: (field: any, event: Event) => void;
                updateFilters: (column: import("../interfaces").Column, value: any) => void;
                updateFiltersOnKeyup: (column: import("../interfaces").Column, event: Event) => void;
                updateSlotFilter: (column: import("../interfaces").Column, value: any) => void;
                hasFilterRow: import("vue").ComputedRef<boolean>;
                columnFilters: import("vue").Ref<any>;
                timer: import("vue").Ref<number>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "filter-changed"[], "filter-changed", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                lineNumbers: {
                    type: BooleanConstructor;
                };
                columns: {
                    type: import("vue").PropType<import("../interfaces").Column[]>;
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
                columns: import("../interfaces").Column[];
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
                type: import("vue").PropType<import("../interfaces").Column[]>;
                required: true;
            };
            mode: {
                type: StringConstructor;
            };
            typedColumns: {
                type: import("vue").PropType<Object[]>;
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
        ExportButton: import("vue").DefineComponent<{
            tableId: {
                type: StringConstructor;
                required: true;
            };
        }, {
            exportTableToCSV: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            tableId: {
                type: StringConstructor;
                required: true;
            };
        }>>, {}>;
    };
}
export default _default;
