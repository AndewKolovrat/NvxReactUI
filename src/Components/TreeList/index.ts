
export { default } from './TreeList';

export type ItemType = {
	id: string;
	title: string;
	subItems?: Array<ItemType>;
	isExpand?: boolean;
	isDisabled?: boolean;
	isActive?: boolean; 
};
