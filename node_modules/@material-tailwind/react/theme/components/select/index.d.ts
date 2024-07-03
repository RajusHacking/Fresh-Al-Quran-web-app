import type { variant, size, color, label, error, success, arrow, value, onChange, selected, offset, dismiss, animate, autoHeight, lockScroll, labelProps, menuProps, className, disabled, containerProps } from "../../../types/components/select";
export interface SelectSizeStylesType {
    container?: object;
    select?: object;
    label?: {
        initial?: object;
        states?: {
            close?: object;
            open?: object;
            withValue?: object;
        };
    };
}
export interface SelectStatesStylesType {
    close?: {
        select?: object;
        label?: object;
    };
    open?: {
        select?: object;
        label?: object;
    };
    withValue?: {
        select?: object;
        label?: object;
    };
}
export interface SelectStateStylesType {
    select?: {
        initial?: object;
        states?: {
            close?: object;
            open?: object;
            withValue?: object;
        };
    };
    label?: {
        initial?: object;
        states?: {
            close?: object;
            open?: object;
            withValue?: object;
        };
    };
}
export interface SelectVariantStylesType {
    base?: {
        select?: object;
        label?: object;
    };
    sizes?: {
        md?: SelectSizeStylesType;
        lg?: SelectSizeStylesType;
    };
    colors?: {
        select?: object;
        label?: object;
    };
    states?: SelectStatesStylesType;
    error?: SelectStateStylesType;
    success?: SelectStateStylesType;
}
export interface SelectStylesType {
    defaultProps?: {
        variant?: variant;
        color?: color;
        size?: size;
        label?: label;
        error?: error;
        success?: success;
        arrow?: arrow;
        value?: value;
        onChange?: onChange;
        selected?: selected;
        offset?: offset;
        dismiss?: dismiss;
        animate?: animate;
        autoHeight?: autoHeight;
        lockScroll?: lockScroll;
        labelProps?: labelProps;
        menuProps?: menuProps;
        className?: className;
        disabled?: disabled;
        containerProps?: containerProps;
    };
    valid?: {
        variants?: string[];
        sizes?: string[];
        colors?: string[];
    };
    styles?: {
        base?: {
            container?: object;
            select?: object;
            arrow?: {
                initial?: object;
                active?: object;
            };
            label?: object;
            menu?: object;
            option?: {
                initial?: object;
                active?: object;
                disabled?: object;
            };
        };
        variants?: {
            outlined: SelectVariantStylesType;
            standard: SelectVariantStylesType;
            static: SelectVariantStylesType;
        };
    };
}
export declare const select: SelectStylesType;
export default select;
//# sourceMappingURL=index.d.ts.map