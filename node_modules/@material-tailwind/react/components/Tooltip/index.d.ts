import React from "react";
import type { open, handler, content, interactive, placement, offset, dismiss, animate, className, children } from "../../types/components/popover";
export interface TooltipProps extends React.ComponentProps<any> {
    open?: open;
    handler?: handler;
    content?: content;
    interactive?: interactive;
    placement?: placement;
    offset?: offset;
    dismiss?: dismiss;
    animate?: animate;
    className?: className;
    children: children | React.ComponentProps<any>;
}
export declare const Tooltip: React.ForwardRefExoticComponent<Pick<TooltipProps, keyof TooltipProps> & React.RefAttributes<HTMLDivElement>>;
export default Tooltip;
//# sourceMappingURL=index.d.ts.map