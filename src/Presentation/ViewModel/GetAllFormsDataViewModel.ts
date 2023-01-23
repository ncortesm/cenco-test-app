import { useState } from 'react';
import { GetFormsDataUseCase } from 'Domain/UseCase/Form/getFormsData';
import { QueryResponse } from 'Data/Repository/Models/Response';

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
