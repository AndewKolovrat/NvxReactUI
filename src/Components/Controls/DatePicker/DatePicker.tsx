import { useEffect, useState } from 'react';
import { IconButton, ErrorMessage, ClearBtn } from "src/Components";
import MaskInput from "../MaskInput/MaskInput";
import SimpleSelect, { EnumsType } from "../SimpleSelect/SimpleSelect";
import classNames from 'classnames';
import DateFormater from "src/Utils/DateFormater";
import { ReactComponent as Shevron } from './Assets/chevron-left.svg';
import styles from './datapicker.module.scss'
import "./DatePicker.scss";
import { DataPickerPlaceHolder } from './DatePickerPlaceholder';

interface DatePickerProps {
	isPlaceHolder?: boolean;
	value: Date | null | [Date, Date];
	setValue: ( value: any ) => void;
	onClear: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	onClose?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	headless?: boolean;
	isBetween?: boolean;
	withTime?: boolean;
	disabled?: boolean;

	minDate?: Date;
	maxDate?: Date;
};

const DatePicker: React.FC<DatePickerProps> = (props) => {

	const { disabled = false, value, setValue, onClear, onClose, headless = false, isBetween = false, isPlaceHolder = false,
		minDate = new Date(OLD_YEAR, 0, 1),
 		maxDate = new Date(MAX_YEAR, 11, 31)
	} = props;

	// Текущая Дата ( ЮТС )
	const [ now ] = useState<Date>( () => {
		const tmp = new Date( Date.now() );
		return new Date( tmp.getFullYear(), tmp.getMonth(), tmp.getDate(), 0,0,0,0 );
	});
	// Месяц
	const [ month, setMonth ] = useState<number>(now.getMonth());
	// Год
	const [ year, setYear ] = useState<number>(now.getFullYear());
	// Массив с датами на текущий месяц + граничные ( 42 значения )
	const [ calendar, setCalendar ] = useState<Date[]>([])
	// Флаг установки начального значения
	const [ changeStart, setChangeStart ] = useState<boolean>(true);
	// Массив с доступными для выбора годами
	const [ yearList, setYearList ] = useState<Array<number>>([]);

	const [ errorMsg ] = useState<string>('');

	/** При монтировании компонента, вычисляем список доступных годов  */
	useEffect(() => {
		if ( isPlaceHolder ) return;
		const years = Array(maxDate.getFullYear() - minDate.getFullYear() + 1)
			.fill(0)
			.map((_, index) => (maxDate.getFullYear() - index));
		setYearList(years);
	// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if ( Array.isArray(value) ) {
			const val = [];
			val[0] = parseDate(value[0]);
			val[1] = parseDate(value[1]);
			setValue(val);
		}
		else {
			setValue( parseDate(value) );
		}
	// eslint-disable-next-line
	}, []);

	/** Получаем текущие значения 
	 * и устанавливаем на основе флага установки начального значения, 
	 * месяц и год календаря  
	 */
	useEffect(() => {
		if ( isPlaceHolder ) return;
		if ( Array.isArray(value) ) {
			setCurrentParams( changeStart ? parseDate(value[0]) : parseDate(value[1]) );
		}
		else {
			setCurrentParams( parseDate(value) );
		}
	// eslint-disable-next-line
	}, [value, changeStart]);

	/** Генерируем массив с днями  */
	useEffect(() => {
		if ( isPlaceHolder ) return;
		// День недели первого дня, установленного месяца
		const firstDayThisMonth = new Date(year, month, 1).getDay();
		const temp = [];
		for (let i = 0; i < 42; i++) {
			// Онотоле Отаке !!!
			// Определяем отступ (в днях) для отображения соседних дат
			const day = getShiftDayOfFirstDayThisMonth(firstDayThisMonth);
			temp.push(new Date(year, month, i - day, 0, 0, 0, 0 ));
		}
		setCalendar(temp);
	}, [ isPlaceHolder, month, year ] );

	const setCurrentParams = ( date: Date|null ) => {
		const cur = !!date ? date : now;
		setMonth( cur.getMonth() );
		setYear( cur.getFullYear() );
	};

	/** Устанавливает значение по указанному индексу  */
	const onChangeValueByInput = ( val: string, index = 0 ) => {
		setValue( (prev: any) => {
			const newValue = parseDate(val);
			if ( isBetween ) { 
				if ( index === 1 && changeStart ) 
					setChangeStart(false); 
				return !index ? [ newValue, prev[1] ] : [ prev[0], newValue ];
			}
			return newValue;
		});
	};

	/** Возвращает значение по индексу в случае использовании значения в диапазоне */
	const getValue = ( index: number = 0 ): Date|null => {
		if ( isBetween && !!value ) {
			const val = value as Array<Date>;
			return !!val[index] ? parseDate(val[index]) : null;
		}
		else if ( !!value )
			return parseDate(value);
		return null;
	};

	/** Функция устанавливает дату  */
	const selectDate = (day: Date) => {
		setMonth(day.getMonth());
		setYear(day.getFullYear());
		setChangeStart(!changeStart);
		setValue( (prev: any) => {
			if ( isBetween ) { 
				const newState = changeStart ? [ day, prev?.[1] ?? null ] :	[ prev?.[0] ?? null, day ];
				return newState;
			}
			return day;
		});
	};

	/** Слайд месяцев  */
	const changeMonth = (inc: number) => {
		let curMonth = month + inc;
		let curYear = year;
	
		if (curMonth === 12) {
			curMonth = 0;
			curYear++;
		} 
		else if (curMonth === -1) {
			curMonth = 11;
			curYear--;
		}
	
		setMonth(curMonth);
		setYear(curYear);
	};

	/** Рендер шапки  */
	const renderHead = () => {
		if ( !!headless )
			return null;
		return (
			<div className="calendar__header">
				<h4>Календарь</h4>
				<ClearBtn isClose onClick={onClose} />
			</div>
		);
	};

	/** Рендер инпутов  */
	const renderPlaceHolder = () => (
		<div className="calendar__placeholder">
			<div className="wrapper">
				<MaskInput
					readOnly
					isClearBtn
					disabled={disabled}
					mask="99.99.9999" 
					placeholder="10.12.1988" 
					setValue={onChangeValueByInput}
					onClick={ () => setChangeStart(true) }
					value={ DateFormater.toShortString( getValue() ) } 
					className={ classNames("calendar__placeholder-input", { active: changeStart })} 
				/>
				{
					isBetween && 
					<>
						{"-"}
						<MaskInput 
							readOnly
							isClearBtn
							disabled={disabled}
							mask="99.99.9999" 
							placeholder="10.12.1988" 
							onClick={ () => setChangeStart(false) }
							value={DateFormater.toShortString( getValue(1) )}
							setValue={ (e: string) => onChangeValueByInput(e, 1)}
							className={ classNames("calendar__placeholder-input", { active: !changeStart })} 
						/>
					</>
				}
			</div>
			{ !!errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage> }
		</div>
	);

	/** Рендер контролов  */
	const renderControls = () => (
		<div className="calendar__controls">
			<SimpleSelect options={MONTH_NAMES} value={month} setValue={ (e) => setMonth(+e) } placeholder="Месяц"/>
			<SimpleSelect options={yearList} value={year} setValue={ (e) => setYear(+e) } />
			<div className="calendar__controls-navbtns">
				<IconButton outline disabled={minDate.getFullYear() === year && minDate.getMonth() === month} onClick={() => changeMonth(-1)}>
					<Shevron width={32} />
				</IconButton>
				<IconButton outline disabled={maxDate.getFullYear() === year && maxDate.getMonth() === month} onClick={() => changeMonth(+1)}>
					<Shevron width={32} />
				</IconButton>
			</div>
		</div>
	);

	/** Получение списка классов для дня ( Текущая дата, установленные даты, выходные и дни выходящий из текущего месяца ) */
	const getClassesDay = ( day: Date ) => {
		const isInner = day.getMonth() === month;
		const curDate = day.getTime();
		const val0 = getValue()?.getTime() ?? 0;
		const val1 = getValue(1)?.getTime() ?? 0;
		return [ styles.date,  
			isInner ? '' : styles.outside,
			curDate === now.getTime() ? styles.current : '',
			curDate === val0  || curDate === val1 ? styles.changed : '',
			isInner && [ 6, 0 ].includes( day.getDay() ) ? styles.weekend : '' 
		].join(' ');
	};

	/** Возвращает массив с именами классов для обвертки над днем ( для подсветки дней находящихся в диапазоне ) */
	const getDayWrapperClasses = (day: Date) => {
		const curDate = day.getTime();
		const val0 = getValue()?.getTime();
		const val1 = getValue(1)?.getTime();
		return [ 
			( !!val0 && !!val1 && ( curDate > val0 && curDate < val1 ) ) ? styles.inBetween : '',
		].join(' ');
	};

	/** Проверка на доступность дня */
	const isDisabledDay = ( day: Date ) => {
		const curDate = day.getTime();
		if ( curDate < minDate.getTime() || curDate > maxDate.getTime() )
			return true;

		const startValue = getValue()?.getTime() ?? 0;
		const endValue = getValue(1)?.getTime() ?? 0;

		if ( !changeStart ) {
			return !!startValue && curDate < startValue;
		}
		else if ( !!endValue )
			return endValue < curDate;

		return false;
	};

	/** Отрисовка дня */
	const renderDay = ( day: Date, index: number ) => (
		<div className={getDayWrapperClasses(day)} key={index}>
			<button 
				className={getClassesDay(day)} 
				onClick={() => selectDate(day)}
				disabled={isDisabledDay(day) || disabled}
			>
				{day.getDate()}		  	
			</button>
		</div>
	);

	/** Отрисовка тела календаря  */
	const renderBody = () => (
		<div className={styles.body}>
			<div className={styles.days}>
				{DAY_NAMES.map( (day) => (<div className={styles.day} key={day}>{day}</div>))}
			</div>
			<div className={styles.calendar}>
			{ calendar.map(renderDay) }
		 	</div>
		</div>
	);

	if ( isPlaceHolder ) {
		return <DataPickerPlaceHolder isBetween={isBetween} value={value} onClear={onClear} />;
	}

	return (
		<div className="calendar">
			{renderHead()}
			{renderPlaceHolder()}
			{renderControls()}
			{renderBody()}
		</div>
	);
};

