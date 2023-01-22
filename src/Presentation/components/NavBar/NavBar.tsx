import React from 'react';
import { AppBar, Typography } from '@mui/material';

import { StyledToolbar, UserBox, AvatarBox } from './styles';

const NavBar = () => {
    return (
        <AppBar position="sticky" enableColorOnDark>
            <StyledToolbar>
                <Typography variant="h6">Dashboard</Typography>
                <UserBox>
                    <Typography variant="h6">Juan Perez</Typography>
                    <AvatarBox />
                </UserBox>
            </StyledToolbar>
        </AppBar>
    );
};

export default NavBar;
