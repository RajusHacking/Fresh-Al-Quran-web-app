import type { placement, offset, dismiss, animate, lockScroll } from "../../../types/components/menu";
export interface MenuStylesType {
    defaultProps?: {
        placement?: placement;
        offset?: offset;
        dismiss?: dismiss;
        animate?: animate;
        lockScroll?: lockScroll;
    };
    styles?: {
        base?: {
            menu?: object;
            item?: {
                initial?: object;
                disabled?: object;
            };
        };
    };
}
export declare const menu: MenuStylesType;
export default menu;
//# sourceMappingURL=index.d.ts.map