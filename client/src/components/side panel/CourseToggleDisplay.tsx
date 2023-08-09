import React from 'react';
import {Stack, ToggleButton} from "@mui/material";
import CourseToggle from "./CourseToggle";
import {Course, CourseLight} from "../../data/api/courses";
import Toggle from "./course toggle/Toggle";
import './ToggleContainer.css'

interface Props {
    courses: CourseLight[];
    onToggleCheck: Function;
    removeCourse: Function;
}

function CourseToggleDisplay(props: Props) {

    console.log(props.courses);

    return (
        <div className="toggle-container">
            {props.courses.map(course =>
                <Toggle
                    name={course.name}
                    id={course.id}
                    removeCourse={props.removeCourse}
                    onToggleCheck={props.onToggleCheck}/>)}
        </div>
    )

    // return (
    //     <Stack>
    //         { props.courses
    //             .map((course: string) =>
    //                 <CourseToggle
    //                     name={course}
    //                     onToggled={props.onToggleCheck}/>) }
    //
    //     </Stack>
    // );
}

export default CourseToggleDisplay;