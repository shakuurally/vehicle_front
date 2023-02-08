import Image from "next/image";
import Car from "../assets/car.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, LoaderButton } from "../components/controllers";
import { useState } from "react";
import Swal from "sweetalert2";
import Router from "next/router";
import { setCookies } from "cookies-next";
const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const onSubmit = (data) => {
    const res = axios.post(
      "http://192.168.215.210:9001/api/v1/tenant/user/login",
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
          <div className="mb-4">
            <label className="block font-bold mb-2 text-gray-700">Name</label>
            <input
              className="appearance-none w-full py-4 px-3 text-gray-700 leading-tight focus:ring-blue-400 focus:border-none outline-none border-gray-200 focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              placeholder="John Doe"
              ref={register}
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2 text-gray-700">
              Password
            </label>
            <input
              className="appearance-none w-full py-4 px-3 text-gray-700 leading-tight focus:ring-blue-400  focus:border-none outline-none border-gray-200 focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="********"
              ref={register}
            />
          </div>
          {loading ? <LoaderButton /> : <Button title="Login " />}

   
        </form>
      </div>
    </div>
  );
};

export default index;
