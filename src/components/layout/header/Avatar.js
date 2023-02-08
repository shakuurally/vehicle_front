import { Menu } from "@headlessui/react";
import Image from "next/image";
import avatar from "../../../assets/avatar.png"; 
import { logout } from "../../../utils/utils";
import {ChevronDownIcon} from '@heroicons/react/outline'
export default function Avatar() { 
  return (
    <div className="flex justify-end px-6 py-3 ">
      <Menu as="div" className="relative">
        
        <Menu.Button className="flex items-center cursor-pointer ">
          <Image
            src={avatar}
            width={30}
            height={30}
            className="border-2 rounded-full border-slate-200"
            alt="avatar"
          />
          <ChevronDownIcon
            className="w-3 ml-2" 
           /> 
        </Menu.Button>
 
          <Menu.Items className="absolute right-0 w-48 mt-2 overflow-hidden text-gray-700 origin-top-right bg-white border rounded-md shadow-lg focus:outline-none bg-gray-800 text-gray-200">
            <Menu.Item
              v-slot="{active}"
              onClick={() => {
                logout();
              }}
            >
              <a className="block px-4 py-2 text-sm cursor-pointer ">Log out</a>
            </Menu.Item>
          </Menu.Items> 
      </Menu>
    </div>
  );
}
