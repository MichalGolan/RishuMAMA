import ChevronRight from "@mui/icons-material/ChevronRight"
import ChevronLeft from "@mui/icons-material/ChevronLeft"
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography"
import {useTheme, styled } from "@mui/material/styles"

import { useState } from "react";
import Sidebar from "../side panel/Sidebar";
import WeekView from "../planner/WeekView";
import "./Viewer.css"
import {CourseLight, Exam} from "../../data/api/courses";
import { defaultColor } from "../../utils/defaults";
import ExamBoard from "../exam board/ExamBoard";

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

const Viewer = () => {
    const theme = useTheme();
    const username = "מיכל";
    const [open, setOpen] = useState(false);
    const [activeCourses, setActiveCourses] = useState<Array<CourseLight>>([]);
    const [isLoggedIn, setLoggedIn] = useState<boolean>(true);
    const [signUp, setSignUp] = useState<Boolean>(false);
    const [activeExams, setActiveExams] = useState<Exam[]>([]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const courseIdToTitle = (courseId: number) : string => {
        const course = activeCourses.find((course) => course.id === courseId);
        return course ? course.name : '';
    }

    const handleCourseToggle = (id: number, name: string, active: Boolean, exams: {date: Date, isFirst: boolean}[]) => {
        if(!active){
            setActiveExams(prevState => prevState.filter(activeExam => activeExam.course.id !== id));
            return setActiveCourses(activeCourses.filter(course => course.id !== id));
        }

        const course = activeCourses.find(course => course.id === id);

        if(course) return;

        const courseLight = {
            id,
            name,
            isChecked: true,
            color: defaultColor
        }

        const courseExams: Exam[] = exams.map((exam) => ({
            course: courseLight,
            date: new Date(exam.date),
            isFirst: exam.isFirst
        }))

        setActiveExams(prevState => [...prevState, ...courseExams]);
        setActiveCourses([...activeCourses, courseLight]);
    }

    const onSignUp = () => {
        setSignUp(!signUp);
    }

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
                            sx={{ ...(open && { display: 'none' }) }}>
                            <FilterAltIcon />
                        </IconButton>
                    </SideBox>
                </StyledToolbar>
            </AppBarStyled>
            <Main open={open}>
                <DrawerHeader />
                <div className="viewer-row">
                    <div style={{alignSelf:"flex-start", paddingTop: "23px", paddingRight: "10px", flex:"none", justifyContent:"flex-start"}}>
                        <ExamBoard exams={activeExams}/>
                    </div>
                    <WeekView activeCourses={activeCourses} courseIdToTitle={courseIdToTitle}/>
                </div>
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
                    {isLoggedIn && <Typography>בחירת פילטרים</Typography> }
                </DrawerHeader>
                <Divider />
                <Sidebar onCourseToggle={handleCourseToggle}/>               
            </Drawer>
        </Box>
    );
}

export default Viewer;
