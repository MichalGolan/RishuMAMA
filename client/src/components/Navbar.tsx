import { Mail, Notifications, Inbox, ChevronLeft, ChevronRight} from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Autocomplete,
    Avatar,
    Badge,
    Box, Divider, Drawer, IconButton,
    InputBase, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
    Menu,
    MenuItem,
    styled, TextField,
    Toolbar,
    Typography, useTheme,
} from "@mui/material";
import React, { useState } from "react";
import ComboSelect from "./ComboSelect";
import WeekTable from "./WeekTable";
import Sidebar from "./side panel/Sidebar";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "right",
    gap:"50px"
});

const SideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
}));

const drawerWidth = 350;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    }),
}));

interface AppBarProps {
    open?: boolean;
}

const AppBarStyled = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

const Navbar = () => {
    const theme = useTheme();
    const username = "מיכל";
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBarStyled position="fixed">
                <StyledToolbar>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                        RISHUMAMA
                    </Typography>
                    <SideBox>
                        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                            שלום {username}
                        </Typography>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerOpen}
                            sx={{ ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </SideBox>
                </StyledToolbar>
            </AppBarStyled>
            <Main open={open}>
                <DrawerHeader />
                <WeekTable/>
            
            </Main>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeft /> : <ChevronRight />}
                    </IconButton>
                    <Typography>בחירת פילטרים</Typography>
                </DrawerHeader>
                <Divider />
                <Sidebar />
                
            </Drawer>
        </Box>
    );
}

export default Navbar;