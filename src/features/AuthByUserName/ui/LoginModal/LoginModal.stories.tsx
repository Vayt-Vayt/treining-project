import type { Meta, StoryObj } from '@storybook/react';

import "app/styles/index.scss"
import { ThemeDecorators } from 'shared/config/storybook/decorators/ThemeDecorators';
import { Theme } from 'app/provider/themeProvider';
import { LoginModal } from './LoginModal';


const meta = {
    title: 'features/LoginModal',
    component: LoginModal,
    parameters: {},
    argTypes: {},
    args: {
        isOpen: true,
    },
 

} satisfies Meta<typeof LoginModal>;

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