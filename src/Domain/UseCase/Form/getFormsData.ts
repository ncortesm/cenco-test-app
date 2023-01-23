import { FormRepository } from 'Data/Repository';

export const GetFormsDataUseCase = async () => {
    return await FormRepository.getAllFormsData();
};
