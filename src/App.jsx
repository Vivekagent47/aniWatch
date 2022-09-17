import React from "react";
import Logo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center flex-col h-screen p-4 pb-16">
      <div className="flex justify-center items-center flex-col flex-1">
        <img className="h-auto w-20 mb-4" alt="Logo" src={Logo} />
        <h1 className=" text-3xl font-semibold text-dark-blue tracking-widest">
          Hello world!
        </h1>
      </div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-sm text-gray">
          Why do you want to motivate yourself?
        </h1>
      </div>
    </div>
  );
}

export default App;
