import FilterDropdown from "./FilterDropdown";

function FiltersMenu(props: any) {
    const semester = ["A", "B", "C"];
    const degree = ["Computer Science", "Economy"];
    return (
        <div>
            <FilterDropdown data={semester} title={ "semester" }/>
            <FilterDropdown data={degree} title={ "degree" } />
            
        </div>
        
    );
}
export default FiltersMenu;