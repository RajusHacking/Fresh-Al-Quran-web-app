import chipFilled from "./chipFilled";
import chipGradient from "./chipGradient";
import chipOutlined from "./chipOutlined";
import chipGhost from "./chipGhost";
import type { variant, size, color, icon, open, onClose, action, animate, className } from "../../../types/components/chip";
export interface ChipStylesType {
    defaultProps?: {
        variant?: variant;
        size?: size;
        color?: color;
        icon?: icon;
        open?: open;
        onClose?: onClose;
        action?: action;
        animate?: animate;
        className?: className;
    };
    valid?: {
        variants?: string[];
        sizes?: string[];
        colors?: string[];
    };
    styles?: {
        base?: {
            chip?: object;
            action?: object;
            icon?: object;
        };
        sizes?: {
            sm?: object;
            md?: object;
            lg?: object;
        };
        variants?: {
            filled?: typeof chipFilled;
            gradient?: typeof chipGradient;
            outlined?: typeof chipOutlined;
            ghost?: typeof chipGhost;
        };
    };
}
export declare const chip: ChipStylesType;
export default chip;
//# sourceMappingURL=index.d.ts.map