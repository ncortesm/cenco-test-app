import React, { useState, memo } from 'react';
import { Box } from '@mui/material';

interface FileViewProps {
    file: any;
}

const FileView = ({ file }: FileViewProps) => {
    const [name, setName] = useState('');
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        setName(file.name);
    };

    return (
        <Box mt={'4%'} ml={'2%'}>
            {name}
        </Box>
    );
};

export default memo(FileView);
