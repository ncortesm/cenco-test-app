import { styled, Toolbar, Box, Avatar } from '@mui/material';

export const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
});

export const UserBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
}));

export const AvatarBox = styled(Avatar)(() => ({
    width: 30,
    height: 30
}));
