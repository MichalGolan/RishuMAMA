import React, { useState } from 'react';
import './RemoveButton.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteIcon from '@mui/icons-material/Delete';


interface Props {
    removeCourse: React.MouseEventHandler<HTMLButtonElement>;
}

function RemoveButton({removeCourse}: Props) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className='close'
            onClick={removeCourse}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            {isHovered ? <DeleteIcon/> : <DeleteOutlineIcon/>}
        </button>
    );
}

export default RemoveButton;