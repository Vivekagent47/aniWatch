import React from "react";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import apis from "@/apis";
import LoginImg from "@/assets/images/Login.webp";
// import { Gmail, Facebook, Twitter } from "@/assets/icons";

const Login = () => {
  const [loginData, setLoginData] = React.useReducer(
    (
      state: {
        email: string;
        password: string;
      },
      newState: {
        type: "email" | "password";
        value: string;
      },
    ) => {
      return { ...state, [newState.type]: newState.value };
    },
    { email: "", password: "" },
  );

  const login = useMutation("login", () => {
    return apis.auth.login(loginData);
  });

  return (
    <form className="flex justify-center items-start flex-col h-screen">
      <img
        className=" h-1/3 w-screen aspect-auto"
        src={LoginImg}
        alt="Login Img"
      />
      <div className="w-full flex-1 px-8 pt-10">
        <span className="text-2xl font-bold text-blue-700">
          Welcome,
          <br /> Please Login First
        </span>
        <div className="flex justify-center items-start flex-col my-4">
          <span className="text-sm font-semibold text-gray-700">Email</span>
          <input
            value={loginData.email}
            onChange={(e) =>
              setLoginData({
                type: "email",
                value: e.target.value,
              })
            }
            className="text-sm p-4 mt-2 bg-gray-50 rounded-lg w-full placeholder:text-gray-500 focus:outline-none text-gray-700"
            type="email"
            placeholder="yourName@email.com"
          />
        </div>
        <div className="flex justify-center items-start flex-col my-4">
          <span className="text-sm font-semibold text-gray-700">Password</span>
          <input
            value={loginData.password}
            onChange={(e) =>
              setLoginData({
                type: "password",
                value: e.target.value,
              })
            }
            className="text-sm p-4 mt-2 bg-gray-50 rounded-lg w-full placeholder:text-gray-500 focus:outline-none text-gray-700"
            type="password"
            placeholder="******"
          />
        </div>
        <div className="flex justify-between items-center flex-row my-4">
          <div className="flex gap-2">
            {/* <Gmail height="24px" width="24px" />
            <Facebook height="24px" width="24px" />
            <Twitter height="24px" width="24px" /> */}
          </div>
          <span className="text-xs text-gray-400">Forget Password?</span>
        </div>
      </div>
      <div className="w-full px-8 mb-8 text-center">
        <button
          className="bg-blue-700 text-sm text-white font-semibold rounded-lg border-none shadow-md w-full py-4 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          type="button"
          onClick={() => login.mutate()}
        >
          Login
        </button>
        <div className="mt-2">
          <span className="text-xs text-gray-600">
            Don&apos;t Have An Account yet?
            <Link to="/signup" className="text-gray-800 font-bold px-2">
              Register
            </Link>
          </span>
        </div>
      </div>
    </form>
  );
};

export default Login;
