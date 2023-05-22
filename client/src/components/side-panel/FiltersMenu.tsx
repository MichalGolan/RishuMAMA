import FilterDropdown from "./FilterDropdown";

function FiltersMenu(props: any) {
    const semester = ["A", "B", "C"];
    const degree = ["Computer Science", "Economy"];
    return (
        <div className="filters-manu">
            <div>
                <h1>סמסטר:</h1>
                <FilterDropdown data={semester} title={ "semester" }/>
            </div>
            <div>
                <h1>מסגרת:</h1>
                <FilterDropdown data={degree} title={ "degree" } /> 
            </div>
        </div>
    );
}
export default FiltersMenu;