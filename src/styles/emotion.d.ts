import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        color: {
            main: string,
            default: string,
            active: string,
            error: string,
            success: string
        },
        size: {
            sm: string,
            base: string,
            md: string,
            lg: string,
            xlg: string
        },
        shadow: {
            // https://getcssscan.com/css-box-shadow-examples
            0: string,
            7: string
        },
    }
}