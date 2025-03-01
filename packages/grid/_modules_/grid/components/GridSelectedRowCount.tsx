import * as React from 'react';
import { classnames } from '../utils/classnames';
import { GridApiContext } from './GridApiContext';

interface SelectedRowCountProps {
  selectedRowCount: number;
}

type GridSelectedRowCountProps = React.HTMLAttributes<HTMLDivElement> & SelectedRowCountProps;

export const GridSelectedRowCount = React.forwardRef<HTMLDivElement, GridSelectedRowCountProps>(
  function GridSelectedRowCount(props, ref) {
    const { className, selectedRowCount, ...other } = props;
    const apiRef = React.useContext(GridApiContext);
    const rowSelectedText = apiRef!.current.getLocaleText('footerRowSelected')(selectedRowCount);

    return (
      <div ref={ref} className={classnames('MuiDataGrid-selectedRowCount', className)} {...other}>
        {rowSelectedText}
      </div>
    );
  },
);
