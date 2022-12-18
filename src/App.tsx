import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Routing from "@/Routing";
import Logo from "@/assets/react.svg";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const result =
      typeof window.orientation === "undefined" &&
      navigator.userAgent.indexOf("IEMobile") === -1;
    window.history.scrollRestoration = "manual";

    setIsDesktop(result);
  }, [isDesktop]);

  return (
    <div>
      {isLoading ? (
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
      ) : (
        <div>
          <Routing />
          <Navbar />
        </div>
      )}
    </div>
  );
}

export default App;
