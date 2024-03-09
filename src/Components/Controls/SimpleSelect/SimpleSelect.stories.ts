// SimpleSelect.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
import SimpleSelect from './SimpleSelect';

const meta: Meta<typeof SimpleSelect> = {
	title: 'Components/SimpleSelect',
	component: SimpleSelect,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
	},
};

export default meta;

type Story = StoryObj<typeof SimpleSelect>;

const items = [
	"test0", "test1", "test2"
];

export const Default: Story = {
	args: {
		options: items,
		value: "test0",
		showClearBtn: true,
		setValue: (val) => { console.log(val)}
    },
};