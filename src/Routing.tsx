import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, SignUp, Onboarding } from "./pages/Onboarding";

const Routing = () => (
  <Routes>
    <Route path="/" element={<Onboarding />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signUp" element={<SignUp />} />
  </Routes>
);

export default Routing;
