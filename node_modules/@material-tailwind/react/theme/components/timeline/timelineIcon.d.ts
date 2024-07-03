import ghost from "./timelineIconColors/ghost";
import filled from "./timelineIconColors/filled";
import outlined from "./timelineIconColors/outlined";
import gradient from "./timelineIconColors/gradient";
import { color, variant } from "../../../types/components/timeline";
export interface TimelineIconStyleTypes {
    defaultProps?: {
        color?: color;
        variant?: variant;
    };
    valid?: {
        colors?: string[];
        variants?: string[];
    };
    styles?: {
        base?: object;
        variants?: {
            ghost?: typeof ghost;
            filled?: typeof filled;
            outlined?: typeof outlined;
            gradient?: typeof gradient;
        };
    };
}
export declare const timelineIcon: TimelineIconStyleTypes;
export default timelineIcon;
//# sourceMappingURL=timelineIcon.d.ts.map