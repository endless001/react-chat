import React from "react";
import {FallbackProps} from "react-error-boundary";
import styled from "@emotion/styled";
import { Spinner } from "react-bootstrap";

export const ErrorFallback=({error}:FallbackProps)=> {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error?.message}</pre>
        </div>
    )
}


export const FullPageLoading = () => (
    <FullPage>
        <Spinner animation="border" variant="primary" />
    </FullPage>
);

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
