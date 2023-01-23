const Layout = ({children}) => {
    return (
        <div className="flex flex-col min-h-[1050px] h-screen w-screen items-center md:flex-row  bg-gray-800 ">
            {children}
        </div>
    )
};;
export default Layout;