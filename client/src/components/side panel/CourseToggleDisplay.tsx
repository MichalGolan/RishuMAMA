import React from 'react';
import {Stack, ToggleButton} from "@mui/material";
import CourseToggle from "./CourseToggle";
import {Course} from "../../data/api/courses";

interface Props {
    courses: string[];
    onToggled: Function;
}

function CourseToggleDisplay(props: Props) {

    console.log(props.courses);

    return (
        <Stack>
            { props.courses
                .map((course: string) =>
                    <CourseToggle
                        name={course}
                        onToggled={props.onToggled}/>) }

        </Stack>
    );
}

export default CourseToggleDisplay;