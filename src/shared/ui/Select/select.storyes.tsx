import type { Meta, StoryObj } from '@storybook/react';

import "app/styles/index.scss"
import { ThemeDecorators } from 'shared/config/storybook/decorators/ThemeDecorators';
import { Theme } from 'app/provider/themeProvider';
import { Select } from './Select';

const meta = {
    title: 'shared/Select',
    component: Select,
    parameters: {},
    argTypes: {},
    args: {
        label: "znachenie",
        options: [
            { value: "123", content: "one punckt" },
            { value: "234", content: "two punckt" }, 
            { value: "345", content: "three punckt" } 
        ]
    }

} satisfies Meta<typeof Select>;

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