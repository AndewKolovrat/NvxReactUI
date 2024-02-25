// IconButton.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
import TreeList from './index';

const meta: Meta<typeof TreeList> = {
	title: 'Components/TreeList',
	component: TreeList,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		// layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		items: {
			description: "Массив элементов списка"
		},
		selectedItem: {
			description: "ID текущего выбранного элемента"
		},
		searchEnable: {
			description: "Разрешить поиск по элементам"
		},
		searchPlaceholder: {
			description: "Текст в поле поиска"
		},
		onItemClick: {
			description: "Вызывается при клике на элементе"
		}
	},
};

export default meta;

type Story = StoryObj<typeof TreeList>;

export const Default: Story = {
	args: {
		searchEnable: true,
		selectedItem: "",
		items: [
			{
				id: "0",
				title: "Test 0"
			},
			{
				id: "1",
				title: "Test 1"
			},
			{
				id: "2",
				title: "Test 2",
				subItems: [
					{
						id: "2_0",
						title: "Test 2-0"
					},
					{
						id: "2_1",
						title: "Test 2-1"
					}
				]
			}
		]
	},
};