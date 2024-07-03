import buttonFilled from "./buttonFilled";
import buttonGradient from "./buttonGradient";
import buttonOutlined from "./buttonOutlined";
import buttonText from "./buttonText";
import type { variant, size, color, fullWidth, ripple, className } from "../../../types/components/button";
export interface ButtonStyleTypes {
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
        sizes?: {
            sm?: object;
            md?: object;
            lg?: object;
        };
        variants?: {
            filled?: typeof buttonFilled;
            gradient?: typeof buttonGradient;
            outlined?: typeof buttonOutlined;
            text?: typeof buttonText;
        };
    };
}
export declare const button: ButtonStyleTypes;
export default button;
//# sourceMappingURL=index.d.ts.map