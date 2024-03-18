import React from "react";
import { render } from "@testing-library/react";
import { StateShema, StoreProvider } from "app/provider/storeProvider";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nextForText from "shared/config/i18next/i18nextForTest"





export function ComponentRender(
    Component: React.ReactNode, 
    route: string = "/",
    initialState?: StateShema
) {
    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18nextForText}>
                    {Component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}