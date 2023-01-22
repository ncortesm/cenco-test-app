import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

import { NavBar } from '../../components';
import { ButtonSelector, CreateFormModal } from './components';
import { ContainerDashboard, TitleContainer, BoxTables } from './style';
import { FormType } from 'Data/Repository/Models/FormType';
import { DashboardTables } from './components/DashboardTables';
import useViewModel from 'Presentation/ViewModel/GetFormsViewModel';

const Dashboard = () => {
    /* Obtiene forms desde viewmodel */
    const { forms, getForms } = useViewModel();
    const [formSelected, setFormSelected] = useState<FormType>();
    const [CreateFormModalOpen, setCreateFormModalOpen] = useState<boolean>(false);

    /* Obtener Forms Type */
    useEffect(() => {
        getForms();
    }, []);

    return (
        <>
            {/* BARRA SUPERIOR */}
            <NavBar />
            <ContainerDashboard>
                <TitleContainer>
                    <Typography variant="h4" color={'gray'}>
                        Formularios enviados
                    </Typography>
                    <ButtonSelector
                        setModalOpen={setCreateFormModalOpen}
                        setFormSelected={setFormSelected}
                        FormsType={forms!}
                    />
                </TitleContainer>
                {/* GRIDS */}
                <BoxTables>
                    {forms &&
                        forms.map((item, index) => {
                            return <DashboardTables key={index} FormData={item} />;
                        })}
                </BoxTables>
            </ContainerDashboard>

            {/* MODALS */}
            {CreateFormModalOpen && (
                <CreateFormModal
                    modalOpen={CreateFormModalOpen}
                    setModalOpen={setCreateFormModalOpen}
                    formSelected={formSelected}
                />
            )}
        </>
    );
};

export default Dashboard;
