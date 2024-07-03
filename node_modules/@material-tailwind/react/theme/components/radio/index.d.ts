import radioColors from "./radioColors";
import type { color, label, icon, ripple, className, objectType, disabled } from "../../../types/components/checkbox";
export interface RadioStylesType {
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
        colors: typeof radioColors;
    };
}
export declare const radio: RadioStylesType;
export default radio;
//# sourceMappingURL=index.d.ts.map