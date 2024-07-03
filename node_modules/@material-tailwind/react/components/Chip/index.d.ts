import React from "react";
import { MotionProps } from "framer-motion";
import type { variant, color, icon, open, onClose, action, animate, className, value, size } from "../../types/components/chip";
export interface ChipProps extends Omit<MotionProps, "animate"> {
    variant?: variant;
    size?: size;
    color?: color;
    icon?: icon;
    open?: open;
    onClose?: onClose;
    action?: action;
    animate?: animate;
    className?: className;
    value: value;
}
export declare const Chip: React.ForwardRefExoticComponent<ChipProps & React.RefAttributes<HTMLDivElement>>;
export default Chip;
//# sourceMappingURL=index.d.ts.map