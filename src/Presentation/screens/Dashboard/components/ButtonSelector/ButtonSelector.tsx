import React, { useState, memo, useCallback, useEffect } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import useViewModel from 'Presentation/ViewModel/GetFormsViewModel';
import { Form } from 'Data/Repository/Models/Form';

interface ButtonSelectorProps {
    setModalOpen: (state: boolean) => void;
    setFormSelected: (form: Form) => void;
    setFormNameSelected: (name: string) => void;
}

const ButtonSelector = ({
    setModalOpen,
    setFormSelected,
    setFormNameSelected
}: ButtonSelectorProps) => {
    /* Obtiene forms desde viewmodel */
    const { forms, getForms } = useViewModel();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    /* Obtener Forms Type */
    useEffect(() => {
        getForms();
    }, []);

    return (
        <>
            <Button
                id={'selector-button'}
                variant="contained"
                aria-controls={open ? 'form-selector-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}>
                Ingresar form
            </Button>
            <Menu
                id="form-selector-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'selector-button'
                }}>
                {forms?.map((item, index) => {
                    return (
                        <MenuItem
                            onClick={() => {
                                setModalOpen(true);
                                setFormSelected(item.form);
                                setFormNameSelected(item.name);
                            }}
                            key={index}>
                            {item.name}
                        </MenuItem>
                    );
                })}
            </Menu>
        </>
    );
};

export default memo(ButtonSelector);
