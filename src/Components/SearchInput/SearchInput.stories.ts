// IconButton.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
import SearchInput from './index';

const meta: Meta<typeof SearchInput> = {
	title: 'Components/SearchInput',
	component: SearchInput,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		// layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		debounceDelay: {
			description: "Задержка перед вызовом метода 'onSearch' в мс, после изменения значения. При значении -1 задержки не будет."
		},
		onSearch: {
			description: "Вызывается при редактировании значения поисковой строки"
		}
	},
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
	args: {
		debounceDelay: 500
	},
};