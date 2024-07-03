import React from "react";
import { className, children } from "../../types/components/timeline";
export interface TimelineBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: className;
    children?: children;
}
export declare const TimelineHeader: React.ForwardRefExoticComponent<TimelineBodyProps & React.RefAttributes<HTMLDivElement>>;
export default TimelineHeader;
//# sourceMappingURL=TimelineBody.d.ts.map