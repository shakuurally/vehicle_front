import Link from "next/link";
import {useRouter } from "next/router";
import { sidebarData } from "../../../utils/utils";
export default function LgSidebar({ Collapse }) {
  const router = useRouter();

 
  return (
    <div>
      {/* Sidebar */}
      <div
        className={`  w-56  min-h-screen overflow-hidden bg-[#00243F] border-r sidebar  transition-all duration-300 ease-in-out
   shadow-lg
        ${Collapse && "w-[3.35rem]  bg-[#00243F]  shadow-lg"}
        `}
      >
        <div className="flex flex-col justify-between h-screen pt-2 pb-6">
          <div>
            <div className="w-max p-2.5">
              <img
                src="https://tailus.io/images/logo.svg"
                className="w-32"
                alt=""
              />
            </div>
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
                          className={`relative flex items-center px-4 py-2.5 space-x-4 text-gray-600 bg-gradient-to-r  ${
                            link == path && "bg-blue-700  text-white"
                          }`}
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
    </div>
  );
}
