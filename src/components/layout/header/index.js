import { useRouter } from "next/router";
import { useEffect } from "react";
import { AddVehicle, logout } from "../../../utils/utils"; 
function Header({ sidebarOpen, setSidebarOpen, Collapse, setCollapse }) {
  const router = useRouter(); 
  useEffect(() => {
    if (
      router.pathname ==
      "/callback?code=d8c83653-7442-4e47-8fe8-863ad69a4a70&state=%7Bstate%7D"
    ) {
      alert("data found");
    }
  }, []);
  return (
    <header
      className={`sticky text-gray-500 py-3 bg-white   top-0  border-b border-slate-200 z-30`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex items-center space-x-2">
            <button
              className="text-slate-500 lg:hidden hover:text-slate-600 "
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>

            </button>
            {/* desktop menu */}
            <button
              className="hidden text-slate-500 lg:inline-flex hover:text-slate-600 "
              onClick={() => setCollapse(!Collapse)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>
            </button>
            <p className="text-sm font-medium text-gray-600 capitalize">
              {/* router pathname remove / */}
              {router.asPath.replace("/", "")}
            </p>
          </div>
          <div className="hidden md:flex space-x-3 items-center">
            <div>
              <h1>Active</h1>
              <div className="flex items-center space-x-2">
                <p className="bg-green-500 rounded-full w-2 h-2"></p>
                <h1>30</h1>
              </div>
            </div>
            <div>
              <h1>Offline</h1>
              <div className="flex items-center space-x-2">
                <p className="bg-gray-300 rounded-full w-2 h-2"></p>
                <h1>30</h1>
              </div>
            </div>
          </div>
          {/* Header: Right side */}
          <div className="flex items-center space-x-10 text-gray-600">
            <AddVehicle />
            {/* avatar and user role */}
            <div className="flex items-center h-24  cursor-pointer px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 "
                onClick={() => {
                  logout();
                }}
              >
                <path
                  strokelinecap="round"
                  strokelinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
            </div>
            {/* user avator */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
