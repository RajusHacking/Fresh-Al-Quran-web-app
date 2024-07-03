import type { ReactNode } from "react";
import type { colors } from "../generic";
/**
 * This file contains the types and prop-types for Input and Textarea components.
 */
export type variant = "standard" | "outlined" | "static";
export type size = "md" | "lg";
export type color = "black" | "white" | colors;
export type label = string;
export type error = boolean;
export type success = boolean;
export type icon = ReactNode;
export type resize = boolean;
export type labelProps = {
    [key: string]: any;
};
export type containerProps = {
    [key: string]: any;
};
export type shrink = boolean;
export type className = string;
export declare const propTypesVariant: any;
export declare const propTypesSize: any;
export declare const propTypesColor: any;
export declare const propTypesLabel: any;
export declare const propTypesError: any;
export declare const propTypesSuccess: any;
export declare const propTypesIcon: any;
export declare const propTypesResize: any;
export declare const propTypesLabelProps: any;
export declare const propTypesContainerProps: any;
export declare const propTypesShrink: any;
export declare const propTypesClassName: any;
//# sourceMappingURL=input.d.ts.map