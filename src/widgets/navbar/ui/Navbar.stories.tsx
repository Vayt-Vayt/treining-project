import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorators } from 'shared/config/storybook/decorators/ThemeDecorators';
import { NavBar } from './NavBar';
import { Theme } from 'app/provider/themeProvider';
import { StoreDecorators } from 'shared/config/storybook/decorators';


const meta = {
    title: 'widgets/NavBar',
    component: NavBar,
    parameters: {},
    argTypes: {},
 
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

export const ThemeLight_Auth: Story = {
    args: {},
    decorators: [
        (Story) => StoreDecorators(Story, {
            user: {
                authData: {
                    id: '1',
                    username: 'sdf'
                }
            },
            loginForm: undefined,
            profile: undefined,
            counter: {value:0}
        })
    ]
};

export const ThemeDark_Auth: Story = {
    args: {},
    decorators: [
        (Story) => StoreDecorators(Story, {
            user: {
                authData: {
                    id: '1',
                    username: 'sdf'
                }
            },
            loginForm: undefined,
            profile: undefined,
            counter: {value:0}
        }),
        (Story) => ThemeDecorators(Theme.DARK)(Story)
    ]
};