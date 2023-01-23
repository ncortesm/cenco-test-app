import { FormRepository } from '../../../Data/Repository/FormRepository';

export async function GetFormByIdUseCase(id: string) {
    return await FormRepository.getFormById(id);
}
