import React, { memo, useRef, ChangeEvent } from 'react';
import {
    Box,
    Typography,
    TextField,
    Select,
    MenuItem,
    FormControl,
    FormHelperText,
    Button
} from '@mui/material';
import { DatePicker } from 'formik-mui-x-date-pickers';
import { Field, useField, ErrorMessage } from 'formik';
import { format } from 'date-fns';

import { FormInput } from 'Data/Repository/Models/Form';
import FileView from './FileView';

interface DynamicFieldProps {
    Form: FormInput;
    setFieldValue: any;
}

const DynamicField = ({ Form, setFieldValue }: DynamicFieldProps) => {
    const [field, meta] = useField(Form.name);
    const inputRef = useRef<HTMLInputElement | null>(null);

    //File Helpers
    const handleUploadClick = () => {
        inputRef.current?.click();
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        }
        setFieldValue(Form.name, e.target.files[0]);
    };

    const FormComponents: any = {
        input: (
            <Box key={Form.id}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    name={Form.name}
                    value={field.value}
                    variant="outlined"
                    onChange={field.onChange}
                    error={meta.error ? true : false}
                    helperText={meta.error}
                />
            </Box>
        ),
        select: (
            <FormControl key={Form.id} error={meta.error ? true : false} fullWidth>
                <Select
                    name={Form.name}
                    value={field.value}
                    label="Seleccione"
                    onChange={field.onChange}>
                    {Form.options &&
                        Form.options!.map((option) => {
                            return (
                                <MenuItem key={option.id} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            );
                        })}
                </Select>
                {meta.error && <FormHelperText>{meta.error}</FormHelperText>}
            </FormControl>
        ),
        ['text-area']: (
            <Box key={Form.id}>
                <TextField
                    fullWidth
                    name={Form.name}
                    value={field.value}
                    onChange={field.onChange}
                    multiline
                    rows={6}
                    error={meta.error ? true : false}
                    helperText={meta.error}
                />
            </Box>
        ),
        ['date-picker']: (
            <Box key={Form.id}>
                <Field
                    name={Form.name}
                    label={Form.label}
                    inputFormat="dd-MM-yyyy"
                    component={DatePicker}
                    disabled={false}
                    textField={{
                        fullWidth: true
                    }}
                />
            </Box>
        ),
        file: (
            <Box key={Form.id}>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={handleUploadClick}
                    disabled={field.value ? true : false}>
                    Subir archivo
                </Button>
                <input
                    hidden
                    name={Form.name}
                    type="file"
                    ref={inputRef}
                    onChange={handleFileChange}
                />
                {field.value && <FileView file={field.value} />}
                <ErrorMessage name={Form.name}>
                    {(msg) => (
                        <Box mt={'3%'} color={'red'}>
                            {msg}
                        </Box>
                    )}
                </ErrorMessage>
            </Box>
        )
    };

    return (
        <Box mt={'8%'}>
            <Typography variant="body1" mb={'5%'} color={'gray'}>
                {Form.label}
            </Typography>
            {FormComponents[Form.type]}
        </Box>
    );
};

export default memo(DynamicField);
