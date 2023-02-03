const FilterItem = ({ handleFilter, filter }) => {
  const  { className, value, icon, title} = filter;

    return (
        <div className="flex flex-col items-center">
            <button className={`md:w-[100px] h-[80px] p-[24px] text-white flex items-center justify-center ${className} rounded-[20px] cursor-pointer`} onClick={()=> handleFilter(value)}>
            <img className={`md:w-[50px] h-[50px] opacity-50`} src={icon} alt="icon"/>
            </button>
            <h6 className="md:text-xs font-thin mt-[14px] opacity-60">{title}</h6>
        </div>

    )
};
export default FilterItem;