import React, { useEffect } from 'react';
import { Modal, Box, Typography } from '@mui/material';
import format from 'date-fns/format';

import { ModalBoxStyle } from '../CreateFormModal/style';
import useGetFormByIdViewModel from 'Presentation/ViewModel/GetFormByIdViewModel';
import { dataFormDTO } from 'Data/Repository/Models/FormDataDTO';
import { FieldType } from 'Presentation/types/fieldType';
import FileView from '../DynamicField/FileView';

interface DetailFormModalProps {
    modalOpen: boolean;
    setModalOpen: (state: boolean) => void;
    ReadingFormId: string;
}

const DetailFormModal = ({ modalOpen, setModalOpen, ReadingFormId }: DetailFormModalProps) => {
    const { FormById, getFormById } = useGetFormByIdViewModel();

    useEffect(() => {
        getFormById(ReadingFormId);
    }, []);

    useEffect(() => {
        console.log(FormById);
    }, [FormById]);

    return (
        <Modal open={modalOpen} onClose={() => setModalOpen(!modalOpen)}>
            <Box sx={ModalBoxStyle}>
                {FormById?.data.map((item: dataFormDTO, index: number) => {
                    return (
                        <Box key={index}>
                            <Typography variant="h6">{item.label}</Typography>
                            <Typography variant="subtitle1" color={'gray'}>
                                {item.type === FieldType.DatePicker
                                    ? format(new Date(item.value), 'dd-MM-yyyy')
                                    : item.type === FieldType.file
                                    ? item.value.fileName
                                    : item.value}
                            </Typography>
                            <Box mt={'5%'} />
                        </Box>
                    );
                })}
            </Box>
        </Modal>
    );
};

export default DetailFormModal;
