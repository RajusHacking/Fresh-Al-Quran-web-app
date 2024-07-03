import React from "react";
import type { contextValue, children } from "../../types/components/select";
export type SelectContextType = contextValue;
export interface SelectContextProviderProps {
    value: contextValue;
    children: children;
}
export declare const SelectContext: React.Context<contextValue>;
export declare function useSelect(): contextValue;
export declare function usePrevious<T>(value: T): T;
export declare const SelectContextProvider: {
    ({ value, children }: SelectContextProviderProps): JSX.Element;
    propTypes: {
        value: any;
        children: any;
    };
    displayName: string;
};
//# sourceMappingURL=SelectContext.d.ts.map