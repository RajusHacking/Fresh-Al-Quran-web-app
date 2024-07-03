import React from "react";
import type { value, index, disabled, className, children } from "../../types/components/select";
export interface SelectOptionProps extends React.ComponentProps<"li"> {
    value?: value;
    index?: index;
    disabled?: disabled;
    className?: className;
    children: children;
}
export declare const SelectOption: {
    ({ value, index, disabled, className, children, ...rest }: SelectOptionProps): JSX.Element;
    propTypes: {
        value: any;
        index: any;
        disabled: any;
        className: any;
        children: any;
    };
    displayName: string;
};
export default SelectOption;
//# sourceMappingURL=SelectOption.d.ts.map