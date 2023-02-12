import Image from "next/image";
import Car from "../assets/car.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button } from "../components/controllers";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Router from "next/router";
import { setCookies } from "cookies-next";
import { base_url } from "../utils/utils";
const index = () => { 
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false); 
 
  const onSubmit = (data) => {
    const res = axios.post(
      `http://${base_url}/v1/tenant/user/login`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          tenant: "customer-1",
        },
      }
    );

    setLoading(true);

    res
      .then((res) => {
        if (res.data.user) {
          Swal.fire({
            title: "Success!",
            text: "Logged In Successfully!",
            icon: "success",
          });
          Router.replace("/vehicles");
        }
        setCookies("userToken", res.data.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        if (!err.response.data) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "network error",

          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.error,
          });
        }
      });
  }; 
  return (
    <div className="bg-[#FAFBFB] md:px-20 h-screen flex flex-wrap">
      <div className="md:w-1/2 hidden md:flex ">
        <Image
          src={Car}
          alt="Car"
          className="w-full h-full object-cover"
          height={800}
          width={787}
          layout="intrinsic"
        />
      </div>
      <div className="flex items-center justify-center px-3 md:px-24 h-full w-full  md:w-1/2">
        <form
          className="bg-white rounded-lg shadow-lg w-full p-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="block font-bold mb-6 text-gray-700" htmlFor="name">
            Sign in
          </h1>
          {errors.name && (
          <div
            id="alert-border-2"
            className="flex p-4 mb-4 bg-red-100 border-red-500 border-t-1 dark:bg-red-200"
            role="alert"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-red-700"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-Rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-Rule="evenodd"
              ></path>
            </svg>
            <div className="ml-3 text-sm font-medium text-red-700">
              User name is required........
            </div> 
          </div>
        )}
          {errors.password  && (
          <div
            id="alert-border-2"
            className="flex p-4 mb-4 bg-red-100 border-red-500 border-t-1 dark:bg-red-200"
            role="alert"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-red-700"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-Rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-Rule="evenodd"
              ></path>
            </svg>
            <div className="ml-3 text-sm font-medium text-red-700">
            password is required........
            </div> 
          </div>
        )}
          <div className="mb-4">
            <label className="block font-bold mb-2 text-gray-700">Name</label>
            <input
className="block w-full py-4 px-3 text-gray-900 border border-gray-300 rounded-lg sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"               id="name"
              type="text"
              name="name"
              placeholder="John Doe"
              ref={register({ required: true })}
              />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2 text-gray-700">
              Password
            </label>
            <input
             className="block w-full py-4 px-3 text-gray-900 border border-gray-300 rounded-lg sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              id="password"
              type="password"
              name="password"
              placeholder="********"
              ref={register({ required: true })}
              />
          </div> 
          {loading ? <Button title="Loading " bg= "bg-[#FD5353]" /> : <Button title="Login " bg="bg-blue-500" />}

   
        </form>
      </div>
    </div>
  );
};

export default index;
