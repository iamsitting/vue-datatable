import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
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
        type: PropType<any[]>;
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
        type: PropType<CallableFunction | null>;
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
        type: PropType<any[]>;
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
        type: PropType<CallableFunction | null>;
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
export default _default;
