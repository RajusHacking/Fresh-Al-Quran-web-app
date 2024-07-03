import type { color, className } from "../../../types/components/spinner";
import spinnerColor from "./spinnerColor";
export interface SpinnerStyleTypes {
    defaultProps?: {
        color?: color;
        className?: className;
    };
    valid?: {
        colors?: string[];
    };
    styles?: {
        base?: object;
        colors?: typeof spinnerColor;
    };
}
export declare const spinner: SpinnerStyleTypes;
export default spinner;
//# sourceMappingURL=index.d.ts.map