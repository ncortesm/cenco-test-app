import React, { memo } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';

import { FormType } from 'Data/Repository/Models/FormType';
import { DashboardTable } from './style';

export interface DashboardTablesProps {
    FormData: FormType;
    dataForm: any[] | undefined;
}

const DashboardTables = ({ FormData, dataForm }: DashboardTablesProps) => {
    /* Filtra columns y rows, de acuerdo a la data del form actual */
    const Columns = FormData.formObject?.form.map((item) => {
        return { field: item.label, width: 300, name: item.name };
    });
    const RowsFiltered = dataForm?.filter((item) => item.formId === FormData.id);

    /* Ordenar Rows de acuerdo a formato DataGrid*/
    if (RowsFiltered!.length > 0) {
        RowsFiltered!.map((filterRow) => {
            for (const atributeRow in filterRow) {
                for (const column of Columns) {
                    if (column.name === atributeRow)
                        filterRow[column.field] = filterRow[atributeRow];
                }
            }
        });
    }

    return (
        <>
            {RowsFiltered!.length > 0 ? (
                <DashboardTable>
                    <Typography variant="h6" mb={'3%'}>
                        {FormData.name}
                    </Typography>
                    <DataGrid rows={RowsFiltered!} columns={Columns} />
                </DashboardTable>
            ) : (
                <></>
            )}
        </>
    );
};

export default memo(DashboardTables);
