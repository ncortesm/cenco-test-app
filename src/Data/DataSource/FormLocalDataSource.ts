import uuid from 'react-uuid';

import { FormsType } from './FormObjects/FormsType';
import { FormDataDTO } from 'Data/Repository/Models/FormDataDTO';
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
        return Promise.resolve({ error: false, result: data });
    } catch (err) {
        return Promise.resolve({ error: true, result: null });
    }
};

export const create = async (FormData: FormDataDTO) => {
    try {
        let { result } = await getAll();
        let data = result;
        FormData.id = uuid();
        data.push(FormData);
        window.localStorage.setItem(FORMS, JSON.stringify(data));
        return Promise.resolve({ error: false, result: true });
    } catch (error) {
        return Promise.resolve({ error: true, result: true });
    }
};

export const getOne = async (id: string) => {
    try {
        let data: any = [];
        let dataString = window.localStorage.getItem(FORMS);
        if (dataString) {
            data = JSON.parse(dataString);
        }
        let filteredData = data.filter((item: any) => item.id === id);

        return Promise.resolve({
            error: false,
            result: filteredData.length > 0 ? filteredData[0] : null
        });
    } catch (err) {
        return Promise.resolve({ error: true, result: null });
    }
};
