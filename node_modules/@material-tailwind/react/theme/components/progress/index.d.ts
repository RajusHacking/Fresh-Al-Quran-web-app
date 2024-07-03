import progressFilled from "./progressFilled";
import progressGradient from "./progressGradient";
import type { variant, color, size, value, label, barProps, className } from "../../../types/components/progress";
export interface ProgressStylesType {
    defaultProps?: {
        variant?: variant;
        color?: color;
        size?: size;
        value?: value;
        label?: label;
        barProps?: barProps;
        className?: className;
    };
    valid: {
        variants?: string[];
        colors?: string[];
        sizes?: string[];
    };
    styles?: {
        base?: {
            container?: {
                initial?: object;
                withLabel?: object;
            };
            bar?: object;
        };
        sizes?: {
            sm?: {
                container?: {
                    initial?: object;
                    withLabel?: object;
                };
                bar?: object;
            };
            md?: {
                container?: {
                    initial?: object;
                    withLabel?: object;
                };
                bar?: object;
            };
            lg?: {
                container?: {
                    initial?: object;
                    withLabel?: object;
                };
                bar?: object;
            };
        };
        variants?: {
            filled?: typeof progressFilled;
            gradient?: typeof progressGradient;
        };
    };
}
export declare const progress: ProgressStylesType;
export default progress;
//# sourceMappingURL=index.d.ts.map