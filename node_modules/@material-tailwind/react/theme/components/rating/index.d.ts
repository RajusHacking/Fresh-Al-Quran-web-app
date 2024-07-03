import type { count, value, ratedIcon, unratedIcon, color, className, onChange, readonly as readonlyType } from "../../../types/components/rating";
import ratingColors from "./ratingColors";
export interface RatingStyleTypes {
    defaultProps?: {
        count?: count;
        value?: value;
        ratedIcon?: ratedIcon;
        unratedIcon?: unratedIcon;
        ratedColor?: color;
        unratedColor?: color;
        className?: className;
        onChange?: onChange;
        readonly?: readonlyType;
    };
    valid?: {
        colors?: string[];
    };
    styles?: {
        base?: {
            rating?: object;
            icon?: object;
        };
        colors?: typeof ratingColors;
    };
}
export declare const rating: RatingStyleTypes;
export default rating;
//# sourceMappingURL=index.d.ts.map