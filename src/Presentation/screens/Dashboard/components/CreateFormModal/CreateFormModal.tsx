import React, { memo } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { es } from 'date-fns/locale';

import { FormType } from 'Data/Repository/Models/FormType';
import { ModalBoxStyle } from './style';
import { createYupSchema, extractInitialValues } from 'Presentation/helpers/FormValidationHelpers';
import { DynamicField } from '../DynamicField';
import useViewModel from 'Presentation/ViewModel/CreateFormViewModel';

interface FormSelectorModal {
    setModalOpen: (open: boolean) => void;
    modalOpen: boolean;
    formSelected: FormType | undefined;
}

const FormSelectorModal = ({ setModalOpen, modalOpen, formSelected }: FormSelectorModal) => {
    const { saveForm } = useViewModel();
    const yupSchema = formSelected?.form?.form.reduce(createYupSchema, {});
    const validatedSchema = yup.object().shape(yupSchema);

    return (
        <Modal
            open={modalOpen}
            onClose={() => setModalOpen(!modalOpen)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={ModalBoxStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {formSelected?.name}
                </Typography>
                {/* Formulario */}
                <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
                    <Formik
                        initialValues={extractInitialValues(formSelected?.form?.form!)}
                        validationSchema={validatedSchema}
                        onSubmit={(values) => {
                            saveForm({ formId: formSelected?.id, ...values });
                        }}>
                        {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
                            <Form>
                                <Box mt={'10%'} mb={'15%'}>
                                    {formSelected?.form?.form.map((item, index) => {
                                        return <DynamicField Form={item} key={index} />;
                                    })}
                                </Box>
                                <Button
                                    variant="outlined"
                                    className="mt-20 mr-10"
                                    type="submit"
                                    fullWidth>
                                    Ingresar
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </LocalizationProvider>
            </Box>
        </Modal>
    );
};

export default memo(FormSelectorModal);
