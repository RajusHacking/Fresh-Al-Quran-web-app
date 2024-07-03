import type { ReactElement, ReactNode } from "react";
import type { ContextData } from "@floating-ui/react";
import type { colors, dismissType, animation, offsetType } from "../generic";
import type React from "react";
/**
 * This file contains the types and prop-types for Select, SelectOption and SelectContext components.
 */
export type variant = "standard" | "outlined" | "static";
export type size = "md" | "lg";
export type color = colors;
export type label = string;
export type error = boolean;
export type success = boolean;
export type arrow = ReactNode;
export type value = string;
export type onChange = (value?: string) => void;
export type selected = (element?: ReactElement, index?: number) => React.ReactNode;
export type offset = offsetType;
export type dismiss = dismissType;
export type animate = animation;
export type autoHeight = boolean;
export type lockScroll = boolean;
export type labelProps = {
    [key: string]: any;
};
export type menuProps = {
    [key: string]: any;
};
export type index = number;
export type disabled = boolean;
export type className = string;
export type name = string;
export type children = ReactNode;
export type containerProps = React.ComponentProps<"div">;
export type contextValue = {
    selectedIndex: number;
    setSelectedIndex: (index: number) => void;
    activeIndex?: number | null;
    setActiveIndex: (index: number | null) => void;
    listRef: React.MutableRefObject<Array<HTMLLIElement | null>>;
    setOpen: (open: boolean) => void;
    onChange: (value: string) => void;
    getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => any;
    dataRef: ContextData;
};
export declare const propTypesVariant: any;
export declare const propTypesSize: any;
export declare const propTypesColor: any;
export declare const propTypesLabel: any;
export declare const propTypesError: any;
export declare const propTypesSuccess: any;
export declare const propTypesArrow: any;
export declare const propTypesValue: any;
export declare const propTypesOnChange: any;
export declare const propTypesSelected: any;
export declare const propTypesOffset: any;
export declare const propTypesDismiss: any;
export declare const propTypesAnimate: any;
export declare const propTypesAutoHeight: any;
export declare const propTypesLockScroll: any;
export declare const propTypesLabelProps: any;
export declare const propTypesMenuProps: any;
export declare const propTypesIndex: any;
export declare const propTypesDisabled: any;
export declare const propTypesClassName: any;
export declare const propTypesName: any;
export declare const propTypesChildren: any;
export declare const propTypesContainerProps: any;
export declare const propTypesContextValue: any;
//# sourceMappingURL=select.d.ts.map