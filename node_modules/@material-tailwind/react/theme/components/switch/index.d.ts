import switchColors from "./switchColors";
import type { color, label, ripple, className, disabled, objectType } from "../../../types/components/checkbox";
export interface SwitchButtonStylesType {
    defaultProps?: {
        color?: color;
        label?: label;
        ripple?: ripple;
        className?: className;
        disabled?: disabled;
        containerProps?: objectType;
        labelProps?: objectType;
        circleProps?: objectType;
    };
    valid?: {
        colors?: string[];
    };
    styles?: {
        base?: {
            root?: object;
            container?: object;
            input?: object;
            circle?: object;
            ripple?: object;
            label?: object;
            disabled?: object;
        };
        colors: typeof switchColors;
    };
}
export declare const switchButton: SwitchButtonStylesType;
export default switchButton;
//# sourceMappingURL=index.d.ts.map