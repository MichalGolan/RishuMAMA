import React, {useState} from 'react';
import './Toggle.css'
import RemoveButton from "./RemoveButton";

interface Props {
    name: string;
    id: number;
    removeCourse:  Function;
    onToggleCheck: Function;
}

function Toggle(props: Props) {
    const [checked, setChecked] = useState(false);
    console.log(checked);

    const handleChange = () => {
        setChecked(!checked);
        props.onToggleCheck(props.id, !checked);
    };

    return (
        <div className={`container${checked ? ' checked' : ''}`}>
            <RemoveButton removeCourse={() => props.removeCourse(props.id)}/>
            <div className="toggle-label">{props.name}</div>
            <label className="toggle">
                <input
                    className="toggle-checkbox"
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}/>
                <div className="toggle-switch"></div>
            </label>
        </div>
    )
}

export default Toggle;