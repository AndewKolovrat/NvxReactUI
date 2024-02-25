import InputMask from 'react-input-mask';
import classNames from 'classnames';
import IconButton from 'src/Components/IconButton';
import { ReactComponent as ClearIcon } from './clearBtn.svg';
import './maskinput.scss';

interface MaskInputProps {
	value: string;
	setValue: Function;
	isRequired?: boolean;
	readOnly?: boolean;
	disabled?: boolean;
	mask?: string;
	className?: string;
	placeholder?: string;
	isClearBtn?: boolean
	onClick?: React.MouseEventHandler<HTMLInputElement>;
}

/**
 * Поле ввода с маской
 */
const MaskInput: React.FC<MaskInputProps> = (props) => {

	const { value, setValue, disabled = false, readOnly = false, mask= "", className, isClearBtn, placeholder, onClick } = props;

	const onChangeValueHandler = (e: any) => {
		e.persist();
		if ( !readOnly || e.target.value === '' )
			setValue(e.target.value);
	}

	return (
		<div style={{ position: "relative"}}>
			<InputMask
				mask={mask}
				readOnly={readOnly}
				maskChar='-'
				// alwaysShowMask 
				value={value || ''}
				className={ classNames('rdc_maskinput', className )}
				type='text'
				onChange={onChangeValueHandler}
				disabled={disabled}
				placeholder={placeholder}
				onClick={onClick}
			/> 
			{
				(!!isClearBtn && !!value) &&
				<IconButton 
					cssClass='rdc_maskinput__clear hint' 
					data-hint={"Очистить"} 
					outline
					onClick={(e) => {
						e.preventDefault();
						e.stopPropagation();
						setValue('');
					}}
				>
					<ClearIcon />
				</IconButton>
			}
		</div>
	);
}

export default MaskInput;