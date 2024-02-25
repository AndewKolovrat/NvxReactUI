// IconButton.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
	title: 'Components/Modal',
	component: Modal,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {

	}
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
	args: {
        children: "Это тестовое модальное окно"
	},
};
