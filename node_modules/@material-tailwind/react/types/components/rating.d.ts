import type { ReactNode } from "react";
import type { colors } from "../generic";
/**
 * This file contains the types and prop-types for Rating component.
 */
type iconType = ReactNode | React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
export type count = number;
export type value = number;
export type ratedIcon = iconType;
export type unratedIcon = iconType;
export type color = "white" | colors;
export type className = string;
export type onChange = (value: number) => void;
export type readonly = boolean;
export declare const propTypesCount: any;
export declare const propTypesValue: any;
export declare const propTypesRatedIcon: any;
export declare const propTypesUnratedIcon: any;
export declare const propTypesColor: any;
export declare const propTypesOnChange: any;
export declare const propTypesClassName: any;
export declare const propTypesReadonly: any;
export {};
//# sourceMappingURL=rating.d.ts.map