import alertFilled from "./alertFilled";
import alertGradient from "./alertGradient";
import alertOutlined from "./alertOutlined";
import alertGhost from "./alertGhost";
import type { variant, color, icon, open, action, onClose, animate, className } from "../../../types/components/alert";
export interface AlertStylesType {
    defaultProps?: {
        variant?: variant;
        color?: color;
        icon?: icon;
        open?: open;
        action?: action;
        onClose?: onClose;
        animate?: animate;
        className?: className;
    };
    valid?: {
        variants?: string[];
        colors?: string[];
    };
    styles?: {
        base?: {
            alert?: object;
            action?: object;
        };
        variants?: {
            filled?: typeof alertFilled;
            gradient?: typeof alertGradient;
            outlined?: typeof alertOutlined;
            ghost?: typeof alertGhost;
        };
    };
}
export declare const alert: AlertStylesType;
export default alert;
//# sourceMappingURL=index.d.ts.map