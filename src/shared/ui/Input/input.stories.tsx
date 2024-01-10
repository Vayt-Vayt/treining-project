import type { Meta, StoryObj } from '@storybook/react';

import "app/styles/index.scss"
import { ThemeDecorators } from 'shared/config/storybook/decorators/ThemeDecorators';
import { Theme } from 'app/provider/themeProvider';
import { Input } from './Input';

const meta = {
    title: 'shared/Input',
    component: Input,
    parameters: {},
    argTypes: {},
    args: {
        value: "TvvcxSAW"
    }

} satisfies Meta<typeof Input>;

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