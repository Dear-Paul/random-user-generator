import { useState } from "react";
import { useOutsideClick } from "../custom-hooks/useOutsideClick.js";
import { countries, exportToCsv } from "../utils.js";
import Download from "./Download.js";
import Pagination from "./Pagination.js";
import UserCard from "./UserCard";
import UserCardDetails from "./UserDetailsCard.js";

const UserList = ({ itemsToDisplay, onPrev, onNext, searchUser, handleUserInput }) => {

    const [showDetailsCard, setShowDetailsCard] = useState(false);
    const [userDetails, setUserDetails] = useState({});
    const [showCountry, setShowCountry] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);
    const [country, setCountry] = useState("");

   

    const toggleCard = () => {
        setShowDetailsCard(!showDetailsCard)
    }

    const showDetails = (user) => {
        toggleCard();
        setUserDetails(user);
    };

    const onClickDropDown = () => {
        setShowDropDown(!showDropDown);
        
    }
    const dropDownRef = useOutsideClick(onClickDropDown);
    const download = (e) => {
        e.preventDefault();
        exportToCsv(itemsToDisplay);
    };
    const handleCountrySelect = (country) => {
        setCountry(country.name)
    }
    return (
        <div className="min-h-[300px] w-screen xl:w-[50%] xl:pt-28 text-white">
            <div className="w-[100%] relative  h-[100%] ">
                <div className="flex flex-col min-h-[300px] xl:w-[95%]  p-[22px] box-border bg-slate-100  text-black rounded-[20px]  overflow-hidden">
                    <h3 className="text-center text-2xl font-bold mt-[40px] xl:text-left">{showDetailsCard ? "User List" : "All Users"}</h3>
                    <h6 className="mb-[16px] text-center text-xs xl:text-left">Filter by</h6>
                    <div className="flex flex-row items-center justify-between px-3">
                        <div className="min-h-[48px] w-[40%] p-0 relative ">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-800 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input
                                value={searchUser}
                                onChange={handleUserInput}
                                className="block w-full p-4 pl-10 text-sm  border border-slate-200 rounded-3xl bg-slate-200  focus:outline-none  placeholder-gray-800 dark:text-gray-800" placeholder="Find in list"
                                required />
                        </div>
                        <div className="md:w-[150px] relative h-[52px] px-2 border border-slate-200 rounded-3xl bg-slate-200 cursor-pointer" onClick={onClickDropDown}>
                            <div className=" flex flex-row p-1">
                                <div className="w-[80%] flex flex-col">
                                    <h6 data-testid="country" className="text-xs text-slate-500">Country</h6>
                                    <p className="text-sm font-normal">{country && country.substring(0, 10)}</p>
                                </div>
                                <div className="w-[20%] ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mt-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>
                            {
                                showDropDown && <div ref={dropDownRef} className="absolute md:min-w-[100%] p-2 min-h-[200px] -mt-12 z-10 bg-white">
                                    {countries.map((country, idx) => (
                                        <div key={idx} data-testid="select" className="w-[100%] hover:bg-slate-400" onClick={()=>handleCountrySelect(country)}>{country?.name.substring(0, 15)}</div>
                                    ))}
                                </div>
                            }
                        </div>
                        <label class="relative inline-flex items-center  cursor-pointer">
                            <input type="checkbox" value={showCountry} class="sr-only peer" onChange={() => setShowCountry(!showCountry)} />
                            <div class="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-teal-300"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Show Country</span>
                        </label>
                    </div>
                    <div className="w-[100%] relative">

                        {showDetailsCard ? <UserCardDetails
                            userDetails={userDetails}
                            toggleCard={toggleCard}
                            showCountry={showCountry}
                        /> : itemsToDisplay?.map((user) => (
                            <UserCard user={user} showCountry={showCountry} showDetails={showDetails} />
                        ))
                        }

                    </div>


                    <div className="w-[100%] mt-4 flex flex-row justify-between">
                        <Download showDetailsCard={showDetailsCard} download={download} />
                        <Pagination showDetailsCard={showDetailsCard} onPrev={onPrev} onNext={onNext} />
                    </div>
                </div>

            </div>

        </div>
    )
};

export default UserList;