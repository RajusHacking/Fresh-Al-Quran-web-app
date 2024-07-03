import React from "react";
import { MotionProps } from "framer-motion";
import { open, animate, className, children } from "../../types/components/navbar";
export interface MobileNavProps extends Omit<MotionProps, "animate"> {
    open: open;
    animate?: animate;
    className?: className;
    children: children;
}
export declare const MobileNav: React.ForwardRefExoticComponent<MobileNavProps & React.RefAttributes<HTMLDivElement>>;
export default MobileNav;
//# sourceMappingURL=MobileNav.d.ts.map