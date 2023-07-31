import React, {useEffect, useState} from 'react';
import {Button, List, ListItem, Stack, styled} from "@mui/material";
import ComboSelect from "../ComboSelect";
import {Course, Department, Frame, getFiltered, Semester} from "../../data/api/courses";
import { useGetDepartmentsQuery } from '../../data/queries/useGetDepartmentsQuery';
import { useGetFramesQuery } from '../../data/queries/useGetFramesQuery';
import { useGetSemestersQuery } from '../../data/queries/useGetSemestersQuery';
import { isAxiosError } from 'axios';
import {useGetFilteredCoursesQuery} from "../../data/queries/useGetFilteredCoursesQuery";

const noneChosen = "";

function Sidebar() {

    const {isLoading: isDepartmentsLoading, data: departments, isError: isDepartmentsError} = useGetDepartmentsQuery();
    const {isLoading: isFrameLoading, data: frames, isError: isFramesError} = useGetFramesQuery();
    const {isLoading: isSemesterLoading, data: semesters, isError: isSemestersError} = useGetSemestersQuery();

    const [frame, setFrame] = useState<string>(noneChosen);
    const [department, setDepartment] = useState<string>(noneChosen);
    const [semester, setSemester] = useState<string>(noneChosen);
    const [courseChosen, setCourseChosen] = useState<string>("");
    const {isLoading: isCoursesLoading,refetch: fetchFilteredCourses, data: courses, isError: isCoursesError} = useGetFilteredCoursesQuery(department, frame, semester);

    const [coursesFetched, setCoursesFetched] = useState<boolean>(false);
    const [showButtonState, setShowButtonState] = useState<boolean>(false);

    useEffect(() => {
        setShowButtonState(frame!==noneChosen && department !==noneChosen && semester!==noneChosen);
    }, [frame, department, semester]);


    function filter() {
        fetchFilteredCourses().then(r => console.log("courses fetched"));
        setCoursesFetched(true);
        setCourseChosen("");
    }

    if(isDepartmentsLoading || isFrameLoading || isSemesterLoading)  return <div>yay</div>
    if(isDepartmentsError || isFramesError || isSemestersError) return <div>error off</div>

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
                        isParentControlled={false}
                        value={courseChosen}/>
                </ListItem>
                <ListItem key="select2" >
                    <ComboSelect
                        enabled={true}
                        name={"מסלול"}
                        options={departments.map(getDepartmentPresentation)}
                        setVal={(val: string) => setDepartment(getDepartmentDB(val))}
                        isParentControlled={false}
                        value={courseChosen}/>
                </ListItem>
                <ListItem key="select3" >
                    <ComboSelect
                        enabled={true}
                        name={"סמסטר"}
                        options={semesters.map(getSemesterPresentation)}
                        setVal={(val: string) => setSemester(getSemesterDB(val))}
                        isParentControlled={false}
                        value={courseChosen}/>
                </ListItem>
                <Button
                    variant="contained"
                    disabled={!showButtonState}
                    onClick={filter}>
                    Show me classes
                </Button>
                <ListItem key="select3" >
                    <ComboSelect
                        enabled={coursesFetched}
                        name={"קורסים"}
                        options={courses ? courses.map(course => course.name) : []}
                        setVal={setSemester}
                        isParentControlled={true}
                        value={courseChosen}/></ListItem>
            </List>
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