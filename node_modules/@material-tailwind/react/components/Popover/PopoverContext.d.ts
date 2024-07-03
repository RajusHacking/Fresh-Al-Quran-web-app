import React from "react";
import type { contextValue, children } from "../../types/components/popover";
export interface PopoverContextProviderProps {
    value: contextValue;
    children: children;
}
export declare const PopoverContext: React.Context<contextValue>;
export declare function usePopover(): contextValue;
export declare const PopoverContextProvider: {
    ({ value, children }: PopoverContextProviderProps): JSX.Element;
    propTypes: {
        value: any;
        children: any;
    };
    displayName: string;
};
//# sourceMappingURL=PopoverContext.d.ts.map