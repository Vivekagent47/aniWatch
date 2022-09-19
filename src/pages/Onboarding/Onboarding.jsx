import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Angel from "../../assets/Angel";
import Onboarding1 from "../../assets/Onboarding1.webp";
import Onboarding2 from "../../assets/Onboarding2.webp";
import Onboarding3 from "../../assets/Onboarding3.webp";

// const targetSection = useRef(null);
// useEffect(() => {
//   const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
//   revealTl
//     .to(targetSection.current, { opacity: 1, duration: 2 })
//     .from(
//       targetSection.current,
//       { opacity: 0, duration: 0.5, stagger: 0.5 },
//       "<",
//     );
// }, []);

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  return (
    <div>
      {step === 0 ? (
        <div className="flex justify-center items-start flex-col h-screen">
          <img
            className=" h-2/3 w-screen aspect-auto"
            src={Onboarding1}
            alt="Onboarding 1"
          />
          <div className="flex justify-center items-start flex-col flex-1 p-8 w-full">
            <span className="text-3xl  text-dark-blue">
              Welcome to
              <br /> <span className=" font-bold">Cowork</span>
            </span>
            <div className="flex justify-between items-center w-full mt-4">
              <span className="text-sm w-2/3  text-gray">
                Work and Organize events with friends outside the office to get
                rid of boredom
              </span>
              <div
                className="bg-dark-blue p-4 rounded-lg"
                onClick={() => setStep(step + 1)}
              >
                <Angel width="16px" height="16px" classSvg="fill-white" />
              </div>
            </div>
          </div>
        </div>
      ) : step === 1 ? (
        <div className="flex justify-center items-start flex-col h-screen">
          <img
            className=" h-2/3 w-screen aspect-auto"
            src={Onboarding2}
            alt="Onboarding 2"
          />
          <div className="flex justify-center items-start flex-col flex-1 p-8 w-full">
            <span className="text-3xl  text-dark-blue">
              Find a Working
              <br /> <span className=" font-bold">Space</span>
            </span>
            <div className="flex justify-between items-center w-full mt-4">
              <span className="text-sm w-2/3  text-gray">
                Find coworking space easily and quickly through this application
              </span>
              <div
                className="bg-dark-blue p-4 rounded-lg"
                onClick={() => setStep(step + 1)}
              >
                <Angel width="16px" height="16px" classSvg="fill-white" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-start flex-col h-screen">
          <img
            className=" h-2/3 w-screen aspect-auto"
            src={Onboarding3}
            alt="Onboarding 3"
          />
          <div className="flex justify-center items-start flex-col flex-1 p-8 w-full">
            <span className="text-3xl  text-dark-blue">
              Create An
              <br /> <span className=" font-bold">Event</span>
            </span>
            <div className="flex justify-between items-center w-full mt-4">
              <span className="text-sm w-2/3  text-gray">
                Create your event by determining the place that has been
                provided
              </span>
              <div
                className="bg-dark-blue p-4 rounded-lg"
                onClick={() => navigate("/login")}
              >
                <Angel width="16px" height="16px" classSvg="fill-white" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Onboarding;
