declare const selectOutlined: {
    base: {
        select: {};
        label: object;
    };
    sizes: {
        md: {
            container: {
                height: string;
            };
            select: {
                fontSize: string;
                px: string;
                py: string;
                borderRadius: string;
            };
            label: {
                initial: {};
                states: {
                    close: {
                        lineHeight: string;
                    };
                    open: {
                        lineHeight: string;
                    };
                    withValue: {
                        lineHeight: string;
                    };
                };
            };
        };
        lg: {
            container: {
                height: string;
            };
            select: {
                fontSize: string;
                px: string;
                py: string;
                borderRadius: string;
            };
            label: {
                initial: {};
                states: {
                    close: {
                        lineHeight: string;
                    };
                    open: {
                        lineHeight: string;
                    };
                    withValue: {
                        lineHeight: string;
                    };
                };
            };
        };
    };
    colors: {
        select: object;
        label: object;
    };
    states: {
        close: {
            select: {
                borderWidth: string;
            };
            label: {
                fontSize: string;
                disabled: string;
                before: {
                    bt: string;
                    bl: string;
                };
                after: {
                    bt: string;
                    br: string;
                };
            };
        };
        open: {
            select: {
                borderWidth: string;
                borderColor: string;
            };
            label: {
                fontSize: string;
                disabled: string;
                before: {
                    bt: string;
                    bl: string;
                };
                after: {
                    bt: string;
                    br: string;
                };
            };
        };
        withValue: {
            select: {
                borderWidth: string;
                borderColor: string;
            };
            label: {
                fontSize: string;
                disabled: string;
                before: {
                    bt: string;
                    bl: string;
                };
                after: {
                    bt: string;
                    br: string;
                };
            };
        };
    };
    error: {
        select: {
            initial: {};
            states: {
                close: {
                    borderColor: string;
                };
                open: {
                    borderColor: string;
                    borderTopColor: string;
                };
                withValue: {
                    borderColor: string;
                    borderTopColor: string;
                };
            };
        };
        label: {
            initial: {};
            states: {
                close: {
                    color: string;
                    before: string;
                    after: string;
                };
                open: {
                    color: string;
                    before: string;
                    after: string;
                };
                withValue: {
                    color: string;
                    before: string;
                    after: string;
                };
            };
        };
    };
    success: {
        select: {
            initial: {};
            states: {
                close: {
                    borderColor: string;
                };
                open: {
                    borderColor: string;
                    borderTopColor: string;
                };
                withValue: {
                    borderColor: string;
                    borderTopColor: string;
                };
            };
        };
        label: {
            initial: {};
            states: {
                close: {
                    color: string;
                    before: string;
                    after: string;
                };
                open: {
                    color: string;
                    before: string;
                    after: string;
                };
                withValue: {
                    color: string;
                    before: string;
                    after: string;
                };
            };
        };
    };
};
export default selectOutlined;
//# sourceMappingURL=index.d.ts.map