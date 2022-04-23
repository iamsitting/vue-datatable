declare const _default: import("vue").DefineComponent<{
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
export default _default;
