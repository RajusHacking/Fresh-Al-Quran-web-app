import type { separator, fullWidth, className } from "../../../types/components/breadcrumbs";
export interface BreadcrumbsStyleTypes {
    defaultProps?: {
        separator?: separator;
        fullWidth?: fullWidth;
        className?: className;
    };
    styles?: {
        base?: {
            root?: {
                initial?: object;
                fullWidth?: object;
            };
            list?: object;
            item?: {
                initial?: object;
                disabled?: object;
            };
            separator?: object;
        };
    };
}
export declare const breadcrumbs: BreadcrumbsStyleTypes;
export default breadcrumbs;
//# sourceMappingURL=index.d.ts.map