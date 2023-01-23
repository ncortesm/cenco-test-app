export interface FormDataDTO {
    formId: number;
    data: dataFormDTO[];
    id?: string;
}

export interface dataFormDTO {
    field: string;
    label: string;
    type: string;
    value: any;
}
