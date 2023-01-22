export interface Form {
    form: FormInput[];
}

export interface FormInput {
    id: number;
    type: string;
    name: string;
    label: string;
    value: string;
    validationType: string;
    options?: FormOptions[];
    validations: FormValidations[];
}

export interface FormOptions {
    id: number;
    value: string;
    label: string;
}

export interface FormValidations {
    type?: string;
    params?: any;
}
