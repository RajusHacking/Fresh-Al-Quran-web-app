import React from "react";
import { children } from "../../types/components/popover";
export interface PopoverHandlerProps extends React.ComponentProps<any> {
    children: children | React.ComponentProps<any>;
}
export declare const PopoverHandler: React.ForwardRefExoticComponent<Pick<PopoverHandlerProps, keyof PopoverHandlerProps> & React.RefAttributes<HTMLDivElement>>;
export default PopoverHandler;
//# sourceMappingURL=PopoverHandler.d.ts.map