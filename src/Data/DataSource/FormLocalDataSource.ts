import { FormsType } from './FormObjects/FormsType';
const FORMS = 'FORMS';

export const getAllForms = () => {
    return Promise.resolve({ result: FormsType });
};

export const getAll = () => {
    try {
        let data = [];
        let dataString = window.localStorage.getItem(FORMS);
        if (dataString) {
            data = JSON.parse(dataString);
        }
        return Promise.resolve({ error: null, result: data });
    } catch (err) {
        return Promise.resolve({ error: err, result: null });
    }
};

export async function create(FormData: any) {
    console.log(FormData);
    try {
        let { error, result } = await getAll();
        let data = result;
        FormData.id = new Date().getTime().toString();
        data.push(FormData);
        window.localStorage.setItem(FORMS, JSON.stringify(data));
        return Promise.resolve({ error: null, result: true });
    } catch (error) {
        return Promise.resolve({ error: error, result: true });
    }
}
