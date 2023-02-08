import { MenuAlt2Icon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AddVehicle } from "../../../utils/utils";
import Avatar from "./Avatar";
function Header({ sidebarOpen, setSidebarOpen, Collapse, setCollapse }) {
  const router = useRouter();
  const [DropdownOpen, setDropdownOpen] = useState(false);
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
              <MenuAlt2Icon className="w-6 h-6" />
            </button>
            {/* desktop menu */}
            <button
              className="hidden text-slate-500 lg:inline-flex hover:text-slate-600 "
              onClick={() => setCollapse(!Collapse)}
            >
              <MenuAlt2Icon className="w-6 h-6" />
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
          <div className="flex items-center md:space-x-10 text-gray-600">
            <AddVehicle />
            {/* avatar and user role */}
            <div
              className="flex items-center h-24 "
              onClick={() => setDropdownOpen(!DropdownOpen)}
            >
              <Avatar />
            </div>
            {/* user avator */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
