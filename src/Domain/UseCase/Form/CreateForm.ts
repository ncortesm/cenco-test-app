import { FormRepository } from 'Data/Repository';

export const CreateFormUseCase = async (data: any) => {
    return await FormRepository.createForm(data);
};
