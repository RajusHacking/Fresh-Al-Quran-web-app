import React from "react";
import { MotionProps } from "framer-motion";
import { open, animate, className, children } from "../../types/components/collapse";
export interface CollapseProps extends Omit<MotionProps, "animate"> {
    open: open;
    animate?: animate;
    className?: className;
    children: children;
}
export declare const Collapse: React.ForwardRefExoticComponent<CollapseProps & React.RefAttributes<HTMLDivElement>>;
export default Collapse;
//# sourceMappingURL=index.d.ts.map