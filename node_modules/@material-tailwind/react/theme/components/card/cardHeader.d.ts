import cardFilled from "./cardFilled";
import cardGradient from "./cardGradient";
import type { variant, color, shadow, floated, className } from "../../../types/components/card";
export interface CardHeaderStylesType {
    defaultProps?: {
        variant?: variant;
        color?: color;
        shadow?: shadow;
        floated?: floated;
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
            floated?: object;
        };
        variants?: {
            filled?: typeof cardFilled;
            gradient?: typeof cardGradient;
        };
    };
}
declare const cardHeader: CardHeaderStylesType;
export default cardHeader;
//# sourceMappingURL=cardHeader.d.ts.map