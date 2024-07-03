import type { size, dismiss, animate, className } from "../../../types/components/dialog";
export interface DialogStylesType {
    defaultProps?: {
        size?: size;
        dismiss?: dismiss;
        animate?: animate;
        className?: className;
    };
    valid?: {
        sizes?: string[];
    };
    styles?: {
        base?: {
            backdrop?: object;
            container?: object;
        };
        sizes?: {
            xs?: object;
            sm?: object;
            md?: object;
            lg?: object;
            xl?: object;
            xxl?: object;
        };
    };
}
export declare const dialog: DialogStylesType;
export default dialog;
//# sourceMappingURL=index.d.ts.map