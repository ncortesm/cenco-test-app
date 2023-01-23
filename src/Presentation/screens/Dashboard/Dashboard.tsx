import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

import { NavBar } from '../../components';
import { ButtonSelector, CreateFormModal } from './components';
import { ContainerDashboard, TitleContainer, BoxTables, BoxEmpty } from './style';
import { FormType } from 'Data/Repository/Models/FormType';
import { DashboardTables } from './components/DashboardTables';
import useViewModelGetForms from 'Presentation/ViewModel/GetFormsViewModel';
import useViewModelGetAllDataForm from 'Presentation/ViewModel/GetAllFormsDataViewModel';
import useSaveFormViewModel from 'Presentation/ViewModel/CreateFormViewModel';
import empty from 'Presentation/assets/svg/empty.svg';

const Dashboard = () => {
    /* Obtiene forms desde viewmodel */
    const { forms, getForms } = useViewModelGetForms();
    //Data ingresada en el L.S
    const { AllDataForms, getAllDataForms } = useViewModelGetAllDataForm();
    const { saveForm, resultSave, setResultSave } = useSaveFormViewModel();
    //STATE HANDLER
    const [formSelected, setFormSelected] = useState<FormType>();
    const [CreateFormModalOpen, setCreateFormModalOpen] = useState<boolean>(false);

    /* Obtener Forms Type */
    useEffect(() => {
        getForms();
        getAllDataForms();
    }, []);

    /* Handler y reset para save de forms */
    useEffect(() => {
        if (resultSave) {
            getAllDataForms();
            setResultSave(false);
            setCreateFormModalOpen(false);
        }
    }, [resultSave]);

    return (
        <>
            {/* BARRA SUPERIOR */}
            <NavBar />
            <ContainerDashboard>
                <TitleContainer>
                    <Typography variant="h4">Formularios enviados</Typography>
                    <ButtonSelector
                        setModalOpen={setCreateFormModalOpen}
                        setFormSelected={setFormSelected}
                        FormsType={forms!}
                    />
                </TitleContainer>
                {/* GRIDS */}
                <BoxTables>
                    {AllDataForms && AllDataForms!.length === 0 && (
                        <>
                            <BoxEmpty>
                                <img src={empty} alt="React Logo" />
                            </BoxEmpty>
                            <Typography variant="h4" textAlign={'center'} color={'gray'} mt={'2%'}>
                                Ingrese su primer formulario
                            </Typography>
                        </>
                    )}
                    {forms &&
                        forms.map((item, index) => {
                            return (
                                <DashboardTables
                                    key={index}
                                    FormData={item}
                                    dataForm={AllDataForms}
                                />
                            );
                        })}
                </BoxTables>
            </ContainerDashboard>

            {/* MODALS */}
            {CreateFormModalOpen && (
                <CreateFormModal
                    modalOpen={CreateFormModalOpen}
                    setModalOpen={setCreateFormModalOpen}
                    formSelected={formSelected}
                    saveForm={saveForm}
                />
            )}
        </>
    );
};

export default Dashboard;
