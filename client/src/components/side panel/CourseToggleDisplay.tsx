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
    return (
        <div className="toggle-container">
            {props.courses.map(course =>
                <Toggle
                    key={course.id}
                    name={course.name}
                    id={course.id}
                    isChecked={course.isChecked}
                    removeCourse={props.removeCourse}
                    onToggleCheck={props.onToggleCheck}/>)}
        </div>
    )
}

export default CourseToggleDisplay;