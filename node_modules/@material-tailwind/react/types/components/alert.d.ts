import type { ReactNode } from "react";
import type { colors, animation } from "../generic";
/**
 * This file contains the types and prop-types for Alert component.
 */
export type variant = "filled" | "gradient" | "outlined" | "ghost";
export type color = colors;
export type icon = ReactNode;
export type open = boolean;
export type onClose = () => void;
export type action = ReactNode;
export type animate = animation;
export type className = string;
export type children = ReactNode;
export declare const propTypesVariant: any;
export declare const propTypesColor: any;
export declare const propTypesIcon: any;
export declare const propTypesOpen: any;
export declare const propTypesOnClose: any;
export declare const propTypesAction: any;
export declare const propTypesAnimate: any;
export declare const propTypesClassName: any;
export declare const propTypesChildren: any;
//# sourceMappingURL=alert.d.ts.map