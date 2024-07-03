import type { variant, size, className, withBorder, color } from "../../../types/components/avatar";
import avatarBorderColor from "./avatarBorderColor";
export interface AvatarStyleTypes {
    defaultProps?: {
        variant?: variant;
        size?: size;
        className?: className;
        withBorder?: withBorder;
        color?: color;
    };
    valid?: {
        variants?: string[];
        sizes?: string[];
        colors?: string[];
    };
    styles?: {
        base?: {
            initial?: object;
            withBorder?: object;
        };
        sizes?: {
            xs?: object;
            sm?: object;
            md?: object;
            lg?: object;
            xl?: object;
            xxl?: object;
        };
        variants?: {
            square?: object;
            rounded?: object;
            circular?: object;
        };
        borderColor?: typeof avatarBorderColor;
    };
}
export declare const avatar: AvatarStyleTypes;
export default avatar;
//# sourceMappingURL=index.d.ts.map