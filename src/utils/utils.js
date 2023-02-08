// import useJwt from "@/auth/jwt/useJwt";
import axios from "axios";
import { getCookie, removeCookies } from "cookies-next";
import Router from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { HomeIcon, OfficeBuildingIcon } from "@heroicons/react/outline";
export const logout = () => {
  // write head login and remove  cookie
  Router.replace("/");
  new Promise((resolve) => {
    removeCookies("Token");
    removeCookies("userToken");
  }).then(() => {
    removeCookies();
  });
};
export function useVehicleData() {
  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [noAccess, setNoAccess] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const AuthToken = getCookie("Token");
    if (AuthToken) {
      axios({
        method: "get",
        url: "http://192.168.215.210:9001/vehicles/",
        headers: {
          Authorization: `Bearer ${AuthToken}`,
        },
      })
        .then((res) => {
          if (!res.data.type) {
            setVehicles(res.data);
            setIsLoading(false);
          } else {
            setIsLoading(false);
            setError(res.data.description);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setError(error.message);
          setIsLoading(false);
        });
    } else {
      setNoAccess("You Don't have access, please add Vehicle First");
      setIsLoading(false);
    }
  }, []);

  return { vehicles, isLoading, error, noAccess };
}

export function AddVehicle() {
  return (
    <Link href="http://192.168.215.210:9001/connect">
      <a className="text-sm font-medium leading-none text-white">
        <button className="inline-flex items-start justify-start px-6 py-3 bg-blue-500 rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 sm:ml-3 hover:bg-indigo-600 focus:outline-none">
          Add Vehicle
        </button>
      </a>
    </Link>
  );
}

export const sidebarData = [
  {
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "dashboard",
  },

  {
    title: "Vehicles",
    icon: <OfficeBuildingIcon />,
    link: "vehicles",
  },
  //
];
 