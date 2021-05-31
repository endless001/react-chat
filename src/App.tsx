import React, {useState} from 'react';
import 'remixicon/fonts/remixicon.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRoutes} from "react-router-dom";
import {routes} from 'components/routes/routes';
import userManager from "./user-manager";
import {ErrorBoundary, FallbackProps, useErrorHandler} from "react-error-boundary";

function ErrorFallback({error, resetErrorBoundary}:FallbackProps) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error?.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}


function App() {
    const handleError = useErrorHandler();
    const routing = useRoutes(routes);
    userManager.getUser().then(function (user) {
        if (!user) {
            userManager.signinRedirect().then(function () {

            }).catch(function (error) {
                handleError(error)
            });
        } else {

        }
    });

    return (
        <div>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                {routing}
            </ErrorBoundary>
        </div>
    );
}

export default App;
