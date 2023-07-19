import {Autocomplete, TextField} from "@mui/material";
import React, { useState } from "react";

interface Props {
    name: string;
    options: string[];
    enabled: boolean;
    setVal: Function;
}

export default function ComboSelect(props: Props) {
    const [value, setValue] = useState<string>("");
    const [inputValue, setInputValue] = useState('');

    return (
        <div>
            <br />
            <Autocomplete
                value={value}
                onChange={(event: any, newValue: string) => {
                    setValue(newValue);
                    props.setVal(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={props.options}
                disabled={!props.enabled}
                disableClearable={true}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label={props.name} />}
            />
        </div>
    );
}