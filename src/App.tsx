import React, {useState,Suspense} from 'react';
import 'remixicon/fonts/remixicon.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRoutes} from "react-router-dom";
import {routes} from 'components/routes/routes';
import userManager from "./user-manager";
import {ErrorBoundary, useErrorHandler} from "react-error-boundary";
import {ErrorFallback} from "components/library";



function App() {
    const handleError = useErrorHandler();
    const routing = useRoutes(routes);



    return (
        <div>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Suspense fallback={<div> loading....</div>}>
                {routing}
                </Suspense>
            </ErrorBoundary>
        </div>
    );
}

export default App;
