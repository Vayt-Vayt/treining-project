import type { Meta, StoryObj } from '@storybook/react';

import "app/styles/index.scss"
import { ThemeDecorators } from 'shared/config/storybook/decorators/ThemeDecorators';
import { Theme } from 'app/provider/themeProvider';
import { LoginForm } from './LoginForm';


const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {},
    argTypes: {},
    args: {
        
    },
 

} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},

};

export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => ThemeDecorators(Theme.DARK)(Story)
    ]

};