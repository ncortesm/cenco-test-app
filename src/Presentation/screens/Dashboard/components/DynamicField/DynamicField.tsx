import React, { memo } from 'react';
import {
    Box,
    Typography,
    TextField,
    Select,
    MenuItem,
    FormControl,
    FormHelperText
} from '@mui/material';
import { DatePicker } from 'formik-mui-x-date-pickers';
import { Field, useField } from 'formik';

import { FormInput } from 'Data/Repository/Models/Form';

interface DynamicFieldProps {
    Form: FormInput;
}

const DynamicField = ({ Form }: DynamicFieldProps) => {
    const [field, meta] = useField(Form.name);

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
