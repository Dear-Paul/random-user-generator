import FilterItem from "./FilterItem";
import groupIcon from '../assets/group.png';
import maleIcon from '../assets/man.png';
import womanIcon from '../assets/woman.png';

const FILTERS = [
    {
        title: "All users",
        icon: groupIcon,
        value: "all",
        className: "bg-rose-400 active:bg-rose-900"
    },
    {
        title: "Male users",
        icon: maleIcon,
        value: "male",
        className: "bg-teal-300 active:bg-teal-900"
    },
    {
        title: "Female users",
        icon: womanIcon,
        value: "female",
        className: "bg-violet-500 active:bg-violet-900"
    }
]

const FilterTab = ({ handleFilter }) => {
    return (
        <div className="w-[95%] md:relative">
            <div className="w-[90%] m-auto flex flex-col  justify-between md:flex-row gap-[65px] ">
                {FILTERS.map((filter) => (
                    <FilterItem filter={filter} handleFilter={handleFilter} />
                ))}

            </div>
        </div>

    )
};

export default FilterTab;