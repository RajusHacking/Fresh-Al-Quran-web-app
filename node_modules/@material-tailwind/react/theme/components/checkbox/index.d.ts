import checkboxColors from "./checkboxColors";
import type { color, label, icon, ripple, className, disabled, objectType } from "../../../types/components/checkbox";
export interface CheckboxStylesType {
    defaultProps?: {
        color?: color;
        label?: label;
        icon?: icon;
        ripple?: ripple;
        className?: className;
        disabled?: disabled;
        containerProps?: objectType;
        labelProps?: objectType;
        iconProps?: objectType;
    };
    valid?: {
        colors?: string[];
    };
    styles?: {
        base?: {
            root?: object;
            container?: object;
            input?: object;
            label?: object;
            icon?: object;
            disabled?: object;
        };
        colors: typeof checkboxColors;
    };
}
export declare const checkbox: CheckboxStylesType;
export default checkbox;
//# sourceMappingURL=index.d.ts.map