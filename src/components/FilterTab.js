import FilterItem from "./FilterItem";
import groupIcon from '../assets/group.png';
import maleIcon from '../assets/man.png';
import womanIcon from '../assets/woman.png';

const FILTERS = [
    {
        title: "All users",
        icon: groupIcon,
        value: "all",
        className: "bg-rose-400 hover:bg-rose-700"
    },
    {
        title: "Male users",
        icon: maleIcon,
        value: "male",
        className: "bg-teal-300 hover:bg-teal-700"
    },
    {
        title: "Female users",
        icon: womanIcon,
        value: "female",
        className: "bg-violet-500 hover:bg-violet-700"
    }
]

const FilterTab = ({ handleFilter }) => {
    return (
        <div className="md:relative">
            <div className="flex flex-col absolute justify-between  m-[12px]  md:flex-row gap-[65px] ">
                {FILTERS.map((filter) => (
                    <FilterItem filter={filter} handleFilter={handleFilter} />
                ))}

            </div>
        </div>

    )
};

export default FilterTab;