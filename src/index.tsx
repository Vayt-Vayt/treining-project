import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "app/provider/themeProvider";
import App from "app/App";
import { ErrorBoundary } from "app/provider/errorBondary";
import "shared/config/i18next/i18next";

import "app/styles/index.scss"

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
);
