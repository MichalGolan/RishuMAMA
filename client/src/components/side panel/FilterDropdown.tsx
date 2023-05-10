import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

function FilterDropdown(props: { data: string[]; title: string}) {
    
    return (
        <ul>
            {
              props.data?.map((x) =>
                  <li>{x}</li>
                )
            }
          </ul>
    );
}
export default FilterDropdown;