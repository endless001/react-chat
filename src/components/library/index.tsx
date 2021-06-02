import React from "react";
import {FallbackProps} from "react-error-boundary";


export const ErrorFallback=({error}:FallbackProps)=> {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error?.message}</pre>
        </div>
    )
}
