import { useState } from 'react';
import { CreateFormUseCase } from 'Domain/UseCase/Form/CreateForm';
import { FormType } from 'Data/Repository/Models/FormType';

const CreateFormViewModel = () => {
    async function saveForm(data: any) {
        console.log(data);
        //const { result, error } = await CreateFormUseCase(data);
    }

    return {
        saveForm
    };
};

export default CreateFormViewModel;
