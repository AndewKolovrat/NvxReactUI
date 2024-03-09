
import React, { useEffect, useRef, useState } from "react";
import IconButton from "../../IconButton";
import CheckBox from "../CheckBox/CheckBox";
import classNames from "classnames";
import "./simpleSelect.scss";

export type EnumsType = Array<EnumItemType>;
export type EnumItemType = {
	id: ValueType,
	title?: string
} | string | number;

type ValueType = string | number;

interface SimpleSelectProps extends React.AreaHTMLAttributes<HTMLDivElement> {
	name?: string;
	placeholder?: string;
	disabled?: boolean;
	searchEnable?: boolean;
	allowNew?: boolean;

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
		name, allowNew = false, defaultOpen = false, disabled = false, placeholder, showClearBtn = false, className,
		setValue, value, options = [], multiple = false, isWait = false, ...other
	} = props;

	const getTitleValue = (): string => {
		if ( !value && value !== 0 )
			return placeholder || "";
		else if ( typeof options[0] === "object" ) {
			const opt = options.find( (o: any)  => o.id === value ) as any;
			if ( !!opt )
				return opt.title;
			return '';
		}
		else 
			return value?.toString() || "";
	};

	const wrapperRef = useRef<HTMLDivElement>(null);
	const [ isOpen, setIsOpen ] = useState<boolean>( !disabled && defaultOpen);
	const [ textValue, setTextValue ] = useState<string>(getTitleValue());

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

	const onChangeHandler = ( id: string, title: string ) => {
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
		setTextValue(title);
	};

	const onChangeTextHandler = ( e: React.ChangeEvent<HTMLInputElement> ) => {
		const value = e.target.value;
		setTextValue(value);
		setTimeout(() => {
			setValue(value)
		}, 500);
	}; 

	const onShowListChange = () => !disabled && setIsOpen( !isOpen );

	const onClearHandler = ( e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setValue( multiple ? [] : '');
		setTextValue("");
	};

	const renderOption = ( item: EnumItemType | string, index: number ) => {
		let val: any, title: string;
		if ( typeof item !== "object" ) {
			val = item;
			title = item.toString();
		} 
		else {
			val = item.id;
			title = item.title || item.id.toString();
		}
		const isChecked = getIsChecked(val);
		const itemClassses = classNames( "rdccs__listitem", {
			"item-checked": isChecked
		});
		return (
			<li key={index} className={itemClassses} id={val} onClick={ () => onChangeHandler(val, title)}>
				{ 
					!!multiple &&
					<CheckBox name={val} value={isChecked} />
				}
				<span>{title}</span>
			</li>
		);
	};

	const renderPlaceholder = () => {
		if ( allowNew ) {
			return (
				<input 
					value={textValue} 
					type="text" 
					className="rdccs__header__input"
					onChange={onChangeTextHandler}
				/>
			);
		}
		else 
			return (<span className="rdccs__header__placeholder">{getTitleValue()}</span>);
	};

	return (
		<div {...other} ref={wrapperRef} className={classNames("rdccs_list-wrapper", className) } id={name}>
			<div className={classNames("rdccs__header", { "opened": isOpen }) } onClick={onShowListChange} >
				<ArrowIcon />
				{ renderPlaceholder() }
				<div className="rdccs__header-toolbar">
					{
						!!isWait && <div className="spiner" />
					}
					{
						!!showClearBtn &&
						<IconButton 
							disabled={!value} 
							className='hint' 
							data-hint={"Очистить"} 
							outline
							onClick={onClearHandler}
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

const ArrowIcon = () => (
	<svg width="33" height="32" viewBox="0 0 33 32" fill="inherit">
		<g clip-path="url(#clip0_3601_287747)">
			<path d="M11.5 13.5L16.5 18.5L21.5 13.5H11.5Z" fill="inherit"/>
		</g>
		<defs>
			<clipPath id="clip0_3601_287747">
				<rect width="32" height="32" fill="white" transform="translate(0.5)"/>
			</clipPath>
		</defs>
	</svg>
);

const ClearIcon = () => (
	<svg width="32" height="32" viewBox="0 0 32 32" fill="inherit" >
    	<path d="M22.295 11.115C22.6844 10.7256 22.6844 10.0944 22.295 9.705C21.9056 9.31564 21.2744 9.31564 20.885 9.705L16 14.59L11.115 9.705C10.7256 9.31564 10.0944 9.31564 9.705 9.705C9.31564 10.0944 9.31564 10.7256 9.705 11.115L14.59 16L9.705 20.885C9.31564 21.2744 9.31564 21.9056 9.705 22.295C10.0944 22.6844 10.7256 22.6844 11.115 22.295L16 17.41L20.885 22.295C21.2744 22.6844 21.9056 22.6844 22.295 22.295C22.6844 21.9056 22.6844 21.2744 22.295 20.885L17.41 16L22.295 11.115Z" fill="inherit"/>
	</svg>
);

export default SimpleSelect;
