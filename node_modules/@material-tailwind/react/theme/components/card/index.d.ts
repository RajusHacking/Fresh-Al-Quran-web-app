import cardFilled from "./cardFilled";
import cardGradient from "./cardGradient";
import type { variant, color, shadow, className } from "../../../types/components/card";
export interface CardStylesType {
    defaultProps?: {
        variant?: variant;
        color?: color;
        shadow?: shadow;
        className?: className;
    };
    valid?: {
        variants?: string[];
        colors?: string[];
    };
    styles?: {
        base?: {
            initial?: object;
            shadow?: object;
        };
        variants?: {
            filled?: typeof cardFilled;
            gradient?: typeof cardGradient;
        };
    };
}
declare const card: CardStylesType;
export default card;
//# sourceMappingURL=index.d.ts.map