/**
 * 
 * @param firstDayThisMonth 
 * @returns 
 */
const getShiftDayOfFirstDayThisMonth = (firstDayThisMonth: number): number => firstDayThisMonth === 0 ? 5 : ( firstDayThisMonth - 2 );

/** Парсит дату из строки  */
const parseDate = ( value: any ) => {
	if ( !value )
		return null;
	const date = new Date( Date.parse(value) );
	date.setHours(0);
	return date;
};

/** Перечисление с месяцами */
const MONTH_NAMES: EnumsType = [
	{
		id: 0,
		title: 'Январь'
	},
	{
		id: 1,
		title: 'Февраль'
	},
	{
		id: 2,
		title: 'Март'
	},
	{
		id: 3,
		title: 'Апрель'
	},
	{
		id: 4,
		title: 'Май'
	},
	{
		id: 5,
		title: 'Июнь'
	},
	{
		id: 6,
		title: 'Июль'
	},
	{
		id: 7,
		title: 'Август'
	},
	{
		id: 8,
		title: 'Сентябрь'
	},
	{
		id: 9,
		title: 'Октябрь'
	},
	{
		id: 10,
		title: 'Ноябрь'
	},
	{
		id: 11,
		title: 'Декабрь'
	}
];
// Минимальный год
const OLD_YEAR = 1970;
// Максимальный год
const MAX_YEAR = new Date().getFullYear() + 5;

const DAY_NAMES = ['пн','вт','ср','чт','пт','сб','вс'];

export default DatePicker;
