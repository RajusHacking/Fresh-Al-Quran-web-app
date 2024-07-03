import React from "react";
import { className, children } from "../../types/components/timeline";
export declare function useTimelineItem(): any;
export interface TimelineItemProps extends React.HTMLAttributes<HTMLLIElement> {
    className?: className;
    children?: children;
}
export declare const TimelineItem: React.ForwardRefExoticComponent<TimelineItemProps & React.RefAttributes<HTMLLIElement>>;
export default TimelineItem;
//# sourceMappingURL=TimelineItem.d.ts.map