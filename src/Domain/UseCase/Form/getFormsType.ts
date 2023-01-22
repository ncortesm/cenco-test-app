import { FormRepository } from '../../../Data/Repository';

export const GetFormsTypeUseCase = async () => {
    return await FormRepository.getFormsType();
};
