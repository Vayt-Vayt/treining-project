import type { Meta, StoryObj } from '@storybook/react';

import "app/styles/index.scss"
import { ThemeDecorators } from 'shared/config/storybook/decorators/ThemeDecorators';
import { NavBar } from './NavBar';
import { Theme } from 'app/provider/themeProvider';


const meta = {
    title: 'widgets/NavBar',
    component: NavBar,
    parameters: {},
    argTypes: {
        
    },

} satisfies Meta<typeof NavBar>;

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
