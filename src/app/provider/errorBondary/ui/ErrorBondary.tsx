/* eslint-disable i18next/no-literal-string */
import React, { Component, ErrorInfo, ReactNode, Suspense } from "react";
import { ErorrPage } from "widgets/ErrorPage";
import { PageLoader } from "widgets/PageLoader/PageLoader";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <Suspense fallback={<PageLoader />}>
                    <ErorrPage />
                </Suspense>
            ) ;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;