import React, { useState, useRef, Fragment } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';

const FixedBottomNavigation = (props: any) => {

    const { children, onMenuChange } = props;
    const [value, setValue] = useState(1);
    const ref = useRef(null);

    const onNavigationChange = (e: any, value: any) => {
        setValue(value);
        onMenuChange(value)
    }

    return (
        <Fragment>
            <Box sx={{ pb: 7 }} ref={ref}>
                <CssBaseline />
                {children}
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={onNavigationChange}
                    >
                        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                        <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
                    </BottomNavigation>
                </Paper>
            </Box>
        </Fragment>
    );
}

export default FixedBottomNavigation;