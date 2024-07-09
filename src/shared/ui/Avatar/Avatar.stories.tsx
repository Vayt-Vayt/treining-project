import type { Meta, StoryObj } from '@storybook/react';

import "app/styles/index.scss"
import Avatar from './Avatar';
import AvatarImg from "./AvatarImg.jpg"

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    parameters: {},
    argTypes: {
        
    },

} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AvatarSize: Story = {
    args: {
        size: 150,
        src: AvatarImg
    },

};