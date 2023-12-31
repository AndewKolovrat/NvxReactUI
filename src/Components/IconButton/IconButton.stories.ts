// IconButton.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
import IconButton from './IconButton';

const meta: Meta<typeof IconButton> = {
	title: 'Components/IconButton',
	component: IconButton,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		// layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
	},
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
	args: {
		children: 'Button',
	},
};