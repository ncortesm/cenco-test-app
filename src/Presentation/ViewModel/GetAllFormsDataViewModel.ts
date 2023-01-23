import { useState } from 'react';
import { GetFormsDataUseCase } from 'Domain/UseCase/Form/getFormsData';

const GetFormsViewModel = () => {
    //Forms
    const [AllDataForms, setAllDataForms] = useState<any[]>();

    const getAllDataForms = async () => {
        const { error, result } = await GetFormsDataUseCase();
        setAllDataForms(result);
    };

    return {
        getAllDataForms,
        AllDataForms
    };
};

export default GetFormsViewModel;
