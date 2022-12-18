import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "@/components/Navbar";

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
        <div />
      ) : (
        <div>
          {/* <Routing /> */}
          <Navbar />
        </div>
      )}
    </div>
  );
}

export default App;
