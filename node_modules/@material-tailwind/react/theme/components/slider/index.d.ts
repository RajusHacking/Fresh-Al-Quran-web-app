import type { color, size, min, max, step, inputProps, className, thumbClassName, trackClassName, barClassName } from "../../../types/components/slider";
import sliderColor from "./sliderColor";
export interface SliderStyleTypes {
    defaultProps?: {
        color?: color;
        size?: size;
        min?: min;
        max?: max;
        step?: step;
        className?: className;
        thumbClassName?: thumbClassName;
        trackClassName?: trackClassName;
        barClassName?: barClassName;
        inputProps?: inputProps;
    };
    valid?: {
        sizes?: string[];
        colors?: string[];
    };
    styles?: {
        base?: {
            container?: {};
            slider?: {};
            track?: {};
            thumb?: {};
            bar?: {};
        };
        sizes?: {
            sm?: {
                container?: object;
                slider?: object;
                track?: object;
                thumb?: object;
                bar?: object;
            };
            md?: {
                container?: object;
                slider?: object;
                track?: object;
                thumb?: object;
                bar?: object;
            };
            lg?: {
                container?: object;
                slider?: object;
                track?: object;
                thumb?: object;
                bar?: object;
            };
        };
        colors?: typeof sliderColor;
    };
}
export declare const slider: SliderStyleTypes;
export default slider;
//# sourceMappingURL=index.d.ts.map