import type { ReactNode } from "react";
import type { dismissType, animation } from "../generic";
/**
 * This file contains the types and prop-types for Dialog, DialogHeader, DialogBody and DialogFooter components.
 */
export type open = boolean;
export type handler = React.Dispatch<React.SetStateAction<any>>;
export type size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type dismiss = dismissType;
export type animate = animation;
export type divider = boolean;
export type className = string;
export type children = ReactNode;
export declare const propTypesOpen: any;
export declare const propTypesHandler: any;
export declare const propTypesSize: any;
export declare const propTypesDismiss: any;
export declare const propTypesAnimate: any;
export declare const propTypesDivider: any;
export declare const propTypesClassName: any;
export declare const propTypesChildren: any;
//# sourceMappingURL=dialog.d.ts.map