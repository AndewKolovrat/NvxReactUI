// IconButton.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
import Badge from './index';

const meta: Meta<typeof Badge> = {
	title: 'Components/Badge',
	component: Badge,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
	},
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
	args: {
        children: "TEST",
        color: "yellow"
    },
};