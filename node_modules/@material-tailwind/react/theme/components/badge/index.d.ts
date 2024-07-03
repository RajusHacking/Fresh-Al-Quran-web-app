import { color, invisible, withBorder, overlap, content, placement, className, containerProps } from "../../../types/components/badge";
import badgeColors from "./badgeColors";
export interface BadgeStyleTypes {
    defaultProps?: {
        color?: color;
        invisible?: invisible;
        placement?: placement;
        withBorder?: withBorder;
        overlap?: overlap;
        content?: content;
        className?: className;
        containerProps?: containerProps;
    };
    valid?: {
        colors?: string[];
        overlaps?: string[];
        placements?: string[];
    };
    styles?: {
        base?: {
            container?: object;
            badge?: {
                initial?: object;
                withBorder?: object;
                withContent?: object;
            };
        };
        placements?: {
            "top-start"?: {
                square?: object;
                circular?: object;
            };
            "top-end"?: {
                square?: object;
                circular?: object;
            };
            "bottom-start"?: {
                square?: object;
                circular?: object;
            };
            "bottom-end"?: {
                square?: object;
                circular?: object;
            };
        };
        colors?: typeof badgeColors;
    };
}
export declare const badge: BadgeStyleTypes;
export default badge;
//# sourceMappingURL=index.d.ts.map