import React from "react";
import { Theme, ThemeProvider } from "app/provider/themeProvider";
import { FC } from "react";

import "../../../../app/styles/index.scss"

// eslint-disable-next-line react/display-name
export const ThemeDecorators = (theme: Theme) => (StoryComponent: FC) => (
    <ThemeProvider themeDef={theme}>
        <div className={`App ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
)
