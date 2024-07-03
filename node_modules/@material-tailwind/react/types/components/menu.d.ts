import type { ReactNode } from "react";
import type { Placement, Strategy, FloatingContext, ReferenceType, FloatingTreeType } from "@floating-ui/react";
import type { dismissType, animation, offsetType } from "../generic";
/**
 * This file contains the types and prop-types for Menu and Menu, MenuCore, MenuHandler, MenuList, MenuItem and MenuContext components.
 */
export type open = boolean;
export type handler = React.Dispatch<React.SetStateAction<any>>;
export type placement = Placement;
export type offset = offsetType;
export interface dismiss extends dismissType {
    itemPress?: boolean;
}
export type animate = animation;
export type lockScroll = boolean;
export type disabled = boolean;
export type className = string;
export type children = ReactNode;
export type contextValue = {
    open: open;
    handler: handler;
    setInternalOpen: handler;
    strategy: Strategy;
    x: number;
    y: number;
    reference: (instance: HTMLButtonElement) => void;
    floating: (node: HTMLElement) => void;
    listItemsRef: React.MutableRefObject<any[]>;
    getReferenceProps: (userProps?: React.HTMLProps<Element>) => any;
    getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => any;
    getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => any;
    appliedAnimation: animate;
    lockScroll: boolean;
    context: FloatingContext<ReferenceType>;
    tree: FloatingTreeType<ReferenceType>;
    allowHover: boolean;
    internalAllowHover: boolean;
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    nested: boolean;
};
export declare const propTypesOpen: any;
export declare const propTypesHandler: any;
export declare const propTypesPlacement: any;
export declare const propTypesOffset: any;
export declare const propTypesDismiss: any;
export declare const propTypesAnimate: any;
export declare const propTypesLockScroll: any;
export declare const propTypesDisabled: any;
export declare const propTypesClassName: any;
export declare const propTypesChildren: any;
export declare const propTypesContextValue: any;
//# sourceMappingURL=menu.d.ts.map