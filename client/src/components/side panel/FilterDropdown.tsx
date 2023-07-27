import React, { useState } from 'react';

interface Option {
    value: string;
    label: string;
}
  
interface DropdownProps {
    options: Option[];
    defaultOption?: Option;
    onChange: (selectedOption: Option) => void;
}
function FilterDropdown(props: { data: string[]; title: string}) {
    const [selectedOption, setSelectedOption] = useState<string>(props.title);

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        const selectedOption = props.data.find(option => option.match(selectedValue)) || props.title;
        setSelectedOption(selectedOption);
        console.log(`filer ${props.title} changed to ${selectedOption}`)
        //onChange(selectedOption);
      };
    return (
        <select value={selectedOption} onChange={handleSelect}>
        {props.data?.map(option => (
            <option key={option} value={option}>
            {option}
            </option>
        ))}
        </select>
    );
};
export default FilterDropdown;