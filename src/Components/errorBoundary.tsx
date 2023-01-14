import React, { ReactNode } from "react";
import { ErrorBoundary as Boundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary(e: any): any }) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}

type Props = {
    children: any;
    onReset?: () => any;
}
export function ErrorBoundary(props: Props) {
    return (
        <Boundary FallbackComponent={ErrorFallback} onReset={props.onReset}>
            {props.children}
        </Boundary >
    );
}
