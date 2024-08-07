import type { Preview } from "@storybook/react";
import { Theme } from "../../src/app/provider/themeProvider/index"
import { 
    StyleDecorators,
    ThemeDecorators,
    i18nDecorators,
    RouteDecorators,
    StoreDecorators
} from "../../src/shared/config/storybook/decorators/index.ts"


import "../../src/app/styles/index.scss";


const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => StyleDecorators(Story),
        (Story) => ThemeDecorators(Theme.LIGHT)(Story),
        (Story) => i18nDecorators(Story),
        (Story) => RouteDecorators(Story),
        (Story) => StoreDecorators(Story),
    ],
    globals: {
        __IS_DEV__: true,
        __API__: ""
    },
};

export default preview;
