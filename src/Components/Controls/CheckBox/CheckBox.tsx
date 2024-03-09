import React from 'react';
import classNames from 'classnames';
import './checkbox.scss';

interface CheckBoxProps {
	name: string;
	disabled?: boolean;
	value?: boolean;
	label?: string;
	isBlock?: boolean;
	children?: React.ReactNode; 
	setValue?: React.Dispatch<React.SetStateAction<boolean>>
};

const CheckBox: React.FC<CheckBoxProps> = (props) => {
	const { name, disabled = false, setValue, value, label, children, isBlock = false } = props;
	const id = "rdcc_" + name;
	
	const renderInput = () => (
		<input 
			id={id}
			name={name} 
			className="rdcc" 
			type="checkbox" 
			checked={ value }
			onChange={ e => !!setValue && setValue(e.target.checked) }   
			disabled={disabled} 
		/>
	);

	const renderLabel = () => {
		if ( !!children )
			return <label htmlFor={id} className='rdc-ctrl-checkbox__label'>{children}</label>;
		else if ( !!label )
			return <label htmlFor={id} className='rdc-ctrl-checkbox__label'>{label}</label>;
		else 
			return null;
	};

	if ( !!children || !!label || isBlock ) 
		return (
			<div className={classNames("rdc-ctrl-checkbox", { "disabled": disabled, "rdcc_block": isBlock } )} >
				{renderInput()}
				{renderLabel()}
			</div>
		);
	else 
		return renderInput();
};

export default CheckBox;
