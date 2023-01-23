import { useState } from 'react';
import { CreateFormUseCase } from 'Domain/UseCase/Form/CreateForm';

const CreateFormViewModel = () => {
    const [resultSave, setResultSave] = useState<boolean>(false);

    const saveForm = async (data: any) => {
        const { result, error } = await CreateFormUseCase(data);
        setResultSave(result);
    };

    return {
        saveForm,
        resultSave,
        setResultSave
    };
};

export default CreateFormViewModel;
