import { FormRepository } from 'Data/Repository';
import { FormDataDTO } from 'Data/Repository/Models/FormDataDTO';

export const CreateFormUseCase = async (data: FormDataDTO) => {
    return await FormRepository.createForm(data);
};
