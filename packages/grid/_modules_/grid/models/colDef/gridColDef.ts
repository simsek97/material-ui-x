import * as React from 'react';
import { GridCellValue } from '../gridCell';
import { GridCellClassNamePropType, GridCellClassRules } from '../gridCellClass';
import { GridFilterOperator } from '../gridFilterOperator';
import {
  GridCellParams,
  GridValueFormatterParams,
  GridValueGetterParams,
} from '../params/gridCellParams';
import { GridColumnHeaderParams } from '../params/gridColumnHeaderParams';
import { GridComparatorFn } from '../gridSortModel';
import { GridColType, GridNativeColTypes } from './gridColType';

/**
 * Alignment used in position elements in Cells.
 */
export type GridAlignment = 'left' | 'right' | 'center';

/**
 * Column Definition interface.
 */
export interface GridColDef {
  /**
   * The column identifier. It's used to map with [[GridRowData]] values.
   */
  field: string;
  /**
   * The title of the column rendered in the column header cell.
   */
  headerName?: string;
  /**
   * The description of the column rendered as tooltip if the column header name is not fully displayed.
   */
  description?: string;
  /**
   * Set the width of the column.
   * @default 100
   */
  width?: number;
  /**
   * If set, it indicates that a column has fluid width. Range [0, ∞].
   */
  flex?: number;
  /**
   * If `true`, hide the column.
   * @default false;
   */
  hide?: boolean;
  /**
   * If `true`, the column is sortable.
   * @default true
   */
  sortable?: boolean;
  /**
   * If `true`, the column is resizable.
   * @default true
   */
  resizable?: boolean;
  /**
   * If `true`, the cells of the column are editable.
   * @default true
   */
  editable?: boolean;
  /**
   * A comparator function used to sort rows.
   */
  sortComparator?: GridComparatorFn;
  /**
   * Type allows to merge this object with a default definition [[GridColDef]].
   * @default string
   */
  type?: GridColType;
  /**
   * Allows to align the column values in cells.
   */
  align?: GridAlignment;
  /**
   * Function that allows to get a specific data instead of field to render in the cell.
   * @param params
   */
  valueGetter?: (params: GridValueGetterParams) => GridCellValue;
  /**
   * Function that allows to apply a formatter before rendering its value.
   * @param params
   */
  valueFormatter?: (params: GridValueFormatterParams) => GridCellValue;
  /**
   * Class name that will be added in cells for that column.
   */
  cellClassName?: GridCellClassNamePropType;
  /**
   * Set of CSS class rules that will be dynamically applied on cells.
   */
  cellClassRules?: GridCellClassRules;
  /**
   * Allows to override the component rendered as cell for this column.
   * @param params
   */
  renderCell?: (params: GridCellParams) => React.ReactElement;
  /**
   * Allows to override the component rendered in edit cell mode for this column.
   * @param params
   */
  renderEditCell?: (params: GridCellParams) => React.ReactElement;
  /**
   * Class name that will be added in the column header cell.
   */
  headerClassName?: string | string[];
  /**
   * Allows to render a component in the column header cell.
   * @param params
   */
  renderHeader?: (params: GridColumnHeaderParams) => React.ReactElement;
  /**
   * Header cell element alignment.
   */
  headerAlign?: GridAlignment;
  /**
   * Toggle the visibility of the sort icons.
   */
  hideSortIcons?: boolean;
  /**
   * Allows to disable the click event in cells.
   */
  disableClickEventBubbling?: boolean;
  /**
   * If `true`, the column menu is disabled for this column.
   */
  disableColumnMenu?: boolean;
  /**
   * If `true`, the column is filterable.
   * @default true
   */
  filterable?: boolean;
  /**
   * Allows setting the filter operators for this column.
   */
  filterOperators?: GridFilterOperator[];
}

export interface GridColumnProp extends Omit<GridColDef, 'filterOperators'> {
  filterOperators?: GridFilterOperator[] | string;
}

export type GridColumns = GridColDef[];
export type GridColTypeDef = Omit<GridColDef, 'field'> & { extendType?: GridNativeColTypes };

/**
 * Meta Info about columns.
 */
export interface GridColumnsMeta {
  totalWidth: number;
  positions: number[];
}

export type GridColumnLookup = { [field: string]: GridColDef };

export interface GridInternalColumns {
  all: string[];
  lookup: GridColumnLookup;
}

export const getInitialGridColumnsState = (): GridInternalColumns => ({
  all: [],
  lookup: {},
});
