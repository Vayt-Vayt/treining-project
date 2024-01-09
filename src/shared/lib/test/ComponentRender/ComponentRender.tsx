import { render } from "@testing-library/react";
import { StateShema, StoreProvider } from "app/provider/storeProvider";
import React from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nextForText from "shared/config/i18next/i18nextForTest"





export function ComponentRender(
    Component: React.ReactNode, 
    route: string = "/",
    initialState?: StateShema
) {
    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nextForText}>
                    {Component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
}