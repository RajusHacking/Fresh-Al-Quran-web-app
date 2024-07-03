import type { ripple, className } from "../../../types/components/list";
export interface ListStylesType {
    defaultProps?: {
        ripple?: ripple;
        className?: className;
    };
    styles?: {
        base?: {
            list?: object;
            item?: {
                initial?: object;
                selected?: object;
                disabled?: object;
            };
            itemPrefix?: object;
            itemSuffix?: object;
        };
    };
}
export declare const list: ListStylesType;
export default list;
//# sourceMappingURL=index.d.ts.map