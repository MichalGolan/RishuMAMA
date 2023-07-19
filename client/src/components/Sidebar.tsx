import React, {useEffect, useState} from 'react';
import {Button, List, ListItem, Stack, styled} from "@mui/material";
import ComboSelect from "./ComboSelect";

const noneChosen = "";

function Sidebar() {

    const frames = ["שנה א", "שנה ב", "שנה ג", "קורסי בחירה"];
    const fields = ["מדעי המחשב", "פסיכולוגיה", "מערכות מידע", "כלכלה"];
    const semesters = ["א (סתיו)", "ב (אביב)", "קיץ"];

    const [frame, setFrame] = useState<string>(noneChosen);
    const [field, setField] = useState<string>(noneChosen);
    const [semester, setSemester] = useState<string>(noneChosen);

    const [showButtonState, setShowButtonState] = useState<boolean>(false);

    useEffect(() => {
        setShowButtonState(frame!==noneChosen && field !==noneChosen && semester!==noneChosen);
    }, [frame, field, semester]);

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
                <ListItem key="select1" ><ComboSelect enabled={true} name={"מסגרת"} options={frames} setVal={setFrame} /></ListItem>
                <ListItem key="select2" ><ComboSelect enabled={true} name={"מסלול"} options={fields} setVal={setField}/></ListItem>
                <ListItem key="select3" ><ComboSelect enabled={true} name={"סמסטר"} options={semesters} setVal={setSemester}/></ListItem>
                <Button variant="contained" disabled={!showButtonState}>Show me classes</Button>
            </List>
        </Stack>
    );
}

export default Sidebar;