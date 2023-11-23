import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import SearchInput from '../SearchInput';
import { ItemType } from '.';
import TreeListItem from './TreeListItem/TreeListItem';
import './TreeList.style.scss';

interface ITreeListProps {
	items: Array<ItemType>;
	selectedItem?: string;
	className?: string;
	searchEnable?: boolean;
	onClick?: ( item: ItemType ) => void;
};

/** Древовидный список */
const TreeList: React.FC<ITreeListProps> = ({ items, selectedItem = "", className, searchEnable = false, onClick }) => {
	
	const [ preparedItems, setPreparedItem ] = useState<Array<ItemType>>([]);
	const [ activeItem, setActiveItem ] = useState<string>(selectedItem);

	useEffect(() => setActiveItem(selectedItem), [selectedItem]);

	useEffect(() => {
		const pi = items.map( item => {
			return {
				...item,
				isExpand: getIsExpanded( item, selectedItem )
			};
		});
		setPreparedItem(pi);
	}, [ items, selectedItem ] );

	/** Функция фильтрации (поиска) по списку */
	const onSearchingHandler = ( value: string ) => {
		if ( !items.length ) return; 
		if ( !!value ) {
			const filtered = filtering(items, value.toLowerCase());
			setPreparedItem(filtered);
		} else {
			setPreparedItem(items);
		}
	};

	/// TODO: Переписать на универсальную функцию и перенести в утилиты
	/** Функция разворачивает все вложенные объекты и производит поиск по ним  */
	const filtering = (list: ItemType[], value: string ) => list.flatMap( flatItem ).filter( i => i.title.toLowerCase().indexOf(value) !== -1);

	/** Функция для разворачивания вложенных элементов */
	const flatItem = ( item: ItemType ): Array<ItemType> => {
		if ( !!item.subItems?.length )
			return [ item, ...item.subItems.flatMap( s => flatItem(s) )];
		return [item];
	};

	/**   */
	const onClickHandler = ( item: ItemType ) => {
		if ( !!item.id ) 
			setActiveItem(item.id);
		!!onClick && onClick(item);
	};

	/** Отрисовка списка */
	const renderList = () => (
		<ul className="treelist">
			{ 
				preparedItems.map( (i, index) => (
					<TreeListItem 
						index={index}
						activePreset={activeItem}
						key={ !!i.id ? i.id : index } 
						item={i} 
						onClick={onClickHandler} 
					/>
				))
			}
		</ul>
	);

	return (
		<div className={classNames("treelist-wrapper", className)}>
			{ 
				!!searchEnable && 
				<SearchInput 
					placeholder='Введите название реестра' 
					onSearch={onSearchingHandler}
					debounceDelay={500}
				/> 
			}
			{ renderList() }
			{
				!preparedItems.length &&
				<p className="treelist-empty">
					По вашему запросу ничего не найдено.
				</p>
			}
		</div>
	);
};

const getIsExpanded = (item: ItemType, activeNodeId: string = "" ) => {

	if ( !!item.isExpand || item.id === activeNodeId ) {
		return true;
	}
	else if ( !item.subItems?.length ) 
		return false;
	else {
		for( let i = 0; i < item.subItems.length; i++ ) {
			const subItem = item.subItems[i];
			if ( getIsExpanded( subItem, activeNodeId ) ) {
				subItem.isExpand = true;
				item.isExpand = true;
				return true;
			}
		}
	}
	return false;
};

export default TreeList;
