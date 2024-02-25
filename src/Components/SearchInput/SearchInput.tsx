import React, { ChangeEventHandler, useState, useEffect } from "react";
import { ISearchInputProps } from ".";
import classNames from "classnames";
import "./search-input.scss";

/** Компонент поисковой строки  */
export const SearchInput: React.FC<ISearchInputProps>= ({ onSearch, debounceDelay = 500, disabled = false, ...otherProps }) => {

	const [value, setValue] = useState<string>("");

	useEffect(() => {
		if ( debounceDelay !== -1 && !disabled ) {
			const timerHandler = setTimeout(() => {
				onSearch(value);
			}, debounceDelay);
		
			return () => {
				clearTimeout(timerHandler);
			};
		} else if ( !disabled ) {
			onSearch(value);
		}
	// eslint-disable-next-line
	}, [value, disabled, debounceDelay]);

	const onChangeHandler: ChangeEventHandler<HTMLInputElement> = ( e: React.ChangeEvent<HTMLInputElement> ) => {
		const newValue = e.target.value;
		setValue(newValue);
	};

	const onKeyPressed: React.KeyboardEventHandler = (e) => {
		if ( !!disabled )
			return;
		if ( e.code === "Enter" ) {
			onSearch(value);
		}
	};

	const onResetValue = () => {
		if ( !disabled ) {
			setValue("");
		}
	};

	return (
		<div className={classNames("rdc_control", { 'disabled': !!disabled })} onKeyUp={onKeyPressed}>
			<span className="menu-icon icon-search"></span>
			<input 
				className={classNames("rdc-input_search", otherProps.className)} 
				value={value}
				onChange={onChangeHandler}
				disabled={disabled}
				type="text"
				{...otherProps}
			/>
			<button 
				onClick={onResetValue} 
				className={classNames({"rdc_hidden": !value	})}
			>
				<svg width="16" height="16" viewBox="0 0 24 24" fill="inherit" xmlns="http://www.w3.org/2000/svg">
					<path d="M20.1345 5.71859C20.6156 5.21508 20.6066 4.41946 20.1141 3.92699C19.6056 3.41846 18.7783 3.42785 18.2814 3.94778L12.3189 10.1871L5.71865 3.86731C5.21524 3.38529 4.41892 3.39393 3.9261 3.88676C3.41791 4.39495 3.42688 5.2216 3.94598 5.71864L10.5061 12L4.22535 18.2807C3.72474 18.7813 3.72474 19.593 4.22534 20.0936C4.72595 20.5942 5.5376 20.5942 6.0382 20.0936L12.3189 13.8129L18.5864 20.0804C19.0794 20.5733 19.8898 20.5343 20.3332 19.9963C20.7136 19.5347 20.6889 18.8615 20.2756 18.4291L14.1318 12L20.1345 5.71859Z" fill="inherit"></path>
				</svg>
			</button>
		</div>
	);
}
