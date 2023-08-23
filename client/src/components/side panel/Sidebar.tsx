import React, {useEffect, useState} from 'react';

import Button from "@mui/material/Button"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Stack from "@mui/material/Stack"

import ComboSelect from "../ComboSelect";
import { Course, CourseLight, Department, Frame, getFiltered, Semester } from "../../data/api/courses";
import { useGetDepartmentsQuery } from '../../data/queries/useGetDepartmentsQuery';
import { useGetFramesQuery } from '../../data/queries/useGetFramesQuery';
import { useGetSemestersQuery } from '../../data/queries/useGetSemestersQuery';
import { useGetFilteredCoursesQuery } from "../../data/queries/useGetFilteredCoursesQuery";
import CourseToggleDisplay from "./CourseToggleDisplay";
import { defaultColor } from "../../utils/defaults";


type CourseToggleEvent = {
    id: number;
    active: boolean;
}
interface Props {
    onCourseToggle: Function
}

const noneChosen = "";

function Sidebar(props: Props) {
    const {isLoading: isDepartmentsLoading, data: departments, isError: isDepartmentsError} = useGetDepartmentsQuery();
    const {isLoading: isFrameLoading, data: frames, isError: isFramesError} = useGetFramesQuery();
    const {isLoading: isSemesterLoading, data: semesters, isError: isSemestersError} = useGetSemestersQuery();

    const [frame, setFrame] = useState<string>(noneChosen);
    const [department, setDepartment] = useState<string>(noneChosen);
    const [semester, setSemester] = useState<string>(noneChosen);
    const {isLoading: isCoursesLoading,refetch: fetchFilteredCourses, data: courses, isError: isCoursesError} = useGetFilteredCoursesQuery(department, frame, semester);

    const [coursesFetched, setCoursesFetched] = useState<boolean>(false);
    const [showButtonState, setShowButtonState] = useState<boolean>(false);
    const [chosenCourses, setChosenCourses] = useState<Set<Course>>(new Set<Course>())

    useEffect(() => {
        setShowButtonState(frame!==noneChosen && department !==noneChosen && semester!==noneChosen);
    }, [frame, department, semester]);


    function filter() {
        fetchFilteredCourses().then(r => {
            setCoursesFetched(true);
        })
    }

    if(isDepartmentsLoading || isFrameLoading || isSemesterLoading)  return <div>Loading</div>
    if(isDepartmentsError || isFramesError || isSemestersError) return <div>error off</div>

    function addCourse(courseName: string){
        //map course name to Course
        if(!courses) return;
        const course = courses.find((course) => course.name === courseName);
        if(!course) return;
        setChosenCourses(prevState => {
            prevState.add(course)
            return new Set(prevState);
        });
    }

    function mapCoursesToNames(){
        //const names = [...chosenCourses].map((course) => course.name);
        const names: string[] = [];
        chosenCourses.forEach((course) => names.push(course.name));
        return names;
    }

    const removeCourseToggle =  (id: number) => {
        const newList = [...chosenCourses].filter((item) => item.id !== id);
        setChosenCourses(new Set(newList));
        props.onCourseToggle(id, null, false, null);
    }

    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            spacing={2}>
            <List
                sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "5px",}}>
                <ListItem key="select1" >
                    <ComboSelect
                        enabled={true}
                        name={"מסגרת"}
                        options={frames.map(getFramePresentation)}
                        setVal={(val: string) => setFrame(getFrameDB(val))}
                        courseChoicesInput={false}/>
                </ListItem>
                <ListItem key="select2" >
                    <ComboSelect
                        enabled={true}
                        name={"מסלול"}
                        options={departments.map(getDepartmentPresentation)}
                        setVal={(val: string) => setDepartment(getDepartmentDB(val))}
                        courseChoicesInput={false}/>
                </ListItem>
                <ListItem key="select3" >
                    <ComboSelect
                        enabled={true}
                        name={"סמסטר"}
                        options={semesters.map(getSemesterPresentation)}
                        setVal={(val: string) => setSemester(getSemesterDB(val))}
                        courseChoicesInput={false}/>
                </ListItem>
                <Button
                    variant="contained"
                    disabled={!showButtonState}
                    onClick={filter}>
                    Show me classes
                </Button>
                <ListItem key="courses" >
                    <ComboSelect
                        enabled={coursesFetched}
                        name={"קורסים"}
                        options={courses ? courses : []}
                        setVal={addCourse}
                        courseChoicesInput={true}/>
                </ListItem>
            </List>
            <CourseToggleDisplay
                courses={[...chosenCourses].map(diluteCourseData)}
                onToggleCheck={(id: number, name: string, isChecked: boolean) => {
                    const course = [...chosenCourses].find(course => course.id === id);
                    const exams = [ {date: course?.exam_A, isFirst: true}, {date: course?.exam_B, isFirst: false}];
                    props.onCourseToggle(id, name, isChecked, exams);
                }}
                removeCourse={removeCourseToggle}/>
        </Stack>
    );
}

export default Sidebar;

function getDepartmentPresentation(dep: Department): string {
    const mapping: Record<Department, string> = {
        COMPUTER_SCIENCE: "מדעי המחשב",
        PSYCHOLOGY: "פסיכולוגיה"
    };

    return mapping[dep] || dep;
}

function getDepartmentDB(dep: string): Department {
    const mapping: Record<string, Department> = {
        "מדעי המחשב": "COMPUTER_SCIENCE",
        "פסיכולוגיה": "PSYCHOLOGY"
    };

    return mapping[dep] || dep;
}

function getFramePresentation(frame: Frame): string {
    const mapping: Record<Frame, string> = {
        A: "א",
        B: "ב",
        C: "ג",
        OPTIONAL_COURSES: "קורסי בחירה"
    };

    return mapping[frame] || frame;
}

function getFrameDB(frame: string): Frame {
    const mapping: Record<string, Frame> = {
        "א": "A",
        "ב": "B",
        "ג": "C",
        "קורסי בחירה": "OPTIONAL_COURSES"
    };

    return mapping[frame] || frame;
}

function getSemesterPresentation(sem: Semester): string {
    const mapping: Record<Semester, string> = {
        A: "א",
        B: "ב",
        SUMMER: "קיץ"
    };

    return mapping[sem] || sem;
}

function getSemesterDB(sem: string): Semester {
    const mapping: Record<string, Semester> = {
        "א": "A",
        "ב": "B",
        "קיץ": "SUMMER"
    };

    return mapping[sem] || sem;
}

function diluteCourseData(course: Course): CourseLight {
    return { id: course.id, name: course.name, isChecked: false, color: defaultColor };
}
