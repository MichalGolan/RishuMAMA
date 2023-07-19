import React, {useRef} from "react";
import {Button} from "@mui/material";
import {Add, Settings} from "@mui/icons-material";
import Navbar from "./components/Navbar";
export function App() {
    const ref = useRef(null);
    const temp = "John";
    const [toggled, setToggled] = React.useState(false);

    return (
        <div>
            <Navbar/>
        </div>
    )
}
