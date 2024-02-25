import { useEffect, useState } from 'react';
export { default } from './TreeList';

export interface ITreeListProps extends React.HTMLProps<HTMLInputElement> {
	items: Array<TreeListItemType>;
	selectedItem?: string;
	searchEnable?: boolean;
	searchPlaceholder?: string;
	onItemClick?: ( item: TreeListItemType ) => void;
};

export type TreeListItemType = {
	id: string;
	title: string;
	subItems?: Array<TreeListItemType>;
	isExpand?: boolean;
	isDisabled?: boolean;
	isActive?: boolean;
};

/** */
export const useListExpandedByCurrent = ( initialList: Array<TreeListItemType>, currentItemID: string ): Array<TreeListItemType> => {
	const [ preparedItems, setPreparedItem ] = useState<Array<TreeListItemType>>([]);
	useEffect(() => {
		const pi = initialList.map( item => {
			return {
				...item,
				isExpand: getIsExpanded( item, currentItemID )
			};
		});
		setPreparedItem(pi);
	}, [initialList, currentItemID] );
	return preparedItems;
};

/** */
export const useListSearchedItems = ( initialList: Array<TreeListItemType>, searchText: string = "" ): Array<TreeListItemType> => {
	const [ list, setList ] = useState<Array<TreeListItemType>>([]);
	useEffect(() => {
		if ( !searchText ) 
			setList(initialList);
		else {
			const _list: Array<TreeListItemType> = [];
			initialList.forEach( item => {
				if ( getIsFindsItem( item, searchText ) ) {
					const _item = {...item};
					_item.isExpand = true;
					_list.push(_item);
				}
			});
			setList(_list);
		}
	}, [ initialList, searchText ] );
	return list;
};

/** */
const getIsExpanded = (item: TreeListItemType, activeID: string ) => {
	if ( !!item.isExpand || item.id === activeID ) {
		return true;
	}
	else if ( !item.subItems?.length ) 
		return false;
	else {
		for( let i = 0; i < item.subItems.length; i++ ) {
			const subItem = item.subItems[i];
			if ( getIsExpanded( subItem, activeID ) ) {
				subItem.isExpand = true;
				item.isExpand = true;
				return true;
			}
		}
	}
	return false;
};

/** */
const getIsFindsItem = ( item: TreeListItemType, searchText: string ): boolean => {
	let isFind = false;
	if ( item.title.toLocaleLowerCase().indexOf(searchText) !== -1 ) {
		item.isExpand = true;
		isFind = true;
	}
	else if ( !item.subItems?.length ) {
		item.isExpand = false;
		isFind = false;
	}
	else {
		for( let i = 0; i < item.subItems.length; i++ ) {
			const subItem = item.subItems[i];
			if ( getIsFindsItem( subItem, searchText ) ) {
				subItem.isExpand = true;
				item.isExpand = true;
				isFind = true;
			}
		}
	}
	return isFind;
};
