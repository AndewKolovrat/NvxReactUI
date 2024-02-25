import { useCallback, useState, useEffect } from 'react';
import { RelationType } from 'Src/Components/DataGrid';
import { SelectModal } from "../";
import { EnumsType } from "../SelectModal/SelectModal";
import API from 'src/API';
import "./Relationfield.scss";

interface RelationFieldProps {
	name?: string;
	placeholder?: string;
	disabled?: boolean;
	searchEnable?: boolean;

	value?: string | Array<string>;
	setValue?: React.Dispatch<React.SetStateAction<string|Array<string>>>;
	setVisibleValue?: React.Dispatch<React.SetStateAction<string|Array<string>>>;

	minSearchLength?: number;
	onSearch?: ( tern: string ) => void;

	relation: RelationType;

	multiple?: boolean;
	defaultOpen?: boolean;
};

const RelationField: React.FC<RelationFieldProps> = (props) => {
	
	const { relation } = props;

	const [ isWait, setIsWait ] = useState<boolean>(false);
	const [ data, setData ] = useState<EnumsType>([]);

	const loadData = useCallback( ( search: string = "") => {
		setIsWait(true);
		API.getFilterValues(relation.url, search)
			.then( result => setData( prepareEnumData(result, relation) ) )
			.catch( (e: any) => {
				console.warn(e);
			})
			.finally( () => setIsWait(false) );
	 // eslint-disable-next-line
	}, [relation]);

	useEffect( () => loadData(), [loadData]);

	const onSearchHandler = ( text: string ) => {
		loadData(text);
	};

	const getTitle = ( id: string): string => {
		const item = data.find( i => typeof i !== "string" ? i.id === id : i === id ) || id;
		return typeof item === "string" ? item : item.title ?? item.id.toString();
	};

	const getVisibleValue = ( value: string|Array<string>): string => {
		if ( !value ) return "";
		if ( Array.isArray(value) ) {
			const tmp: Array<string> = [];
			value.forEach( valueItem => {
				tmp.push( getTitle(valueItem) );
			});
			return tmp.join(',');
		}
		return getTitle(value);
	};

	const setValueHandler = (value: string|Array<string>) => {
		if ( !!props.setValue )
			props.setValue(value);
		if ( !!props.setVisibleValue )
			props.setVisibleValue(getVisibleValue(value));
	};

	return (
		<SelectModal 
			{...props}
			setValue={setValueHandler}
			enums={data}
			isWait={isWait}
			onSearch={ relation.serverSideSearch ? onSearchHandler : undefined }
			searchEnable={relation.filterable}
			minSearchLength={3}
			placeholder='Введите минимум 3 символа'
		/>
	);
};

const prepareEnumData = ( data: any, relation: RelationType ): EnumsType => data.map( (item: any) => ({
	id: item[relation.valueKey],
	title: !!relation.titleKey ? item[relation.titleKey] : item[relation.valueKey]
}) );

export default RelationField;
