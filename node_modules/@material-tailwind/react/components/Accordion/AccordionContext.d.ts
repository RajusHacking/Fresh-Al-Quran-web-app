import React from "react";
import type { open, icon, animate, children, disabled } from "../../types/components/accordion";
export interface AccordionContextType {
    open: open;
    icon: icon;
    animate: animate;
    disabled: disabled;
}
export declare const AccordionContext: React.Context<AccordionContextType>;
export declare function useAccordion(): AccordionContextType;
export interface AccordionContextProviderProps {
    value: AccordionContextType;
    children: children;
}
export declare const AccordionContextProvider: {
    ({ value, children }: AccordionContextProviderProps): JSX.Element;
    propTypes: {
        value: any;
        children: any;
    };
    displayName: string;
};
//# sourceMappingURL=AccordionContext.d.ts.map