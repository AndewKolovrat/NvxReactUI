
import './checkbox.scss';


interface CheckBoxProps {
	name: string;
	disabled?: boolean;
	value?: boolean;
	setValue?: React.Dispatch<React.SetStateAction<boolean>>
};

const CheckBox: React.FC<CheckBoxProps> = (props) => {
	const { name, disabled = false, setValue, value } = props;

	return (
		<input 
			name={name} 
			className="rdcc" 
			type="checkbox" 
			checked={ value }
			onChange={ e => !!setValue && setValue(e.target.checked) }   
			disabled={disabled} 
		/>
	);
};

export default CheckBox;
