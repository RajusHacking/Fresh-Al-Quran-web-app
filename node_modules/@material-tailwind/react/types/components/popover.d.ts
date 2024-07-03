import type { ReactNode } from "react";
import type { FloatingContext, Placement, ReferenceType, Strategy } from "@floating-ui/react";
import type { dismissType, animation, offsetType } from "../generic";
/**
 * This file contains the types and prop-types for Popover, PopoverHandler, PopoverContent, PopoverContext and Tooltip components.
 */
export type open = boolean;
export type handler = React.Dispatch<React.SetStateAction<any>>;
export type placement = Placement;
export type offset = offsetType;
export type dismiss = dismissType;
export type animate = animation;
export type content = ReactNode;
export type contextValue = {
    open: open;
    strategy: Strategy;
    x?: number;
    y?: number;
    context: FloatingContext<ReferenceType>;
    reference: (node: HTMLElement) => void;
    floating: (node: HTMLElement) => void;
    getReferenceProps: (userProps?: React.HTMLProps<Element>) => any;
    getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => any;
    appliedAnimation: animate;
    labelId: string;
    descriptionId: string;
};
export type interactive = boolean;
export type className = string;
export type children = ReactNode;
export declare const propTypesOpen: any;
export declare const propTypesHandler: any;
export declare const propTypesPlacement: any;
export declare const propTypesOffset: any;
export declare const propTypesDismiss: any;
export declare const propTypesAnimate: any;
export declare const propTypesContent: any;
export declare const propTypesInteractive: any;
export declare const propTypesClassName: any;
export declare const propTypesChildren: any;
export declare const propTypesContextValue: any;
//# sourceMappingURL=popover.d.ts.map