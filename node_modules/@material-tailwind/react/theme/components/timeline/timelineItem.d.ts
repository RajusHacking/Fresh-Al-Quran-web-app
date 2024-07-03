import { color, variant } from "../../../types/components/timeline";
export interface TimelineItemStyleTypes {
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
    };
}
export declare const timelineItem: TimelineItemStyleTypes;
export default timelineItem;
//# sourceMappingURL=timelineItem.d.ts.map