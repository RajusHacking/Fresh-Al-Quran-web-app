import React from "react";
import { className, children } from "../../types/components/timeline";
import TimelineItem from "./TimelineItem";
import TimelineIcon from "./TimelineIcon";
import TimelineBody from "./TimelineBody";
import TimelineHeader from "./TimelineHeader";
import TimelineConnector from "./TimelineConnector";
export interface TimelineProps extends React.HTMLAttributes<HTMLUListElement> {
    className?: className;
    children?: children;
}
export declare const Timeline: React.ForwardRefExoticComponent<TimelineProps & React.RefAttributes<HTMLUListElement>>;
export { TimelineItem, TimelineIcon, TimelineBody, TimelineHeader, TimelineConnector };
declare const _default: React.ForwardRefExoticComponent<TimelineProps & React.RefAttributes<HTMLUListElement>> & {
    Item: React.ForwardRefExoticComponent<import("./TimelineItem").TimelineItemProps & React.RefAttributes<HTMLLIElement>>;
    Icon: React.ForwardRefExoticComponent<import("./TimelineIcon").TimelineIconProps & React.RefAttributes<HTMLSpanElement>>;
    Header: React.ForwardRefExoticComponent<import("./TimelineHeader").TimelineHeaderProps & React.RefAttributes<HTMLDivElement>>;
    Body: React.ForwardRefExoticComponent<import("./TimelineBody").TimelineBodyProps & React.RefAttributes<HTMLDivElement>>;
    Connector: React.ForwardRefExoticComponent<import("./TimelineConnector").TimelineConnectorProps & React.RefAttributes<HTMLSpanElement>>;
};
export default _default;
//# sourceMappingURL=index.d.ts.map