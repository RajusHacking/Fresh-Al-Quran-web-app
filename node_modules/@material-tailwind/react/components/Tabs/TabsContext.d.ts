import React from "react";
import { id, value as valueType, animate, children, indicatorProps, isInitial, orientation } from "../../types/components/tabs";
export interface TabsContextType {
    state: {
        id: id;
        active: valueType;
        isInitial: isInitial;
        orientation: orientation;
        appliedAnimation: animate;
        indicatorProps: indicatorProps;
    };
    dispatch: React.Dispatch<{
        id: id;
        active: valueType;
        isInitial: isInitial;
        orientation: orientation;
        appliedAnimation: animate;
        indicatorProps: indicatorProps;
    }>;
}
export interface TabsContextProviderProps {
    id?: id;
    value: valueType;
    orientation?: orientation;
    children: children;
}
export declare const TabsContext: React.Context<TabsContextType>;
export declare function useTabs(): TabsContextType;
export declare const TabsContextProvider: {
    ({ id, value, orientation, children, }: TabsContextProviderProps): JSX.Element;
    propTypes: {
        id: any;
        value: any;
        orientation: any;
        children: any;
    };
    displayName: string;
};
export declare const setId: (dispatch: (arg: object) => void, value: id) => void;
export declare const setActive: (dispatch: (arg: object) => void, value: valueType) => void;
export declare const setAnimation: (dispatch: (arg: object) => void, value: animate) => void;
export declare const setIndicator: (dispatch: (arg: object) => void, value: indicatorProps) => void;
export declare const setIsInitial: (dispatch: (arg: object) => void, value: isInitial) => void;
export declare const setOrientation: (dispatch: (arg: object) => void, value: orientation) => void;
//# sourceMappingURL=TabsContext.d.ts.map