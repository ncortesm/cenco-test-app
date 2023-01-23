import { useState } from 'react';
import { GetFormByIdUseCase } from 'Domain/UseCase/Form/getFormById';

const GetFormByIdViewModel = () => {
    const [FormById, setFormById] = useState<any>();

    const getFormById = async (id: string) => {
        const { result } = await GetFormByIdUseCase(id);
        setFormById({ ...result });
    };

    return {
        FormById,
        getFormById
    };
};

export default GetFormByIdViewModel;
