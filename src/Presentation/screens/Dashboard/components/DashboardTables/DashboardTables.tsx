import React, { memo } from 'react';
import { DataGrid, GridEventListener } from '@mui/x-data-grid';
import { Typography } from '@mui/material';

import { FormType } from 'Data/Repository/Models/FormType';
import { DashboardTable } from './style';

export interface DashboardTablesProps {
    FormData: FormType;
    StorageData: any[] | undefined;
    setDetailFormModalOpen: (state: boolean) => void;
    setReadingFormId: (formId: string) => void;
}

const DashboardTables = ({
    FormData,
    StorageData,
    setDetailFormModalOpen,
    setReadingFormId
}: DashboardTablesProps) => {
    const handleRowClick: GridEventListener<'rowClick'> = (params) => {
        setReadingFormId(params.row.id);
        setDetailFormModalOpen(true);
    };

    //test borrar
    const test = {
        columns: [
            {
                field: 'FormId',
                headerName: 'Formulario',
                width: 200
            },
            {
                field: 'select-1',
                headerName: 'Corte de Cabello',
                width: 200
            },
            {
                field: 'select-2',
                headerName: 'Peluqyero',
                width: 200
            }
        ],
        rows: [
            {
                FormId: 1,
                'select-1': 'sdfsdf',
                'select-2': 'sdfsdf',
                id: 1
            }
        ]
    };

    const test2 = [{ id: 1, FormId: 1, field: 'FormId', headerName: 'Formulario' }];
    /* Filtra columns y rows, de acuerdo a la data del form actual */
    /*const Columns = FormData.formObject?.form.map((item) => {
        return { field: item.label, width: 300, name: item.name };
    });*/

    const FilteredForms = StorageData?.filter((item) => item.formId === FormData.id);

    /*if (FilteredForms!.length > 0) {
        StorageData?.map((field) => {
            JoinedRows.push({ ...field[0].rows });
        });
    }*/

    /* Ordenar Rows de acuerdo a formato DataGrid*/
    /* if (RowsFiltered!.length > 0) {
        RowsFiltered!.map((filterRow) => {
            for (const atributeRow in filterRow) {
                for (const column of Columns) {
                    if (column.name === atributeRow)
                        filterRow[column.field] = filterRow[atributeRow];
                }
            }
        });
    }*/

    return (
        <>
            {FilteredForms!.length > 0 ? (
                <DashboardTable>
                    <Typography variant="h6" mb={'3%'}>
                        {FormData.name}
                    </Typography>
                    <DataGrid
                        rows={FilteredForms![0].Rows}
                        columns={FilteredForms![0].Columns[0]}
                        onCellClick={handleRowClick}
                    />
                </DashboardTable>
            ) : (
                <></>
            )}
        </>
    );
};

export default memo(DashboardTables);
