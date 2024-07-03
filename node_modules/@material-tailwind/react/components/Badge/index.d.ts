import React from "react";
import { color, invisible, withBorder, overlap, className, content, children, placement, containerProps, containerRef } from "../../types/components/badge";
export interface BadgeProps {
    color?: color;
    invisible?: invisible;
    withBorder?: withBorder;
    overlap?: overlap;
    className?: className;
    content?: content;
    children?: children;
    placement?: placement;
    containerProps?: containerProps;
    containerRef?: containerRef;
}
export declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLDivElement>>;
export default Badge;
//# sourceMappingURL=index.d.ts.map