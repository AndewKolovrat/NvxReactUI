import React from "react";
import { SearchInput } from "./SearchInput";

export interface ISearchInputProps extends React.HTMLProps<HTMLInputElement> {
	onSearch: ( text: string ) => void;
	debounceDelay?: number;
};

export default SearchInput;
