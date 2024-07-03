import type { className, animate, disabled, icon } from "../../../types/components/accordion";
export interface AccordionStylesType {
    defaultProps?: {
        icon?: icon;
        className?: className;
        animate?: animate;
        disabled?: disabled;
    };
    styles?: {
        base?: {
            container?: object;
            header?: {
                initial?: object;
                active?: object;
                icon?: object;
            };
            body?: object;
            disabled?: object;
        };
    };
}
export declare const accordion: AccordionStylesType;
export default accordion;
//# sourceMappingURL=index.d.ts.map