import { PropType } from 'vue';
import { HeaderRow, Column } from '../interfaces';
declare const _default: import("vue").DefineComponent<{
    headerRow: {
        type: PropType<HeaderRow>;
        required: true;
    };
    columns: {
        type: PropType<Column[]>;
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
        type: PropType<HeaderRow>;
        required: true;
    };
    columns: {
        type: PropType<Column[]>;
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
export default _default;
