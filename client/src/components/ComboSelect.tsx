import {Autocomplete, TextField} from "@mui/material";
import React, { useState } from "react";
import {Course} from "../data/api/courses";

interface Props {
    name: string;
    options: string[] | Course[];
    enabled: boolean;
    setVal: Function;
    courseChoicesInput: boolean;
}

export default function ComboSelect(props: Props) {
    const [value, setValue] = useState<string>("");
    const [inputValue, setInputValue] = useState('');

    function mapOptions(){
        if(props.options.length > 0){
            if(typeof props.options[0] === 'string'){
                return props.options as string[];
            }
            return props.options.map(course => (course as Course).name);
        }
        else return [];
    }

    return (
        <div>
            <br />
            <Autocomplete
                value={value}
                onChange={(event: any, newValue: string) => {
                    setValue(newValue);
                    props.setVal(newValue);
                    if(props.courseChoicesInput){
                        setInputValue("");
                        setValue("");
                    }
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={mapOptions()}
                disabled={!props.enabled}
                disableClearable={true}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label={props.name} />}
            />
        </div>
    );
}