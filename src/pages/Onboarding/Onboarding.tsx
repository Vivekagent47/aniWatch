import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Onboarding1 from "@/assets/images/Onboarding1.webp";
import Onboarding2 from "@/assets/images/Onboarding2.webp";
import Onboarding3 from "@/assets/images/Onboarding3.webp";
import { Angel } from "@/assets/icons";

interface IChildProps {
  title: string;
  subTitle: string;
  detail: string;
  image: string;
  stepIncrease: () => void;
}

const ChildOnboard = ({
  title,
  subTitle,
  stepIncrease,
  image,
  detail,
}: IChildProps) => (
  <div className="flex justify-center items-start flex-col h-screen">
    <img className=" h-2/3 w-screen aspect-auto" src={image} alt="Onboarding" />
    <div className="flex justify-center items-start flex-col flex-1 p-8 w-full">
      <span className="text-3xl  text-dark-blue">
        {title}
        <br /> <span className=" font-bold">{subTitle}</span>
      </span>
      <div className="flex justify-between items-center w-full mt-4">
        <span className="text-sm w-2/3  text-gray">{detail}</span>
        <div
          className="bg-dark-blue p-4 rounded-lg"
          onClick={() => stepIncrease()}
        >
          <Angel width="16px" height="16px" classSvg="fill-white" />
        </div>
      </div>
    </div>
  </div>
);

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  return (
    <div>
      {step === 0 ? (
        <ChildOnboard
          title="Welcome to"
          subTitle="Cowork"
          detail="Work and Organize events with friends outside the office to get rid of boredom"
          image={Onboarding1}
          stepIncrease={() => setStep(step + 1)}
        />
      ) : step === 1 ? (
        <ChildOnboard
          title="Find a Working"
          subTitle="Space"
          detail="Find coworking space easily and quickly through this application"
          image={Onboarding2}
          stepIncrease={() => setStep(step + 1)}
        />
      ) : (
        <ChildOnboard
          title="Create An"
          subTitle="Event"
          detail="Create your event by determining the place that has been provided"
          image={Onboarding3}
          stepIncrease={() => navigate("/login")}
        />
      )}
    </div>
  );
};
export default Onboarding;
