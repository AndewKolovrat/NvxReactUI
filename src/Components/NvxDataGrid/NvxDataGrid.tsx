import React, {useRef, useState, useLayoutEffect, useMemo} from 'react';
import {VariableSizeList, VariableSizeGrid} from 'react-window';
import scrollbarSize from 'dom-helpers/scrollbarSize';
import { INvxDataGridProps } from '.';
import "./NvxDataGrid.scss";

const getText = ( value: any ) => String( value === undefined ? '' : value);

const renderColumnHeader = ( params: any ) => {
	const { index, style, data: {columns, render} } = params;
	if ( !!render )
		return render({columnIndex: index, style, className: "rdc_table_cell" });
	else 
		return ( 
			<div className='rdc_table_cell' style={style}>
				{columns[index].label || columns[index].id || ''}
			</div>
		);
};

const renderRowHeader = (params: any) => {
	const { index, style, data: { render } } = params;
	if ( !! render )
		return render({ rowIndex: index, style, className: "rdc_table_cell" });
	else 
		return ( <div className='rdc_table_cell' style={style}>{index + 1}</div> );
};

const renderCell =  (params: any) => {
	const { columnIndex, rowIndex, style, 
		data: {recordset, footerIndex, width, columns, Footer, render} } = params;
	
	if ( footerIndex === rowIndex ) {
		if ( columnIndex === 0 ) {
	  		return ( 
				<div className='rdc_table_cell' style={{...style, width}}>
					<Footer />
				</div>
	  		);
		}
		return null;
  	}
  
	if ( !!render ) {
		return render({ rowIndex, columnIndex, style, className: "rdc_table_cell" });
	} 
	else {
		const record = recordset[rowIndex];
		const value = ( record || {} )[columns[columnIndex].id];
		const newStyle = { ...style, overflow: 'hidden', textOverflow: 'ellipsis' };
		return <div className='rdc_table_cell' style={newStyle}>{getText(value)}</div>;
	}
};

const calcColumnSize = (params: any) => {
	const { value, column, lineHeight, columnHorizontalPadding, columnVerticalPadding, textContext } = params;
	let columnHeight = column.height;
	let columnWidth = column.width;
	if ( columnHeight && columnWidth ) {
		return [columnHeight, columnWidth];
	}
	if ( !textContext ) {
		return [0, 0];
	}
	const text = getText(value);
	const label = !columnWidth ? column.label || column.id : '';
	const metrics = textContext.measureText(text.length > label.length ? text : label );
	const valueWidth = metrics.width;

	if ( typeof value !== 'string' ) {
		return [
			lineHeight + columnVerticalPadding,
			column.width || (columnWidth || valueWidth) + columnHorizontalPadding
		];
	}
	if ( !columnWidth ) {
		const words = value.split(' ').length;
		columnWidth = words > 5 /* A sentence?  */ ? Math.round(valueWidth / 2) : valueWidth;
	}
	if ( columnWidth >= valueWidth + columnVerticalPadding ) {
		return [
			lineHeight + columnVerticalPadding,
			(column.width || valueWidth) + columnHorizontalPadding
		];
	}
	const lines = Math.ceil(valueWidth / columnWidth);
	columnHeight = lines * lineHeight;
	if ( column.maxHeight && columnHeight > column.maxHeight ) {
		return [
			column.maxHeight,
			(column.width || columnWidth) + columnHorizontalPadding
		];
	}
	return [
		columnHeight + columnVerticalPadding,
		(column.width || columnWidth) + columnHorizontalPadding
	];
};

