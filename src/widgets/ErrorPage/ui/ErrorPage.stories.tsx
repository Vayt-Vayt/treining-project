import type { Meta, StoryObj } from '@storybook/react';

import "app/styles/index.scss"
import { ThemeDecorators } from 'shared/config/storybook/decorators/ThemeDecorators';
import { ErorrPage } from './ErorrPage';
import { Theme } from 'app/provider/themeProvider';


const meta = {
    title: 'widgets/ErorrPage',
    component: ErorrPage,
    parameters: {},
    argTypes: {
        
    },

} satisfies Meta<typeof ErorrPage>;

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
