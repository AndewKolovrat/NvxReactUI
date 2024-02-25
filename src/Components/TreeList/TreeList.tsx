import React, { useState } from 'react';
import classNames from 'classnames';
import SearchInput from '../SearchInput';
import { ITreeListProps, TreeListItemType, useListExpandedByCurrent, useListSearchedItems } from '.';
import TreeListItem from './TreeListItem/TreeListItem';
import './TreeList.style.scss';

/** Древовидный список */
const TreeList: React.FC<ITreeListProps> = ({ searchPlaceholder, items, selectedItem = "", searchEnable = false, onItemClick, ...otherProps }) => {
	
	const [ search, setSearch ] = useState<string>("");
	const preparedItems = useListExpandedByCurrent( items, selectedItem );
	const filtering = useListSearchedItems(preparedItems, search);

	/** Вызов внешнего метода выбора реестра  */
	const onClickHandler = ( item: TreeListItemType ) => !!onItemClick && onItemClick(item);

	/** Отрисовка списка */
	const renderList = () => (
		<ul id={otherProps.id} className="treelist">
			{ 
				filtering.map( (i, index) => (
					<TreeListItem 
						index={index}
						activePreset={selectedItem}
						key={ !!i.id ? i.id : index } 
						item={i} 
						onClick={onClickHandler} 
					/>
				))
			}
		</ul>
	);

	return (
		<div {...otherProps} className={classNames("treelist-wrapper", otherProps.className)}>
			{ 
				!!searchEnable && 
				<SearchInput 
					placeholder={ searchPlaceholder || 'Поиск'} 
					onSearch={setSearch}
					debounceDelay={500}
				/> 
			}
			{ renderList() }
			{
				!filtering.length &&
				<p className="treelist-empty">
					По вашему запросу ничего не найдено.
				</p>
			}
		</div>
	);
};

export default TreeList;
