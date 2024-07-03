import navbarFilled from "./navbarFilled";
import navbarGradient from "./navbarGradient";
import type { variant, color, shadow, blurred, fullWidth, className } from "../../../types/components/navbar";
export interface NavbarStylesType {
    defaultProps?: {
        variant?: variant;
        color?: color;
        shadow?: shadow;
        blurred?: blurred;
        fullWidth?: fullWidth;
        className?: className;
    };
    valid: {
        variants?: string[];
        colors?: string[];
    };
    styles?: {
        base?: {
            navbar?: {
                initial?: object;
                shadow?: object;
                blurred?: object;
                fullWidth?: object;
            };
            mobileNav?: object;
        };
        variants?: {
            filled?: typeof navbarFilled;
            gradient?: typeof navbarGradient;
        };
    };
}
export declare const navbar: NavbarStylesType;
export default navbar;
//# sourceMappingURL=index.d.ts.map