import React, { useState, memo, useCallback, useEffect } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { FormType } from 'Data/Repository/Models/FormType';

interface ButtonSelectorProps {
    setModalOpen: (state: boolean) => void;
    setFormSelected: (form: FormType) => void;
    FormsType: FormType[];
}

const ButtonSelector = ({ setModalOpen, setFormSelected, FormsType }: ButtonSelectorProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
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
                {FormsType?.map((item, index) => {
                    return (
                        <MenuItem
                            onClick={() => {
                                setModalOpen(true);
                                setFormSelected(item);
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
