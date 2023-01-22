import { useState } from 'react';
import { GetFormsUseCase } from 'Domain/UseCase/Form/getForms';
import { FormType } from 'Data/Repository/Models/FormType';

const GetFormsViewModel = () => {
    //Forms
    const [forms, setForms] = useState<FormType[]>();

    const getForms = async () => {
        const result: FormType[] = await GetFormsUseCase();
        setForms(result);
    };

    return {
        getForms,
        forms
    };
};

export default GetFormsViewModel;
