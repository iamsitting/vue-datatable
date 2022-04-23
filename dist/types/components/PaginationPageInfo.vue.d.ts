import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    currentPage: {
        default: number;
    };
    lastPage: {
        default: number;
    };
    totalRecords: {
        default: number;
    };
    ofText: {
        default: string;
        type: StringConstructor;
    };
    pageText: {
        default: string;
        type: StringConstructor;
    };
    currentPerPage: {
        default: number;
    };
    mode: {
        default: string;
    };
    infoFn: {
        type: PropType<any>;
        default: null;
    };
}, {
    pageInfo: import("vue").ComputedRef<string>;
    firstRecordOnPage: import("vue").ComputedRef<number>;
    lastRecordOnPage: import("vue").ComputedRef<number>;
    recordInfo: import("vue").ComputedRef<string>;
    infoParams: import("vue").ComputedRef<{
        firstRecordOnPage: number;
        lastRecordOnPage: number;
        totalRecords: number;
        currentPage: number;
        totalPages: number;
    }>;
    changePage: (event: Event) => void;
    id: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    currentPage: {
        default: number;
    };
    lastPage: {
        default: number;
    };
    totalRecords: {
        default: number;
    };
    ofText: {
        default: string;
        type: StringConstructor;
    };
    pageText: {
        default: string;
        type: StringConstructor;
    };
    currentPerPage: {
        default: number;
    };
    mode: {
        default: string;
    };
    infoFn: {
        type: PropType<any>;
        default: null;
    };
}>>, {
    currentPage: number;
    lastPage: number;
    totalRecords: number;
    ofText: string;
    pageText: string;
    currentPerPage: number;
    mode: string;
    infoFn: any;
}>;
export default _default;
