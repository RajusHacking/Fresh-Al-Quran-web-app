import buttonGroupDividerColor from "./buttonGroupDividerColor";
import type { variant, size, color, fullWidth, ripple, className } from "../../../types/components/button";
export interface ButtonGroupStyleTypes {
    defaultProps?: {
        variant?: variant;
        size?: size;
        color?: color;
        fullWidth?: fullWidth;
        ripple?: ripple;
        className?: className;
    };
    valid?: {
        variants?: string[];
        sizes?: string[];
        colors?: string[];
    };
    styles?: {
        base?: {
            initial?: object;
            fullWidth?: object;
        };
        dividerColor?: typeof buttonGroupDividerColor;
    };
}
export declare const buttonGroup: ButtonGroupStyleTypes;
export default buttonGroup;
//# sourceMappingURL=index.d.ts.map