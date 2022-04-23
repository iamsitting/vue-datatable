export interface Row {
    vgtSelected: any;
}
export interface HeaderRow {
    children: Row[];
    mode: string;
    vgtIsExpanded: boolean;
    html: boolean;
    label: string;
}
export interface FilterDropdownItem {
    value: any;
    text: string;
}
export interface FilterOptions {
    styleClass: string;
    enabled: boolean;
    placeholder: string;
    filterValue: string;
    filterDropdownItems: FilterDropdownItem[];
    filterFn: CallableFunction;
    trigger: string;
    slotFilterField: any;
    formatValue: any;
}
export interface Column {
    label: string;
    field: string;
    type: string;
    sortable: boolean;
    html: boolean;
    hidden: boolean;
    filterOptions: FilterOptions;
    width: string;
    dateInputFormat: string;
    dateOutputFormat: string;
    firstSortType: string;
    tooltip: string;
}
export interface ColumnStyle {
    width?: string;
    maxWidth?: string;
    minWidth?: string;
}
export interface Sort {
    field: string;
    type: string;
}
export declare type HTMLElementEvent<T extends HTMLElement> = Event & {
    target: T;
};
