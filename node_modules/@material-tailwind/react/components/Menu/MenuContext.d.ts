import React from "react";
import type { contextValue, children } from "../../types/components/menu";
export interface MenuContextProviderProps {
    value: contextValue;
    children: children;
}
export declare const MenuContext: React.Context<contextValue>;
export declare function useMenu(): contextValue;
export declare const MenuContextProvider: {
    ({ value, children }: MenuContextProviderProps): JSX.Element;
    prototypes: {
        value: any;
        children: any;
    };
    displayName: string;
};
//# sourceMappingURL=MenuContext.d.ts.map