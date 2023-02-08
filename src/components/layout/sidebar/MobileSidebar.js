/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { sidebarData } from "../../../utils/utils";
export default function MobileSidebar({ sidebarOpen, setSidebarOpen }) {
  const router = useRouter();

 
  const sidebar = useRef(null);
  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  // close on click outside
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClickOutside = (e) => {
    if (sidebar.current && !sidebar.current.contains(e.target)) {
      setSidebarOpen(false);
    }
  };
  useEffect(() => {
    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }
  }, [sidebarOpen, handleClickOutside]);
  return (
    <div className="shadow-xl">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-white text-white bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Sidebar */}
      <div
        className={`flex text-sm 	flex-col absolute z-40 left-0 top-0  
        transform h-screen    w-64 lg:w-72  shrink-0  bg-slate-700 p-4 transition-all duration-200 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}`}
        ref={sidebar}
      >
        {/* Logo */}
        <div className="w-40 pr-3 mb-3 ml-10 sm:px-2">
        <img
                src="https://tailus.io/images/logo.svg"
                className="w-32"
                alt=""
              />
          <hr className="mt-3  border-bn border-gray-600" />
        </div>
        {/* Links */}
        <div className="mt-5 text-gray-100 list-none">

        {sidebarData.map(
              (item, index) => {
                const link = item.link;
                const path = router.pathname.replace("/", "");
                return (
                  // eslint-disable-next-line react/jsx-key
                  <ul className="mt-6 space-y-2 tracking-wide">
                    <li className="min-w-max" key={item.link}>
                      <Link href={`${item.link}`}>
                        <a
                          aria-label="dashboard"
                          className={`relative flex items-center px-4 py-2.5 space-x-4 text-gray-300 bg-gradient-to-r  ${
                            link == path && "bg-blue-700  text-white"
                          }`}
                          onClick={ () =>setSidebarOpen(false)}
                        >
                          <span className="w-6 h-6 -ml-1">{item.icon}</span>
                          <span className="-mr-1 font-normal">
                            {item.title}
                          </span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                );
              }
              // eslint-disable-next-line react/jsx-key
            )}
        </div>
      </div>
    </div>
  );
}

// styles
