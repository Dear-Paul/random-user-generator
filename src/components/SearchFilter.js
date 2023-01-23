import { useState } from "react";
import FilterTab from "./FilterTab";

const SearchFilter = ({searchUser, handleUserInput, handleFilter}) => {
    return (
       <div className="md:w-[50%]">
        <div className="w-[100%] relative  h-[100%]">
        <div className="md:absolute text-white font-sans flex flex-col -mt-[20rem]  md:mx-[100px]">
            <div className="mb-8">
                <p className="text-3xl font-thin">Hello, <span className="font-black">Emerald</span></p>
            </div>

            <h6 className="text-xs font-thin mb-4">Welcome to your dashboard. Kindly sort through the user base.</h6>
            <div className="md:min-h-[48px] md:w-[570px] p-0 relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-800 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input
                value={searchUser}
                onChange={handleUserInput}
                    className="md:block md:w-[80%] p-4 pl-10 text-sm text-slate-900 border border-slate-500 rounded-lg bg-slate-500 focus:outline-none  placeholder-gray-800 dark:text-gray-800" placeholder="Find a user"
                    required />
            </div>

            <p className="font-thin text-sm mt-4">Show users</p>

            <FilterTab handleFilter={handleFilter}/>

        </div>
        </div>
       
       </div>
    )
};

export default SearchFilter;