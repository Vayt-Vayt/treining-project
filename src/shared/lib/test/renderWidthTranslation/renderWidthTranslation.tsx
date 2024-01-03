import { render } from "@testing-library/react";
import React from "react";
import { I18nextProvider } from "react-i18next";
import i18nextForText from "shared/config/i18next/i18nextForTest"

export function renderWidthTransation(Component: React.ReactNode) {
    return render(
        <I18nextProvider i18n={i18nextForText}>
            {Component}
        </I18nextProvider>
 
    )
}