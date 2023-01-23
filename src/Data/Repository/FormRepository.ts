import format from 'date-fns/format';

import { getAllForms, create, getAll, getOne } from '../DataSource';
import { FormType } from './Models/FormType';
import { FormDataDTO } from 'Data/Repository/Models/FormDataDTO';
import { FormInput } from './Models/Form';
import { FieldType } from 'Presentation/types/fieldType';

export const FormRepository = {
    getForms: async () => {
        const { result } = await getAllForms();
        return result.map(
            (formtype): FormType => ({
                id: formtype.id,
                name: formtype.name,
                formObject: formtype.formObject
            })
        );
    },
    getAllFormsData: async () => {
        const { result: FormType } = await getAllForms();
        const { result, error } = await getAll();
        let data: any = [];
        let Columns: any = [];
        let Rows: any = [];

        //Agrupa los tipos de Forms
        FormType.map((Form: FormType) => {
            //Filtra por ID de form
            let dataGroupedFormId: FormDataDTO[] = result?.filter(
                (item: FormDataDTO) => item.formId === Form.id
            );
            //Ve si hay datos en la data de la iteracion
            if (dataGroupedFormId.length > 0) {
                //Crea esquema de columnas, reinicializando las variables
                Columns = [];
                Rows = [];
                Columns.push(
                    Form.formObject.form.map((formField: FormInput) => {
                        return {
                            field: formField.name,
                            headerName: formField.label,
                            width: 300
                        };
                    })
                );

                dataGroupedFormId.map((formData: FormDataDTO, index: number) => {
                    Rows.push({ id: formData.id });
                    //Crea Esquema de rows
                    formData.data.map((formField: any) => {
                        if (formField.type === FieldType.DatePicker) {
                            Rows[index][formField.field] = format(
                                new Date(formField.value),
                                'dd-MM-yyyy'
                            );
                        } else if (formField.type === FieldType.file) {
                            Rows[index][formField.field] = formField.value.fileName;
                        } else {
                            Rows[index][formField.field] = formField.value;
                        }
                    });
                });
                //Format final data para mostrar el tabla
                data.push({ formId: Form.id, Columns: Columns, Rows: Rows });
            }
        });

        return { result: data, error: error };
    },
    createForm: async (data: FormDataDTO) => {
        const { result, error } = await create(data);
        return { result: result, error: error };
    },
    getFormById: async (id: string) => {
        const { result, error } = await getOne(id);
        return { result: result, error: error };
    }
};
