const Pagination = ({onPrev, onNext, showDetailsCard}) => {
    return (
        <div className="flex flex-row gap-2 mr-24">
            <button className={`w-12 h-9 flex justify-center items-center ${showDetailsCard && "opacity-50"} bg-gray-300 rounded-[8px]`} onClick={onPrev}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>

            </button>
            <button className={`w-12 h-9 flex justify-center items-center ${showDetailsCard && "opacity-50"} bg-black text-white rounded-[8px] opacity-80`} onClick={onNext}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>

            </button>
        </div>
    )
};

export default Pagination;