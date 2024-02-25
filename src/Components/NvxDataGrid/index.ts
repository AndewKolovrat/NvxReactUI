
import { NvxDataGrid } from './NvxDataGrid';

export interface INvxDataGridColumn {
    id: string;
    label?: string;
    height?: number;
    maxHeight?: number;
    width?: number;
    minWidth?: number;
};

export interface INvxDataGridProps {
    height?: number;
    maxHeight?: number;
    width: number;
    rowHeaderWidth?: number;
    lineHeight?: number;
    columnHorizontalPadding?: number;
    columnVerticalPadding?: number;
    verticalPadding?: number;
    columnHeaderHeight?: number;
    columnHeaderProps?: any;
    rowHeaderProps?: any;
    bodyProps?: any;
    gridRef?: any;
    style?: any;
    className?: string;

    minColumnWidth?: number;
    displayIndex?: boolean;
    scrollToTopOnNewRecordset?: boolean;

    columns: Array<INvxDataGridColumn>;
    recordset: Array<any>;

    footerRenderer?: React.FC;
    columnHeaderRenderer?: React.FC;
    cellRenderer?: React.FC;
    rowHeaderRenderer?: React.FC;
};

export default NvxDataGrid;
