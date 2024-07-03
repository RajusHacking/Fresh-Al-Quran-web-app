import type { size, overlay, placement, overlayProps, className, dismiss, onClose, transition } from "../../../types/components/drawer";
export interface DrawerStylesType {
    defaultProps?: {
        size?: size;
        overlay?: overlay;
        placement?: placement;
        overlayProps?: overlayProps;
        className?: className;
        dismiss?: dismiss;
        onClose?: onClose;
        transition?: transition;
    };
    styles?: {
        base?: {
            container?: object;
            overlay?: object;
            drawer?: object;
        };
    };
}
export declare const drawer: DrawerStylesType;
export default drawer;
//# sourceMappingURL=index.d.ts.map