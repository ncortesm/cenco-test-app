import { getAllForms, create } from '../DataSource';
import { FormType } from './Models/FormType';

export const FormRepository = {
    getForms: async () => {
        const { result } = await getAllForms();
        return result.map(
            (formtype): FormType => ({
                id: formtype.id,
                name: formtype.name,
                form: formtype.form
            })
        );
    },
    createForm: async (data: any) => {
        const { result, error } = await create(data);
        return { result: result, error: error };
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
