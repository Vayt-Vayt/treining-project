import React, { Suspense } from "react";
import { FC } from "react";
import { I18nextProvider } from "react-i18next";

import "../../../../app/styles/index.scss"
import i18next from "i18next";

export const i18nDecorators =  (StoryComponent: FC) => (
    <Suspense fallback=''>
        <I18nextProvider i18n={i18next}>
            <StoryComponent />
        </I18nextProvider>
    </Suspense>
)