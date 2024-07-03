/// <reference types="react" />
import type { AnimationOptions } from "framer-motion";
/**
 * This file contains the types and prop-types for Carousel component.
 */
export type children = React.ReactNode | React.ReactNode[];
export type prevArrow = (args: {
    loop: boolean;
    handlePrev: () => void;
    activeIndex: number;
    firstIndex: boolean;
}) => React.ReactNode | void;
export type nextArrow = (args: {
    loop: boolean;
    handleNext: () => void;
    activeIndex: number;
    lastIndex: boolean;
}) => React.ReactNode | void;
export type navigation = (args: {
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    activeIndex: number;
    length: number;
}) => React.ReactNode | void;
export type autoplay = boolean;
export type autoplayDelay = number;
export type transition = AnimationOptions<any>;
export type loop = boolean;
export type className = string;
export type slideRef = React.Ref<HTMLDivElement>;
export declare const propTypesClassName: any;
export declare const propTypesPrevArrow: any;
export declare const propTypesNextArrow: any;
export declare const propTypesNavigation: any;
export declare const propTypesAutoplay: any;
export declare const propTypesAutoplayDelay: any;
export declare const propTypesTransition: any;
export declare const propTypesLoop: any;
export declare const propTypesChildren: any;
export declare const propTypesSlideRef: any;
//# sourceMappingURL=carousel.d.ts.map