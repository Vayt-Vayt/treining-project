import React, { Suspense } from "react";
import { Theme } from "app/provider/themeProvider";
import { FC } from "react";
import { I18nextProvider } from "react-i18next";
import  i18nextForText  from "shared/config/i18next/i18nextForTest"

import "../../../../app/styles/index.scss"

export const i18nDecorators =  (StoryComponent: FC) => (
    <Suspense fallback=''>
        <I18nextProvider i18n={i18nextForText}>
            <StoryComponent />
        </I18nextProvider>
    </Suspense>
)