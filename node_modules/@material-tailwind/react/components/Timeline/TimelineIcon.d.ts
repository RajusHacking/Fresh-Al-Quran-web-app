import React from "react";
import { className, children, color, variant } from "../../types/components/timeline";
export interface TimelineIconProps extends React.HTMLAttributes<HTMLSpanElement> {
    className?: className;
    children?: children;
    variant?: variant;
    color?: color;
}
export declare const TimelineIcon: React.ForwardRefExoticComponent<TimelineIconProps & React.RefAttributes<HTMLSpanElement>>;
export default TimelineIcon;
//# sourceMappingURL=TimelineIcon.d.ts.map