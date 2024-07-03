declare const textareaStatic: {
    base: {
        textarea: {
            borderWidth: string;
            borderColor: string;
        };
        label: object;
    };
    sizes: {
        md: {
            container: {
                height: string;
            };
            textarea: {
                fontSize: string;
                pt: string;
                pb: string;
                mt: string;
            };
            label: {
                lineHeight: string;
            };
        };
        lg: {
            container: {
                height: string;
            };
            textarea: {
                fontSize: string;
                px: string;
                pt: string;
                pb: string;
            };
            label: {
                lineHeight: string;
            };
        };
    };
    colors: {
        textarea: object;
        label: object;
    };
    error: {
        textarea: {
            borderColor: string;
            borderColorFocused: string;
        };
        label: {
            color: string;
            after: string;
        };
    };
    success: {
        textarea: {
            borderColor: string;
            borderColorFocused: string;
        };
        label: {
            color: string;
            after: string;
        };
    };
    shrink: {
        textarea: {};
        label: {};
    };
};
export default textareaStatic;
//# sourceMappingURL=index.d.ts.map