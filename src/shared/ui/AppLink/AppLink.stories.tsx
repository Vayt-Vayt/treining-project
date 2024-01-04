import type { Meta, StoryObj } from '@storybook/react';

import "app/styles/index.scss"
import { ThemeDecorators } from 'shared/config/storybook/decorators/ThemeDecorators';
import { Theme } from 'app/provider/themeProvider';
import { AppLink, ThemeLink } from './AppLink';


const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {},
    argTypes: {},
    args: {
        to: "/",
        children: "Klick me"
    }

} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;


export const ThemeLight_Primary: Story = {
    args: {
        theme: ThemeLink.PRIMARY
    },

};

export const ThemeLight_Secondary: Story = {
    args: {
        theme: ThemeLink.SECONDARY
    },

};


export const ThemeLight_In_Primary: Story = {
    args: {
        theme: ThemeLink.IN_PRIMARY
    },
};

export const ThemeLight_In_Secondary: Story = {
    args: {
        theme: ThemeLink.IN_SECONDARY
    },
};

export const ThemeDark_Primary: Story = {
    args: {
        theme: ThemeLink.PRIMARY
    },
    decorators: [
        (Story) => ThemeDecorators(Theme.DARK)(Story)
        
    ]
};

export const ThemeDark_Secondary: Story = {
    args: {
        theme: ThemeLink.SECONDARY
    },
    decorators: [
        (Story) => ThemeDecorators(Theme.DARK)(Story)
        
    ]
};


export const ThemeDark_In_Primary: Story = {
    args: {
        theme: ThemeLink.IN_PRIMARY
    },
    decorators: [
        (Story) => ThemeDecorators(Theme.DARK)(Story)
        
    ]
};

export const ThemeDark_In_Secondary: Story = {
    args: {
        theme: ThemeLink.IN_SECONDARY
    },
    decorators: [
        (Story) => ThemeDecorators(Theme.DARK)(Story)
        
    ]
};