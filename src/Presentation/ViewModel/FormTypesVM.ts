import { useState } from 'react';
import { GetFormsTypeUseCase } from '../../Domain/UseCase/Form/getFormsType';
import { FormType } from '../../Data/Repository/Models/FormType';

const FormTypesViewModel = () => {
    const [formsType, setFormsType] = useState<FormType[]>();

    const getFormsType = async () => {
        const result: FormType[] = await GetFormsTypeUseCase();
        setFormsType(result);
    };
    return {
        getFormsType,
        formsType
    };
};

export default FormTypesViewModel;
