import type { Meta, StoryObj } from '@storybook/react';

import "app/styles/index.scss"
import { ThemeDecorators } from 'shared/config/storybook/decorators/ThemeDecorators';
import { Theme } from 'app/provider/themeProvider';
import { Text, ThemeText } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {},
    argTypes: {},
    args: {
    }

} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
    args: {
        title: "Title primer"
    },

};

export const Texts: Story = {
    args: {
        text: "Text primer! Text primer! Text primer!"
    },

};

export const Title_text: Story = {
    args: {
        title: "Title primer",
        text: "Text primer! Text primer! Text primer!"
    },

};

export const Title_dark: Story = {
    args: {
        title: "Title primer"
    },
    decorators: [
        (Story) => ThemeDecorators(Theme.DARK)(Story)
    ]
};

export const Texts_dark: Story = {
    args: {
        text: "Text primer! Text primer! Text primer!"
    },
    decorators: [
        (Story) => ThemeDecorators(Theme.DARK)(Story)
    ]
};

export const Title_text_dark: Story = {
    args: {
        title: "Title primer",
        text: "Text primer! Text primer! Text primer!"
    },
    decorators: [
        (Story) => ThemeDecorators(Theme.DARK)(Story)
    ]
};

export const Error: Story = {
    args: {
        title: "Title primer",
        text: "Text primer! Text primer! Text primer!",
        theme: ThemeText.ERROR
    },

};

export const Error_dark: Story = {
    args: {
        title: "Title primer",
        text: "Text primer! Text primer! Text primer!",
        theme: ThemeText.ERROR
    },
    decorators: [
        (Story) => ThemeDecorators(Theme.DARK)(Story)
    ]
};