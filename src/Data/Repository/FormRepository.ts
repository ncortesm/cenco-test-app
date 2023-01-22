import { getAllFormsType } from '../DataSource';
import { FormType } from './Models/FormType';

export const FormRepository = {
    getFormsType: async () => {
        const { result } = await getAllFormsType();
        return result.map(
            (formtype): FormType => ({
                id: formtype.id,
                name: formtype.name
            })
        );
    }
};

/*
getOne: async (id: string) => {

    const flow = flows.find(x => x._id === id );
    console.log('flow', flow)
    return new Flow({
        id: flow?._id,
        category: flow?.category.name,
        name: flow?.name,
        status: 'Pendiente' //TODO: Definis source del estado del flow
    });
}*/
