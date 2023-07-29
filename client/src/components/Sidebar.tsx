import React, {useEffect, useState} from 'react';
import {Button, List, ListItem, Stack, styled} from "@mui/material";
import ComboSelect from "./ComboSelect";
import {Department, Frame, Semester} from "../data/api/courses";
import { useGetDepartmentsQuery } from '../data/queries/useGetDepartmentsQuery';
import { useGetFramesQuery } from '../data/queries/useGetFramesQuery';
import { useGetSemestersQuery } from '../data/queries/useGetSemestersQuery';
import { isAxiosError } from 'axios';

const noneChosen = "";

function Sidebar() {

    const {isLoading: isDepartmentsLoading, data: departments, isError: isDepartmentsError} = useGetDepartmentsQuery();
    const {isLoading: isFrameLoading, data: frames, isError: isFramesError} = useGetFramesQuery();
    const {isLoading: isSemesterLoading, data: semesters, isError: isSemestersError} = useGetSemestersQuery();

    const [frame, setFrame] = useState<string>(noneChosen);
    const [department, setdepartment] = useState<string>(noneChosen);
    const [semester, setSemester] = useState<string>(noneChosen);

    const [showButtonState, setShowButtonState] = useState<boolean>(false);

   


    useEffect(() => {
        setShowButtonState(frame!==noneChosen && department !==noneChosen && semester!==noneChosen);
    }, [frame, department, semester]);


    if(isDepartmentsLoading || isFrameLoading || isSemesterLoading)  return <div>yay</div>
    if(isDepartmentsError || isFramesError || isSemestersError) return <div>erorr off</div>

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
                <ListItem key="select1" ><ComboSelect enabled={true} name={"מסגרת"} options={frames.map(getFramePresentation)} setVal={setFrame} /></ListItem>
                <ListItem key="select2" ><ComboSelect enabled={true} name={"מסלול"} options={departments.map(getDepartmentPresentation)} setVal={setdepartment}/></ListItem>
                <ListItem key="select3" ><ComboSelect enabled={true} name={"סמסטר"} options={semesters.map(getSemeterPresentation)} setVal={setSemester}/></ListItem>
                <Button variant="contained" disabled={!showButtonState}>Show me classes</Button>
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

function getFramePresentation(frame: Frame): string {
    const mapping: Record<Frame, string> = {
        A: "א",
        B: "ב",
        C: "ג",
        OPTIONAL_COURSES: "קורסי בחירה"
    };

    return mapping[frame] || frame;
}

function getSemeterPresentation(sem: Semester): string {
    const mapping: Record<Semester, string> = {
        A: "א",
        B: "ב",
        SUMMER: "קיץ"
    };

    return mapping[sem] || sem;
}