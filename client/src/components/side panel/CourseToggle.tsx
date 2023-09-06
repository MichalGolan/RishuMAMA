import React from "react";
import {ToggleButton} from "@mui/material";

interface Props {
    name: string;
    onToggled: Function;
}
function CourseToggle(props: Props){
    const [selected, setSelected] = React.useState(false);

    return (
        <ToggleButton
            value={props.name}
            selected={selected}
            onChange={() => {
                setSelected(!selected);
                props.onToggled(!selected, props.name);
            }}
        >
            {props.name}
        </ToggleButton>
    );
}

export default CourseToggle;