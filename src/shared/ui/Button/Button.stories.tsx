import type { Meta, StoryObj } from '@storybook/react';
import Button, { SizeButton, ThemeButton } from './Button';

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

export const Clear_inverted: Story = {
    args: {
        theme:ThemeButton.CLEAR_IN,
        children: "button"
    },

};

export const Outline: Story = {
    args: {
        theme:ThemeButton.OUTLINE,
        children: "button"
    },

};

export const Outline_size_m: Story = {
    args: {
        theme:ThemeButton.OUTLINE,
        children: "button",
        size: SizeButton.M
    },

};

export const Outline_size_l: Story = {
    args: {
        theme:ThemeButton.OUTLINE,
        children: "button",
        size: SizeButton.L
    },

};

export const Outline_size_xl: Story = {
    args: {
        theme:ThemeButton.OUTLINE,
        children: "button",
        size: SizeButton.XL
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

export const BACKGRAUND: Story = {
    args: {
        theme:ThemeButton.BACKGRAUND,
        children: "button"
    },
};

export const BACKGRAUND_INVERTED: Story = {
    args: {
        theme:ThemeButton.BACKGRAUND_INVERTED,
        children: "button"
    },
};

export const Square: Story = {
    args: {
        theme:ThemeButton.BACKGRAUND_INVERTED,
        children: "button",
        square: true,
    },
};

export const Square_Size_m: Story = {
    args: {
        theme:ThemeButton.BACKGRAUND_INVERTED,
        square: true,
        size: SizeButton.M,
        children: ">"
    },
};

export const Square_Size_l: Story = {
    args: {
        theme:ThemeButton.BACKGRAUND_INVERTED,
        square: true,
        size: SizeButton.L,
        children: ">",
    },
};

export const Square_Size_xl: Story = {
    args: {
        theme:ThemeButton.BACKGRAUND_INVERTED,
        square: true,
        size: SizeButton.XL,
        children: ">"
    },
};