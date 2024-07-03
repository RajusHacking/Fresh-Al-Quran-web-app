import buttonFilled from "../button/buttonFilled";
import buttonGradient from "../button/buttonGradient";
import buttonOutlined from "../button/buttonOutlined";
import buttonText from "../button/buttonText";
import type { variant, size, color, fullWidth, ripple, className } from "../../../types/components/button";
export interface IconButtonStyleTypes {
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
        base?: object;
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
export declare const iconButton: IconButtonStyleTypes;
export default iconButton;
//# sourceMappingURL=index.d.ts.map