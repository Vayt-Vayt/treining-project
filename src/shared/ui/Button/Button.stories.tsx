import type { Meta, StoryObj } from '@storybook/react';
import Button, { ThemeButton } from './Button';

import "app/styles/index.scss"
import { ThemeDecorators } from 'shared/config/storybook/decorators/ThemeDecorators';
import { Theme } from 'app/provider/themeProvider';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {},
    argTypes: {
        
    },

} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "button"
    },

};

export const Clear: Story = {
    args: {
        theme:ThemeButton.CLEAR,
        children: "button"
    },

};

export const Outline: Story = {
    args: {
        theme:ThemeButton.OUTLINE,
        children: "button"
    },

};

export const OutlineDark: Story = {
    args: {
        theme:ThemeButton.OUTLINE,
        children: "button"
    },
    decorators: [
        (Story) => ThemeDecorators(Theme.DARK)(Story)

    ]

};