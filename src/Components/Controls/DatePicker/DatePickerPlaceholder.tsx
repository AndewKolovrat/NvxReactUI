import { ClearBtn, TextHint } from "src/Components";
import DateFormater from "src/Utils/DateFormater";
import { ReactComponent as CalendarIcon } from './Assets/calendar.svg';
import '../Placeholder.scss';

interface IDataPickerPlaceHolderProps {
	isBetween?: boolean;
	value: Date | null | [Date, Date];
	onClear: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const DataPickerPlaceHolder: React.FC<IDataPickerPlaceHolderProps> = ( { isBetween, value, onClear } ) => {
	
	let val1, val2;
	if ( isBetween && Array.isArray(value) ) {
		val1 = DateFormater.toShortString( value[0] );
		val2 = DateFormater.toShortString( value[1] );
	} 
	else 
		val1 = !!value ? DateFormater.toShortString(value as Date) : '';

	const onClearHandler = ( e: any ) => {
		e.stopPropagation();
		e.preventDefault();
		onClear(e);
	};

	return (
		<div className="rdcc__placeholder">
			<CalendarIcon className={"rdcc__placeholder__ico"} />
			<TextHint className="rdcc__placeholder__content" onParent={false}>
				{ val1 + ( !!val2 && isBetween ? " - " + val2 : "") }
			</TextHint>
			{
				( !!val1 || !!val2 ) &&
				<ClearBtn className="rdcc__placeholder__clear" onClick={onClearHandler} />
			}
		</div>
	);
};
