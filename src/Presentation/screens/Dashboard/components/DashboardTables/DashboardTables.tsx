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
    const FilteredForms = StorageData?.filter((item) => item.formId === FormData.id);

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
