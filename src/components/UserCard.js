const UserCard = ({ user, showCountry, showDetails }) => {

    return (
        <div className="relative h-[400px] my-10 p-4 w-[100%] bg-white shadow-lg  rounded-[15px] shadow-gray-500 xl:h-[200px]">
            <div className="w-[95%] h-[95%] flex flex-col items-center justify-center xl:flex-row">
                <div className="h-[130px] w-[130px] relative rounded-[50%] bg-slate-400 border-[6px] border-teal-300">
                    <img className="w-[100%] h-[100%] rounded-[50%]" src={user.picture.medium} alt="profile pic" />
                </div>
                <div className="flex flex-col ">
                    <h2 className="text-xl font-bold">{`${user.name.first} ${user.name.last}`}</h2>
                    <h5 className="text-[15px] font-normal italic mt-1 mb-8 opacity-30">
                        {`${user.location.street.number}, ${user.location.street.name},  ${user.location.state},  ${showCountry ? user.location.country : ''} `}
                    </h5>
                    <div className="flex flex-row justify-between w-[350px]">
                        <div className="flex flex-row opacity-60 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            {user.email}
                        </div>
                        <div className="flex flex-row opacity-60 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            {user.phone}
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <button type="button" className="mt-16  h-[50px] text-white bg-teal-300 shadow-lg  shadow-gray-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-[14px] text-sm px-5 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => showDetails(user)}>
                        <svg aria-hidden="true" class="w-5 h-5 ml-1 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>

            </div>
        </div>
    )
};
export default UserCard;