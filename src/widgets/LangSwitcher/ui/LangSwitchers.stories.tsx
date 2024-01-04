import type { Meta, StoryObj } from '@storybook/react';

import "app/styles/index.scss"
import { ThemeDecorators } from 'shared/config/storybook/decorators/ThemeDecorators';
import { Theme } from 'app/provider/themeProvider';
import { LangSwitcher } from './LangSwitcher';


const meta = {
    title: 'widgets/LangSwitcher',
    component: LangSwitcher,
    parameters: {},
    argTypes: {
        
    },

} satisfies Meta<typeof LangSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ThemeLight: Story = {
    args: {},

};

export const ThemeDark: Story = {
    args: {},
    decorators: [
        (Story) => ThemeDecorators(Theme.DARK)(Story)
        
    ]
};
