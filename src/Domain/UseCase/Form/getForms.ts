import { FormRepository } from 'Data/Repository';

export const GetFormsUseCase = async () => {
    return await FormRepository.getForms();
};
