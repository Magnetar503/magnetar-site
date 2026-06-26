import 'react';

declare module 'react' {
    interface CSSProperties {
        '--fluid-max'?: string | number
        '--fluid-min'?: string | number
    }
}
