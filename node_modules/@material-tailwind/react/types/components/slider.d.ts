import type React from "react";
import type { colors } from "../generic";
/**
 * This file contains the types and prop-types for Slider component.
 */
export type color = colors;
export type size = "sm" | "md" | "lg";
export type className = string;
export type trackClassName = string;
export type thumbClassName = string;
export type barClassName = string;
export type defaultValue = string | number | readonly string[];
export type value = string | number | readonly string[];
export type onChange = React.ChangeEventHandler<HTMLInputElement>;
export type min = number | string;
export type max = number | string;
export type step = number | string;
export type inputRef = React.RefObject<HTMLInputElement>;
export type inputProps = React.ComponentProps<"input">;
export declare const propTypesColor: any;
export declare const propTypesSize: any;
export declare const propTypesClassName: any;
export declare const propTypesTrackClassName: any;
export declare const propTypesThumbClassName: any;
export declare const propTypesBarClassName: any;
export declare const propTypesDefaultValue: any;
export declare const propTypesValue: any;
export declare const propTypesOnChange: any;
export declare const propTypesMin: any;
export declare const propTypesMax: any;
export declare const propTypesStep: any;
export declare const propTypesInputRef: any;
export declare const propTypesInputProps: any;
//# sourceMappingURL=slider.d.ts.map