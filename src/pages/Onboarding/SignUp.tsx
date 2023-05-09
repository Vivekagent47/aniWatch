import React from "react";
import { Link } from "react-router-dom";
import SignUpImg from "@/assets/images/SignUp.webp";
// import { Gmail, Facebook, Twitter } from "@/assets/icons";

const SignUp = () => {
  const [passwordCheck, setPasswordCheck] = React.useState(true);
  const [signUpData, setSignUpData] = React.useReducer(
    (
      state: {
        firts_name: string;
        last_name: string;
        email: string;
        password: string;
        password_again: string;
      },
      newState: {
        type:
          | "firts_name"
          | "last_name"
          | "email"
          | "password"
          | "password_again";
        value: string;
      },
    ) => {
      if (newState.type === "password_again") {
        setPasswordCheck(newState.value === state.password);
      }

      return { ...state, [newState.type]: newState.value };
    },
    {
      email: "",
      password: "",
      password_again: "",
      firts_name: "",
      last_name: "",
    },
  );

  return (
    <div className="flex justify-center items-start flex-col h-screen">
      <img
        className="h-1/5 w-full object-cover"
        src={SignUpImg}
        alt="SignUp Img"
      />
      <div className="w-full flex-1 px-8 pt-8">
        <span className="text-2xl font-bold text-blue-700">
          Welcome,
          <br /> Register To Access
        </span>
        <div className="flex gap-4 justify-center items-start my-4">
          <div className="flex justify-center items-start flex-col">
            <span className="text-sm font-semibold text-gray-700">
              Your First Name
            </span>
            <input
              value={signUpData.firts_name}
              onChange={(e) =>
                setSignUpData({
                  type: "firts_name",
                  value: e.target.value,
                })
              }
              className="text-sm p-4 mt-2 bg-gray-50 rounded-lg w-full placeholder:text-gray-500 focus:outline-none text-gray-700"
              type="text"
              placeholder="Your first Name"
            />
          </div>
          <div className="flex justify-center items-start flex-col">
            <span className="text-sm font-semibold text-gray-700">
              Your Last Name
            </span>
            <input
              value={signUpData.last_name}
              onChange={(e) =>
                setSignUpData({
                  type: "last_name",
                  value: e.target.value,
                })
              }
              className="text-sm p-4 mt-2 bg-gray-50 rounded-lg w-full placeholder:text-gray-500 focus:outline-none text-gray-700"
              type="text"
              placeholder="Your last Name"
            />
          </div>
        </div>
        <div className="flex justify-center items-start flex-col my-4">
          <span className="text-sm font-semibold text-gray-700">Email</span>
          <input
            value={signUpData.email}
            onChange={(e) =>
              setSignUpData({
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
            value={signUpData.password}
            onChange={(e) =>
              setSignUpData({
                type: "password",
                value: e.target.value,
              })
            }
            className="text-sm p-4 mt-2 bg-gray-50 rounded-lg w-full placeholder:text-gray-500 focus:outline-none text-gray-700"
            type="password"
            placeholder="******"
          />
        </div>
        <div className="flex justify-center items-start flex-col my-4">
          <span className="text-sm font-semibold text-gray-700">
            Password Again
          </span>
          <input
            value={signUpData.password_again}
            onChange={(e) =>
              setSignUpData({
                type: "password_again",
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
        </div>
      </div>
      <div className="w-full px-8 mb-8 text-center">
        <button
          className="bg-blue-700 text-sm text-white font-semibold rounded-lg border-none shadow-md w-full py-4 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          type="button"
          // onClick={() => console.log("Signup")}
        >
          Signup
        </button>
        <div className="mt-2">
          <span className="text-xs text-gray-600">
            Already have an account?
            <Link to="/login" className="text-gray-800 font-bold px-2">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
