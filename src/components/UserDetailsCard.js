const UserCardDetails = ({ showCountry, toggleCard, userDetails }) => {
    return (
        <div className={`md:h-[280px] w-[100%] flex flex-col  my-4 p-5`}>
            <button className="flex flex-row items-center justify-center text-teal-500  w-[120px] gap-2 hover:bg-slate-300 rounded-lg"  onClick={toggleCard}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>

                <span className=" font-medium text-sm text-black">RESULTS</span>
            </button>
            <div className="md:flex flex-row w-[100%] mt-5">
                <div className="w-[40%]">
                    <div className="rounded-[50%] h-[180px] w-[180px] border-8 border-teal-300">
                    <img className="w-[100%] h-[100%] rounded-[50%]" src={userDetails.picture.large} alt="profile pic"/>
                    </div>
                </div>
                <div className="w-[60%] flex flex-col p-3">
                    <h2 className="text-xl font-bold">
                    {`${userDetails.name.first} ${userDetails.name.last}`}
                        <span className="font-light ml-2">{userDetails.dob.age}</span>
                    </h2>
                    <p className="text-[14px] mb-4"> {`${userDetails.location.street.number}, ${userDetails.location.street.name},  ${userDetails.location.state},  ${showCountry ? userDetails.location.country : ''} `}</p>
                    <div className="bg-slate-300 opacity-60 p-1 px-4 h-40px md:flex flex-row justify-start items-center rounded-xl mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <span> {userDetails.email}</span>
                    </div>
                    <div className="bg-pink-300 opacity-60 p-1 px-3 text-sm  h-40px md:flex flex-row justify-start items-center rounded-xl">
                        <p>JOINED:</p><span className=" ml-2">{userDetails.registered.date}</span>
                    </div>

                    <div className="flex flex-row opacity-60 text-sm p-1 px-4 mt-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        {userDetails.phone}
                    </div>
                </div>
            </div>
        </div>
    )
};
export default UserCardDetails;