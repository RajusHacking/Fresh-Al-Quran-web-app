/// <reference types="react" />
import { dismissType } from "../generic";
import type { AnimationOptions } from "framer-motion";
/**
 * This file contains the types and prop-types for Drawer component.
 */
export type open = boolean;
export type size = number;
export type overlay = boolean;
export type children = React.ReactNode;
export type placement = "top" | "right" | "bottom" | "left";
export type overlayProps = React.ComponentProps<"div">;
export type className = string;
export type onClose = () => void;
export type dismiss = dismissType;
export type transition = AnimationOptions<any>;
export type overlayRef = React.Ref<HTMLDivElement>;
export declare const propTypesOpen: any;
export declare const propTypesSize: any;
export declare const propTypesOverlay: any;
export declare const propTypesChildren: any;
export declare const propTypesPlacement: any;
export declare const propTypesOverlayProps: any;
export declare const propTypesClassName: any;
export declare const propTypesOnClose: any;
export declare const propTypesDismiss: any;
export declare const propTypesTransition: any;
export declare const propTypesOverlayRef: any;
//# sourceMappingURL=drawer.d.ts.map