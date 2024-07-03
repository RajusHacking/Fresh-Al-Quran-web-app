import React from "react";
import type { children } from "../../types/components/menu";
export interface MenuHandlerProps extends React.ComponentProps<any> {
    children: children | React.ComponentProps<any>;
}
export declare const MenuHandler: React.ForwardRefExoticComponent<Pick<MenuHandlerProps, keyof MenuHandlerProps> & React.RefAttributes<HTMLButtonElement>>;
export default MenuHandler;
//# sourceMappingURL=MenuHandler.d.ts.map