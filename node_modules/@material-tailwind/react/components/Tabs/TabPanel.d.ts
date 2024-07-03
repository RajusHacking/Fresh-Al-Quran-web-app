import React from "react";
import { MotionProps } from "framer-motion";
import type { value, className, children } from "../../types/components/tabs";
export interface TabPanelProps extends MotionProps {
    value: value;
    className?: className;
    children: children;
}
export declare const TabPanel: React.ForwardRefExoticComponent<TabPanelProps & React.RefAttributes<HTMLDivElement>>;
export default TabPanel;
//# sourceMappingURL=TabPanel.d.ts.map