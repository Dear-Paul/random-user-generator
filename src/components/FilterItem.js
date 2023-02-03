const FilterItem = ({ handleFilter, filter }) => {
  const  { className, value, icon, title} = filter;

    return (
        <div className="flex flex-col items-center">
            <div className={`md:w-[100px] h-[80px] p-[24px] text-white flex items-center justify-center ${className} rounded-[20px] cursor-pointer`} onClick={()=> handleFilter(value)}>
            <img className={`md:w-[50px] h-[50px] opacity-50`} src={icon} alt="icon"/>
            </div>
            <h6 className="text-xs font-thin font-['Poppins] opacity-70 mt-[14px]">{title}</h6>
        </div>

    )
};
export default FilterItem;