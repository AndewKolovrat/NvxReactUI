import "./style.scss";

interface IInputRadioProps {
    name: string;
    disabled?: boolean;
    value?: boolean;
    setValue?: React.Dispatch<React.SetStateAction<boolean>>
};

const InputRadio: React.FC<IInputRadioProps> = (props) => {
    const { name, disabled = false, setValue, value } = props;

    return (
        <input 
            name={name} 
            className="rd-radio" 
            type="radio" 
            checked={ value }
            onChange={ (e:any) => !!setValue && setValue(e.target.value) }   
            disabled={disabled} 
        />
    );
};

export default InputRadio;