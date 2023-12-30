declare module '@rebass/markdown' {
    import type { MDXComponents } from 'mdx/types'

    // TODO: Make this type better
    export default function createComponents(components?: Record<keyof MDXComponents, any>): any;
}

declare module 'prism-react-renderer' {
    export const defaultProps: any;

    type ChildProps = {
        className?: string;
        tokens: string[];
        // TODO: Better types
        getLineProps: any;
        getTokenProps: any;
    }

    type HighlightProps = {
        code: string;
        language: string;
        children: (props: ChildProps) => any;
    }

    export default function Highlight(props: HightlightProps): any;
}