export const NvxDataGrid: React.FC<INvxDataGridProps> = ( props ) => {

	let { displayIndex = false, minColumnWidth = 20, height, width, recordset, footerRenderer: Footer, columns, columnHeaderHeight, columnHeaderRenderer, cellRenderer, rowHeaderRenderer, rowHeaderWidth = 20,
		columnHeaderProps, rowHeaderProps, bodyProps, maxHeight = 5000, gridRef, scrollToTopOnNewRecordset, lineHeight, style, columnHorizontalPadding = 0, columnVerticalPadding = 0,
		verticalPadding = 0, ...rest } = props;

  	const [font, setFont] = useState(0);
  	const [textContext, setTextContex] = useState<CanvasRenderingContext2D | null>(null);

	useLayoutEffect(() => {
		const canvas = document.createElement('canvas')
		const context = canvas.getContext('2d')
		if (!!context) {
			context.font = font.toString();
			setTextContex(context);
		}
  	}, [font, columns]);

	if (!lineHeight && textContext) {
		const fontSize = parseFloat(textContext.font);
		lineHeight = fontSize + fontSize / 2;
	}
	if (!columnHeaderHeight) {
		if (lineHeight) {
			columnHeaderHeight = lineHeight;
		} 
		else {
			columnHeaderHeight = 0;
		}
	}

	const [rowHeights, columnWidths, totalHeight] = useMemo(() => {
		const rowHeights: any[] = []
		const columnWidths: any[] = []
		let totalHeight = 0
		const calcColumnsSize = ( record: any ) => {
			let recordRowHeight = 0
			let i = 0
			for (const column of columns) {
				const value = record[column.id];
				const [columnHeight, columnWidth] = calcColumnSize({value,column,lineHeight,columnHorizontalPadding,columnVerticalPadding,textContext});
				if (columnHeight > recordRowHeight) {
					recordRowHeight = columnHeight;
				}
				if (!columnWidths[i] || columnWidth > columnWidths[i]) {
					columnWidths[i] = columnWidth;
				}
				i++;
			}
			rowHeights.push(recordRowHeight);
			totalHeight += recordRowHeight;
		}
		if (recordset.length) {
			recordset.forEach(calcColumnsSize)
		} 
		else {
			calcColumnsSize({})
		}
		return [rowHeights, columnWidths, totalHeight]
	}, [recordset,columns,lineHeight,columnHorizontalPadding,columnVerticalPadding,textContext]);

  	const getRowHeight = (i: number) => rowHeights[i] || 0;
  	const mayBeRef = useRef(null);
	if (!gridRef) {
		gridRef = mayBeRef;
	}
	const innerRef = useRef(null);
	const headerRef = useRef(null);
	const rowHeaderRef = useRef(null);

	const onScroll = (params: any) => {
		const {scrollLeft, scrollTop} = params;
		if ( !!headerRef.current )
			(headerRef.current as any).scrollTo(scrollLeft);
		if (rowHeaderRef.current) {
			(rowHeaderRef.current as any).scrollTo(scrollTop);
		}
	}

	useLayoutEffect(() => {
		if (scrollToTopOnNewRecordset) {
			gridRef.current.scrollTo({scrollLeft: 0, scrollTop: 0});
		}
		gridRef.current.resetAfterRowIndex(0)
		if (rowHeaderRef.current) {
			(rowHeaderRef.current as any).resetAfterIndex(0);
		}
	}, [recordset, rowHeights, columnWidths, scrollToTopOnNewRecordset, gridRef]);

	useLayoutEffect(() => {
		if (innerRef.current)
			setFont(
				Number(window.getComputedStyle(innerRef.current, null).getPropertyValue('font'))
			);
	}, [style, props.className]);

	const footerIndex = Footer ? recordset.length : -1;
	const rowCount = recordset.length + (Footer ? 1 : 0);
	const gridWidth = width - rowHeaderWidth;
	const columnsWidth = columnWidths.reduce((w, width) => w + width, 0);
	let widthIsNotEnough = gridWidth < columnsWidth;
	let requiredHeight = columnHeaderHeight + totalHeight;
	
	if (widthIsNotEnough) {
		requiredHeight += scrollbarSize();
	}
	let heightIsNotEnough;
	if (height === undefined) {
		height = requiredHeight + verticalPadding;
	} 
	else {
		heightIsNotEnough = requiredHeight > height;
	}
	if (height > maxHeight) {
		height = maxHeight;
		heightIsNotEnough = true;
		if (gridWidth < columnsWidth + scrollbarSize()) {
			widthIsNotEnough = true;
		}
	}

	useLayoutEffect(() => {
		if ( !!headerRef.current ) {
			(headerRef.current as any).resetAfterIndex(0);
			gridRef.current.resetAfterColumnIndex(0);
		}
	}, [columns, rowHeights, columnWidths, gridRef]);

	const getColumnWidth = (i: number) => columnWidths[i] || 0;
	const headerMarginRight = heightIsNotEnough ? scrollbarSize() : 0;
	const columnHeaderMarginBottom = widthIsNotEnough ? scrollbarSize() : 0;
	
	return (
		<div {...rest} style={{...(style || {}), width, position: 'relative', height}} >
			<div style={{position: 'absolute', top: 0, left: rowHeaderWidth}}>
				<VariableSizeList
					ref={headerRef}
					layout="horizontal"
					height={columnHeaderHeight}
					width={gridWidth - headerMarginRight}
					itemCount={columns.length}
					itemSize={getColumnWidth}
					{...columnHeaderProps}
					itemData={{columns, render: columnHeaderRenderer}}
					style={{
						overflow: 'hidden',
						...((columnHeaderProps && columnHeaderProps.style) || {})
					}}
				>
					{renderColumnHeader}
				</VariableSizeList>
			</div>
			{
				displayIndex &&
				<div style={{position: 'absolute', left: 0, top: columnHeaderHeight}}>
					<VariableSizeList
						ref={rowHeaderRef}
						height={height - columnHeaderHeight - columnHeaderMarginBottom}
						width={rowHeaderWidth}
						itemCount={recordset.length}
						itemSize={getRowHeight}
						{...rowHeaderProps}
						itemData={{render: rowHeaderRenderer}}
						style={{
							overflow: 'hidden',
							...((rowHeaderProps && rowHeaderProps.style) || {})
						}}
					>
						{renderRowHeader}
					</VariableSizeList>
				</div>
			}
			<div style={{ position: 'absolute', left: rowHeaderWidth,	top: columnHeaderHeight	}}>
				<VariableSizeGrid
					ref={gridRef}
					innerRef={innerRef}
					height={height - columnHeaderHeight}
					width={gridWidth}
					rowCount={rowCount}
					rowHeight={getRowHeight}
					columnCount={columns.length}
					columnWidth={getColumnWidth}
					onScroll={onScroll}
					itemData={{
						recordset,
						footerIndex,
						width: width - headerMarginRight,
						columns,
						Footer,
						render: cellRenderer
					}}
					{...bodyProps}
				>
					{renderCell}
				</VariableSizeGrid>
			</div>
		</div>
	);
};
