import React, { memo } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';

import { FormType } from 'Data/Repository/Models/FormType';
import { DashboardTable } from './style';

export interface DashboardTablesProps {
    FormData: FormType;
}

const DashboardTables = ({ FormData }: DashboardTablesProps) => {
    const Columns = FormData.form?.form.map;

    return (
        <DashboardTable>
            <Typography variant="h6" mb={'3%'}>
                {FormData.name}
            </Typography>
            <DataGrid
                rows={[
                    { id: 1, col1: 'Hello', col2: 'World' },
                    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
                    { id: 3, col1: 'MUI', col2: 'is Amazing' },
                    { id: 4, col1: 'MUI', col2: 'is Amazing' }
                ]}
                columns={[{ field: 'col1' }, { field: 'col2' }]}
            />
        </DashboardTable>
    );
};

export default memo(DashboardTables);
