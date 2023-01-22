import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';

import { NavBar } from '../../components';
import { ButtonSelector } from './components';
import { ContainerDashboard, TitleContainer } from './style';

const Dashboard = () => {
    return (
        <>
            {/* BARRA SUPERIOR */}
            <NavBar />
            <ContainerDashboard>
                <TitleContainer>
                    <Typography id="modal-modal-title" variant="h4" color={'gray'}>
                        Formularios enviados
                    </Typography>
                    <ButtonSelector />
                </TitleContainer>

                <div style={{ height: 300, width: '50%', marginTop: 10 }}>
                    <DataGrid
                        rows={[
                            { id: 1, col1: 'Hello', col2: 'World' },
                            { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
                            { id: 3, col1: 'MUI', col2: 'is Amazing' },
                            { id: 4, col1: 'MUI', col2: 'is Amazing' }
                        ]}
                        columns={[
                            { field: 'col1', headerName: 'Column 1', width: 150 },
                            { field: 'col2', headerName: 'Column 2', width: 200 }
                        ]}
                    />
                </div>
            </ContainerDashboard>
        </>
    );
};

export default Dashboard;
