import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';

import { NavBar } from '../../components';
import { ButtonSelector, CreateFormModal } from './components';
import { ContainerDashboard, TitleContainer } from './style';
import { Form } from 'Data/Repository/Models/Form';

const Dashboard = () => {
    const [formSelected, setFormSelected] = useState<Form>();
    const [formNameSelected, setFormNameSelected] = useState<string>();
    const [CreateFormModalOpen, setCreateFormModalOpen] = useState<boolean>(false);

    return (
        <>
            {/* BARRA SUPERIOR */}
            <NavBar />
            <ContainerDashboard>
                <TitleContainer>
                    <Typography id="modal-modal-title" variant="h4" color={'gray'}>
                        Formularios enviados
                    </Typography>
                    <ButtonSelector
                        setModalOpen={setCreateFormModalOpen}
                        setFormSelected={setFormSelected}
                        setFormNameSelected={setFormNameSelected}
                    />
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
            {/* MODALS */}
            {CreateFormModalOpen && (
                <CreateFormModal
                    modalOpen={CreateFormModalOpen}
                    setModalOpen={setCreateFormModalOpen}
                    formSelected={formSelected}
                    formNameSelected={formNameSelected}
                />
            )}
        </>
    );
};

export default Dashboard;
