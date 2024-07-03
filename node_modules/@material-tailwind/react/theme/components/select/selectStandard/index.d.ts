declare const selectStandard: {
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
                pt: string;
                pb: string;
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
                pt: string;
                pb: string;
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
                after: {
                    transform: string;
                };
            };
        };
        open: {
            select: {
                borderWidth: string;
            };
            label: {
                fontSize: string;
                disabled: string;
                after: {
                    transform: string;
                };
            };
        };
        withValue: {
            select: {
                borderWidth: string;
            };
            label: {
                fontSize: string;
                disabled: string;
                after: {
                    transform: string;
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
                };
                withValue: {
                    borderColor: string;
                };
            };
        };
        label: {
            initial: {};
            states: {
                close: {
                    color: string;
                    after: string;
                };
                open: {
                    color: string;
                    after: string;
                };
                withValue: {
                    color: string;
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
                };
                withValue: {
                    borderColor: string;
                };
            };
        };
        label: {
            initial: {};
            states: {
                close: {
                    color: string;
                    after: string;
                };
                open: {
                    color: string;
                    after: string;
                };
                withValue: {
                    color: string;
                    after: string;
                };
            };
        };
    };
};
export default selectStandard;
//# sourceMappingURL=index.d.ts.map