import * as yup from 'yup';
import { FormInput } from 'Data/Repository/Models/Form';

/**
 *
 * @param Form
 * @returns Key Value pair by Form
 */
export const extractInitialValues = (Form: FormInput[]) => {
    let initialValues;

    initialValues = Object.assign({}, ...Form.map(({ name, value }) => ({ [name]: value })));
    return initialValues;
};

/**
 *  Devuelve un esquema de formulario dinamico de yup, según el dataset que le pasemos.
 * Ejemplo de esto se puede ver en el componente ApprovalsForm
 * @param schema
 * @param config
 * @returns Yup schema
 */
export function createYupSchema(schema: any, config: FormInput) {
    const { name, validationType, validations } = config;
    const yupMethod = validationType as keyof typeof yup;
    //si es que el metodo ingresado no corresponde a los que tiene yup (yupMethod), retorna anticipadamente.
    if (!yup[yupMethod]) {
        return schema;
    }

    //Itera el array validaciones, permite generar un schema completo que despues se debe convertir con yup object shape
    let validator = (yup as any)[yupMethod]();
    if (validations.length > 0) {
        validations.forEach((validation) => {
            const { params, type } = validation;
            if (!validator[type!]) {
                return;
            }
            validator = validator[type!](...params!);
        });
    }

    schema[name] = validator;
    return schema;
}
