import type { variant, size, color, label, error, success, resize, labelProps, className, shrink, containerProps } from "../../../types/components/input";
export interface TextareaSizeStylesType {
    container?: object;
    textarea?: object;
    label?: object;
}
export interface TextareaStateStylesType {
    textarea?: object;
    label?: object;
}
export interface TextareaVariantStylesType {
    base?: {
        container?: object;
        textarea?: object;
        label?: object;
    };
    sizes?: {
        md?: TextareaSizeStylesType;
        lg?: TextareaSizeStylesType;
    };
    colors?: {
        textarea?: object;
        label?: object;
    };
    error?: TextareaStateStylesType;
    success?: TextareaStateStylesType;
    shrink?: TextareaStateStylesType;
}
export interface TextareaStylesType {
    defaultProps?: {
        variant?: variant;
        size?: size;
        color?: color;
        label?: label;
        error?: error;
        success?: success;
        resize?: resize;
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
            textarea?: object;
            label?: object;
            asterisk?: object;
        };
        variants?: {
            outlined: TextareaVariantStylesType;
            standard: TextareaVariantStylesType;
            static: TextareaVariantStylesType;
        };
    };
}
export declare const textarea: TextareaStylesType;
export default textarea;
//# sourceMappingURL=index.d.ts.map