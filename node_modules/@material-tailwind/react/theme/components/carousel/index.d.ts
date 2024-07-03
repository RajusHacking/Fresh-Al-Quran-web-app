import type { prevArrow, nextArrow, navigation, autoplay, autoplayDelay, transition, loop, className } from "../../../types/components/carousel";
export interface CarouselStylesType {
    defaultProps?: {
        prevArrow?: prevArrow;
        nextArrow?: nextArrow;
        navigation?: navigation;
        autoplay?: autoplay;
        autoplayDelay?: autoplayDelay;
        transition?: transition;
        loop?: loop;
        className?: className;
    };
    styles?: {
        base?: {
            carousel?: object;
            slide?: object;
        };
    };
}
export declare const carousel: CarouselStylesType;
export default carousel;
//# sourceMappingURL=index.d.ts.map