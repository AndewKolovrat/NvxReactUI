// IconButton.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
import NvxDataGrid from './index';

const meta: Meta<typeof NvxDataGrid> = {
	title: 'Components/NvxDataGrid',
	component: NvxDataGrid,
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

type Story = StoryObj<typeof NvxDataGrid>;

const columns = [
	{ id: "column1", label: "Column 1" },
	{ id: "column2", label: "Column 2" },
	{ id: "column3", label: "Column 3" },
	{ id: "column4", label: "Column 4" },
	{ id: "column5", label: "Column 5" },
	{ id: "column6", label: "Column 6" }
];

const calcData = ( columns: any[], count: number = 20 ) => {
	const dataList = [];
	for( let i = 0; i < count; i++ ) {
		const item: any = {};
		columns.forEach( (column, index) => {
			item[column.id] = `cell_${i}_${index}`;
		});
		dataList.push( item );
	}
	return dataList;
};

export const Default: Story = {
	args: {
		columnHorizontalPadding: 20,
		columnVerticalPadding: 20,
		// displayIndex
		rowHeaderWidth: 0,
		height: 250,
		width: 350,
		columns: columns,
		recordset: calcData( columns, 500)
	},
};