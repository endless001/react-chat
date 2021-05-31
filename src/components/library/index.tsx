import React from "react";

export const FullPageErrorFallback = ({ error }: { error: Error | null }) => (
    <div>
        <ErrorBox error={error} />
    </div>
);

const isError = (value: any): value is Error => value?.message;

export const ErrorBox = ({ error }: { error: unknown }) => {
    if (isError(error)) {
        return <div>{error?.message}</div>;
    }
    return null;
};