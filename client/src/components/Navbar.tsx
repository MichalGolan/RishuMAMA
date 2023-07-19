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
import Sidebar from "./Sidebar";

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
                {/*<Typography paragraph>*/}
                {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
                {/*    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non*/}
                {/*    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus*/}
                {/*    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.*/}
                {/*    Convallis convallis tellus id interdum velit laoreet id donec ultrices.*/}
                {/*    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit*/}
                {/*    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra*/}
                {/*    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum*/}
                {/*    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis*/}
                {/*    feugiat vivamus at augue. At augue eget arcu dictum varius duis at*/}
                {/*    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa*/}
                {/*    sapien faucibus et molestie ac.*/}
                {/*</Typography>*/}
                {/*<Typography paragraph>*/}
                {/*    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper*/}
                {/*    eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim*/}
                {/*    neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra*/}
                {/*    tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis*/}
                {/*    sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi*/}
                {/*    tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit*/}
                {/*    gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem*/}
                {/*    et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis*/}
                {/*    tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis*/}
                {/*    eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla*/}
                {/*    posuere sollicitudin aliquam ultrices sagittis orci a.*/}
                {/*</Typography>*/}
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
                {/*<List>*/}
                {/*    <ListItem key="select1" ><ComboSelect/></ListItem>*/}
                {/*    <ListItem key="select2" ><ComboSelect/></ListItem>*/}
                {/*    <ListItem key="select3" ><ComboSelect/></ListItem>*/}
                {/*    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (*/}
                {/*        <ListItem key={text} disablePadding>*/}
                {/*            <ListItemButton>*/}
                {/*                <ListItemIcon>*/}
                {/*                    {index % 2 === 0 ? <Inbox /> : <Mail />}*/}
                {/*                </ListItemIcon>*/}
                {/*                <ListItemText primary={text} />*/}
                {/*            </ListItemButton>*/}
                {/*        </ListItem>*/}
                {/*    ))}*/}
                {/*</List>*/}
                {/*<Divider />*/}
                {/*<List>*/}
                {/*    {['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
                {/*        <ListItem key={text} disablePadding>*/}
                {/*            <ListItemButton>*/}
                {/*                <ListItemIcon>*/}
                {/*                    {index % 2 === 0 ? <Inbox /> : <Mail/>}*/}
                {/*                </ListItemIcon>*/}
                {/*                <ListItemText primary={text} />*/}
                {/*            </ListItemButton>*/}
                {/*        </ListItem>*/}
                {/*    ))}*/}
                {/*</List>*/}
            </Drawer>
        </Box>
    );
}

export default Navbar;