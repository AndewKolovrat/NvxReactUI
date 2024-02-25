
import { useEffect, useState } from "react";
import IconButton from "src/Components/IconButton";
import { ReactComponent as ClearIcon } from './assets/clearBtn.svg';
import { ReactComponent as ArrowIcon } from './assets/arrow.svg';
import CheckBox from "../CheckBox/CheckBox";
import classNames from "classnames";
import "./SelectModal.scss";
import TextHint from "src/Components/TextHint";

export type EnumsType = Array<EnumItemType>;
export type EnumItemType = {
	id: string|number,
	title?: string
} | string;

interface SelectProps {
	name?: string;
	placeholder?: string;
	disabled?: boolean;
	searchEnable?: boolean;

	value?: string | Array<string>;
	setValue?: ( value: string|Array<string> ) => void;

	minSearchLength?: number;
	onSearch?: ( tern: string ) => void;

	enums?: EnumsType;
	multiple?: boolean;
	isWait?: boolean;
	defaultOpen?: boolean;
	showClearBtn?: boolean;
};

const Select: React.FC<SelectProps> = (props) => {
	const { 
		name, defaultOpen = false, disabled = false, placeholder, searchEnable = false, showClearBtn = false,
		setValue, onSearch, value, enums = [], multiple = false, isWait = false, minSearchLength = 3 
	} = props;

	const [ isOpen, setIsOpen ] = useState<boolean>( !disabled && defaultOpen);
	const [ search, setSearch ] = useState<string>("");
	const [ filteredData, setFilteredData ] = useState<EnumsType>([]);

	useEffect(() => {
		setFilteredData( enums.filter( onApplyFilter ) );
	// eslint-disable-next-line
	}, [enums]);

	useEffect(() => {
		if ( !!onSearch && ( !search || minSearchLength === -1 || search.length >= minSearchLength ) ) {
			onSearch(search);
		} 
		else {
			setFilteredData( enums.filter( onApplyFilter ) );
		}
	// eslint-disable-next-line
	}, [search] );

	const onApplyFilter = ( (item: EnumItemType) => {
		const term = search.toLowerCase() ?? "";
		if ( !term ) return true;
		else if ( typeof item === "string" ) {
			return item.toLocaleLowerCase().indexOf( term ) !== -1;
		} 
		else {
			return item?.title?.toLocaleLowerCase().indexOf( term ) !== -1;
		}
	});

	const getPlaceHolderText = () => {
		const length = 3 - search.length;
		if ( isWait ) 
			return "Ведется поиск...";
		if ( length > 0 && length < 3 ) 
			return `Введите ещё ${length} символа`;
		else 
			return "";
	};

	const getIsChecked = ( item: EnumItemType ): boolean => {
		const id = typeof item === "string" ? item : item?.id;
		if ( !!multiple ) {
			return (value as Array<any>).includes(id);
		} 
		return value === id;
	};

	const onChangeHandler = ( id: string ) => {
		if ( !!setValue ) {
			if ( multiple ) {
				const valueArray = [ ...(value as string[]) ];
				const index = valueArray.indexOf( id );
				if ( index === -1 ) {
					valueArray.push(id);
				}
				else {
					valueArray.splice( index, 1);
				}
				setValue(valueArray);
			}
			else {
				setValue( id );
			}
		}
	};

	const onShowListChange = () => !disabled && setIsOpen( !isOpen );

	const renderOption = ( item: EnumItemType | string, index: number ) => {
		let val: any, title;
		if ( typeof item === "string" ) {
			val = item;
			title = item;
		} 
		else {
			val = item.id;
			title = item.title;
		}
		const isChecked = getIsChecked(val);
		const itemClassses = classNames( "rdcc__listitem", {
			"item-checked": isChecked
		});
		return (
			<li key={index} className={itemClassses} id={val} onClick={ () => onChangeHandler(val)}>
				{ 
					!!multiple &&
					<CheckBox name={val} value={isChecked} />
				}
				<TextHint onParent={true}>
					{title || ""}
				</TextHint>
			</li>
		);
	};

	const renderList = () => {
		if ( multiple ) {
			return (
				<>
					<ul className="rdcc__body__listitems">
						{ enums.filter( i => getIsChecked(i) ).map( renderOption )}
					</ul>
					<ul className="rdcc__body__listitems">
						{ filteredData.filter( i => !getIsChecked(i) ).map( renderOption )}
					</ul>
				</>
			);
		} 
		else {
			return (
				<ul className="rdcc__body__listitems">
					{ filteredData.map( renderOption )}
				</ul>
			);
		}
	};

	return (
		<div className="rdcc_list-wrapper" id={name}>
			<div className={"rdcc__header" + (isOpen ? " opened" : "")} >
				<ArrowIcon onClick={onShowListChange} />
				{
					!!searchEnable &&
					<input autoFocus value={search} disabled={disabled} onChange={ e => setSearch(e.target.value)} placeholder={placeholder} />
				}
				<div className="rdcc__header-toolbar">
					{
						!!isWait &&
						<div className="spiner" />
					}
					{
						!!showClearBtn &&
						<IconButton 
							disabled={!search} 
							cssClass='hint' 
							data-hint={"Очистить"} 
							outline
							onClick={(e) => {
								e.preventDefault();
								e.stopPropagation();
								setSearch('');
							}}
						>
							<ClearIcon />
						</IconButton>
					}
					
				</div>
			</div>
			{
				isOpen && 
				<div className="rdcc__body">
					{
						!!getPlaceHolderText() &&
						<p className="rdcc__body__placeholder">{getPlaceHolderText()}</p>
					}
					{
						!filteredData.length &&
						<p className="rdcc__body__placeholder error">По Вашему запросу ничего не найдено</p>
					}
					{renderList()}
				</div>
			}
		</div>
	);
};

export default Select;
