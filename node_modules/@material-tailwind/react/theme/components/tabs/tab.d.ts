import type { className, disabled } from "../../../types/components/tabs";
export interface TabStylesType {
    defaultProps?: {
        className?: className;
        activeClassName?: className;
        disabled?: disabled;
    };
    styles?: {
        base?: {
            tab?: {
                initial?: object;
                disabled?: object;
            };
            indicator?: object;
        };
    };
}
export declare const tab: TabStylesType;
export default tab;
//# sourceMappingURL=tab.d.ts.map