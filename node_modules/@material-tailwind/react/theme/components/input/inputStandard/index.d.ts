declare const inputStandard: {
    base: {
        input: {
            borderWidth: string;
            borderColor: string;
            placeholder: string;
        };
        inputWithIcon: {
            pr: string;
        };
        icon: {
            top: string;
            right: string;
            transform: string;
        };
        label: object;
    };
    sizes: {
        md: {
            container: {
                height: string;
            };
            input: {
                fontSize: string;
                pt: string;
                pb: string;
            };
            label: {
                lineHeight: string;
            };
            icon: {
                width: string;
                height: string;
            };
        };
        lg: {
            container: {
                height: string;
            };
            input: {
                fontSize: string;
                px: string;
                pt: string;
                pb: string;
            };
            label: {
                lineHeight: string;
            };
            icon: {
                width: string;
                height: string;
            };
        };
    };
    colors: {
        input: object;
        label: object;
    };
    error: {
        input: {
            borderColor: string;
            borderColorFocused: string;
        };
        label: {
            color: string;
            after: string;
        };
    };
    success: {
        input: {
            borderColor: string;
            borderColorFocused: string;
        };
        label: {
            color: string;
            after: string;
        };
    };
    shrink: {
        input: {};
        label: {
            fontSize: string;
            lineHeight: string;
        };
    };
};
export default inputStandard;
//# sourceMappingURL=index.d.ts.map