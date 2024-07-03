import type { variant, size, color, label, error, success, icon, labelProps, shrink, className, containerProps } from "../../../types/components/input";
export interface InputSizeStylesType {
    container?: object;
    input?: object;
    label?: object;
    icon?: object;
}
export interface InputStateStylesType {
    input?: object;
    label?: object;
}
export interface InputVariantStylesType {
    base?: {
        input?: object;
        inputWithIcon?: object;
        icon?: object;
        label?: object;
    };
    sizes?: {
        md?: InputSizeStylesType;
        lg?: InputSizeStylesType;
    };
    colors?: {
        input?: object;
        label?: object;
    };
    error?: InputStateStylesType;
    success?: InputStateStylesType;
    shrink?: InputStateStylesType;
}
export interface InputStylesType {
    defaultProps?: {
        variant?: variant;
        size?: size;
        color?: color;
        label?: label;
        error?: error;
        success?: success;
        icon?: icon;
        labelProps?: labelProps;
        containerProps?: containerProps;
        shrink?: shrink;
        className?: className;
    };
    valid?: {
        variants?: string[];
        sizes?: string[];
        colors?: string[];
    };
    styles?: {
        base?: {
            container?: object;
            input?: object;
            label?: object;
            icon?: object;
            asterisk?: object;
        };
        variants?: {
            outlined: InputVariantStylesType;
            standard: InputVariantStylesType;
            static: InputVariantStylesType;
        };
    };
}
export declare const input: InputStylesType;
export default input;
//# sourceMappingURL=index.d.ts.map