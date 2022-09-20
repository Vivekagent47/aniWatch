import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
import FirstPage from "./pages/FirstPage/FirstPage";
// import Onboarding from "./pages/Onboarding/Onboarding";
import Routing from "./Routing";
import Navbar from "./components/Navbar";

function App() {
  // gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

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
        <FirstPage />
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
