import React, { useState, useEffect } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import Navbar from "@/components/Navbar";
import Routing from "@/Routing";
import Logo from "@/assets/Logos/AnimatedLogo";

function App() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center flex-col h-screen p-4 pb-16">
          <div className="flex justify-center items-center flex-col flex-1 gap-8">
            <Logo />
            <h1
              className=" text-3xl font-semibold text-blue-700 tracking-widest uppercase"
              style={{
                animation: `name_appear 1000ms ease-in-out forwards`,
              }}
            >
              CoWork
            </h1>
          </div>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-sm text-gray-900">
              Why do you want to motivate yourself?
            </h1>
          </div>
        </div>
      ) : (
        <div>
          <Routing />
        </div>
      )}
      <ReactQueryDevtools />
      <Toaster position="bottom-center" />
    </div>
  );
}

export default App;
