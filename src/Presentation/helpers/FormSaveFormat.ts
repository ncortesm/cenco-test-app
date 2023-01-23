import { FormType } from 'Data/Repository/Models/FormType';
import { dataFormDTO } from 'Data/Repository/Models/FormDataDTO';
import { FieldType } from 'Presentation/types/fieldType';

/**
 *
 * @param values
 * @param FormSelected
 */
export const CustomFormatSave = (values: any, FormSelected: FormType) => {
    let data: dataFormDTO[] = [];
    let objectFile: any;

    FormSelected.formObject.form.map((field, index) => {
        if (field.type === FieldType.file) {
            objectFile = { fileName: values[field.name].name, data: values[field.name] };
        }

        data.push({
            type: field.type,
            field: field.name,
            value: field.type === FieldType.file ? objectFile : values[field.name],
            label: field.label
        });
    });

    return {
        formId: FormSelected.id,
        data: data
    };
};
