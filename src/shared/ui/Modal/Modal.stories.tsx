import type { Meta, StoryObj } from '@storybook/react';

import "app/styles/index.scss"
import { ThemeDecorators } from 'shared/config/storybook/decorators/ThemeDecorators';
import { Theme } from 'app/provider/themeProvider';
import Modal from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {},
    argTypes: {},
    args: {
        children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, recusandae?",
        isOpen: true
    }

} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Theme_light: Story = {
    args: {},

};

export const Theme_dark: Story = {
    args: {},
    decorators: [
        (Story) => ThemeDecorators(Theme.DARK)(Story)
    ]
};