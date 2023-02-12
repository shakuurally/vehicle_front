// import useJwt from "@/auth/jwt/useJwt";
import axios from "axios";
import { getCookie, removeCookies } from "cookies-next";
import Router from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
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
        url: `http://${base_url}/Vehicle/vehicles/`,
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
  const link = `http://${base_url}/Vehicle/connect`
  return (
    <Link href={link}> 
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
  Add Vehicle
</button> 
    </Link>
  );
}

export const sidebarData = [
  {
    title: "Dashboard",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>,  
    link: "dashboard",
  },

  {
    title: "Vehicles",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>
  ,
    link: "vehicles",
  },
  //
];
 

export const base_url = '172.20.10.2:9001/api/'