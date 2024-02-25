// IconButton.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
import TextHint from './index';

const meta: Meta<typeof TextHint> = {
	title: 'Components/TextHint',
	component: TextHint,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {

	}
};

export default meta;

type Story = StoryObj<typeof TextHint>;

export const Default: Story = {
	args: {
        children: "Test test test test test test test test test test test test test test test",
		onParent: true,
		className: "hint-up",
		style: {
			width: '50px',
		}
	},
};
