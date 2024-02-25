import React, { useState } from 'react';
import IconButton from '../../IconButton';
import TextHint from '../../TextHint';
import classNames from "classnames";
import { TreeListItemType } from '..';


interface ITreeListItemPros {
	index: number;
	item: TreeListItemType;
	activePreset?: string;
	onClick?: (item: TreeListItemType) => void;
};

const TreeListItem: React.FC<ITreeListItemPros> = ( { item, activePreset, onClick, index } ) => {

	const [ exItem, setExItem ] = useState<TreeListItemType>(item);

	const onClickHandler = (e: React.MouseEvent<HTMLLIElement>, item: TreeListItemType ) => {
		e.stopPropagation();
		setExItem( prev => {
			return {
				...prev,
				isExpand: !prev.isExpand
			};
		});
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

	const getNodeClasses = (item: TreeListItemType) => classNames("treelist_node", {
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
			<div className="treelist_node-mnu " data-hint={exItem.title}>
				<IconButton outline disabled={!exItem.subItems?.length} onClick={onExpandItemHandler}>
					<svg className='treelist-expand_icon' aria-hidden={!exItem.subItems?.length} width="30" height="32" viewBox="0 0 30 32" fill="inherit" xmlns="http://www.w3.org/2000/svg">
						<path d="M13.5 21L18.5 16L13.5 11V21Z" fill="inherit"/>
					</svg>
				</IconButton>
				<TextHint className="treelist_node-title">{exItem.title}</TextHint>
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
