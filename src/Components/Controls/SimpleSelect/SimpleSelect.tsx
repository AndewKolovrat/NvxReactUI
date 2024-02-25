
import { useEffect, useRef, useState } from "react";
import IconButton from "src/Components/IconButton";
import { ReactComponent as ClearIcon } from './assets/clearBtn.svg';
import { ReactComponent as ArrowIcon } from './assets/arrow.svg';
import CheckBox from "../CheckBox/CheckBox";
import classNames from "classnames";
import "./simpleSelect.scss";

export type EnumsType = Array<EnumItemType>;
export type EnumItemType = {
	id: ValueType,
	title?: string
} | string | number;

type ValueType = string | number;

interface SimpleSelectProps {
	name?: string;
	placeholder?: string;
	disabled?: boolean;
	searchEnable?: boolean;

	value?: ValueType | Array<ValueType> | null;
	setValue: React.Dispatch<React.SetStateAction<string|Array<string>>>;

	minSearchLength?: number;
	onSearch?: ( tern: string ) => void;

	options?: EnumsType;
	multiple?: boolean;
	isWait?: boolean;
	defaultOpen?: boolean;
	showClearBtn?: boolean;
};

const SimpleSelect: React.FC<SimpleSelectProps> = (props) => {
	const { 
		name, defaultOpen = false, disabled = false, placeholder, showClearBtn = false,
		setValue, value, options = [], multiple = false, isWait = false
	} = props;

	const wrapperRef = useRef<HTMLDivElement>(null);
	const [ isOpen, setIsOpen ] = useState<boolean>( !disabled && defaultOpen);

	useEffect(() => {
		/** Слушаем все клики на документе  */
		const onClick = (event: MouseEvent) => {
			// Если клик был не в обалсти контейнера списка
			if ( !wrapperRef.current?.contains(event.target as Node) ) {
				// Закрываем его
				event.stopPropagation();
				setIsOpen(false);
			}
		}
		document.addEventListener('click', onClick);
		return () => document.removeEventListener('click', onClick);
	}, []);

	const getIsChecked = ( item: EnumItemType ): boolean => {
		const id = typeof item !== "object" ? item : item?.id;
		if ( !!multiple ) {
			return (value as Array<any>).includes(id);
		} 
		return value === id;
	};

	const onChangeHandler = ( id: string ) => {
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
			setIsOpen(false);
		}
	};

	const onShowListChange = () => !disabled && setIsOpen( !isOpen );

	const getTitleValue = () => {
		if ( !value && value !== 0 )
			return placeholder;
		if ( typeof options[0] === "object" ) {
			const opt = options.find( (o: any)  => o.id === value ) as any;
			if ( !!opt )
				return opt.title;
			return '';
		}
		else 
			return value;
	};

	const renderOption = ( item: EnumItemType | string, index: number ) => {
		let val: any, title;
		if ( typeof item !== "object" ) {
			val = item;
			title = item;
		} 
		else {
			val = item.id;
			title = item.title;
		}
		const isChecked = getIsChecked(val);
		const itemClassses = classNames( "rdccs__listitem", {
			"item-checked": isChecked
		});
		return (
			<li key={index} className={itemClassses} id={val} onClick={ () => onChangeHandler(val)}>
				{ 
					!!multiple &&
					<CheckBox name={val} value={isChecked} />
				}
				<span>{title}</span>
			</li>
		);
	};

	return (
		<div ref={wrapperRef} className="rdccs_list-wrapper" id={name}>
			<div className={"rdccs__header" + (isOpen ? " opened" : "")} onClick={onShowListChange} >
				<ArrowIcon height={24} width={24}/>
				<span>{getTitleValue()}</span>
				<div className="rdccs__header-toolbar">
					{
						!!isWait &&
						<div className="spiner" />
					}
					{
						!!showClearBtn &&
						<IconButton 
							disabled={!value} 
							cssClass='hint' 
							data-hint={"Очистить"} 
							outline
							onClick={(e) => {
								e.preventDefault();
								e.stopPropagation();
								setValue( multiple ? [] : '');
							}}
						>
							<ClearIcon />
						</IconButton>
					}
					
				</div>
			</div>
			{
				isOpen && 
				<div className="rdccs__body">
					<ul className="rdccs__body__listitems">
						{ options.map( renderOption )}
					</ul>
				</div>
			}
		</div>
	);
};

export default SimpleSelect;
