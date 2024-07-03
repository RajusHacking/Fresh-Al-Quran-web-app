import typographyColors from "./typographyColors";
import type { variant, color, asType, textGradient, className } from "../../../types/components/typography";
export interface TypographyStylesType {
    defaultProps?: {
        variant?: variant;
        color?: color;
        as?: asType;
        textGradient?: textGradient;
        className?: className;
    };
    valid?: {
        variants?: string[];
        colors?: string[];
    };
    styles?: {
        variants?: {
            h1?: object;
            h2?: object;
            h3?: object;
            h4?: object;
            h5?: object;
            h6?: object;
            lead?: object;
            paragraph?: object;
            small?: object;
        };
        textGradient?: object;
        colors?: typeof typographyColors;
    };
}
export declare const typography: TypographyStylesType;
export default typography;
//# sourceMappingURL=index.d.ts.map