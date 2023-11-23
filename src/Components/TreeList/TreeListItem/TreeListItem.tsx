import React, { useState } from 'react';
import IconButton from "../../IconButton/IconButton";
import classNames from "classnames";
import { ReactComponent as Arrow } from './arrow.svg';
import { ItemType } from '..';

interface ITreeListItemPros {
	index: number;
	item: ItemType;
	activePreset?: string;
	onClick?: (item: ItemType) => void;
};

const TreeListItem: React.FC<ITreeListItemPros> = ( { item, activePreset, onClick, index } ) => {

	const [ exItem, setExItem ] = useState<ItemType>(item);

	const onClickHandler = (e: React.MouseEvent<HTMLLIElement>, item: ItemType) => {
		e.stopPropagation();
		if ( !!onClick && !exItem.isDisabled ) {
			onClick(item);
		} 
	};

	const onExpandItemHandler =  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation();
		setExItem( prev => {
			return {
				...prev,
				isExpand: !prev.isExpand
			};
		});
	};

	const getNodeClasses = (item: ItemType) => classNames("treelist_node", {
		"treelist_node_end": !item.subItems?.length,
		"open": item.isExpand,
		"active": exItem.isActive || ( !!item.id && activePreset === item.id),
		"disable": exItem.isDisabled
	});

	return (
		<li 
			className={getNodeClasses(exItem)} 
			key={exItem.id} 
			id={ !!exItem.id ? exItem.id : index.toString() }
			onClick={ e => onClickHandler(e, exItem) }
		>
			<div className="treelist_node-mnu hint" data-hint={exItem.title}>
				<IconButton outline disabled={!exItem.subItems?.length} onClick={onExpandItemHandler}>
					<Arrow className='treelist-expand_icon' aria-hidden={!exItem.subItems?.length}/>
				</IconButton>
				<span className="treelist_node-title">{exItem.title}</span>
			</div>
			{
				(!!exItem.subItems?.length && !!exItem.isExpand ) &&
				<ul className="treelist_node__sub_node">
					{ exItem.subItems.map( (i, index) => <TreeListItem key={i.id + '_' + index} item={i} index={index} activePreset={activePreset} onClick={onClick}/>) }
				</ul>
			}
		</li>
	);
};

export default TreeListItem;
