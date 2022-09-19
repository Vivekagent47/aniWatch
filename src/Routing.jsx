import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Onboarding/Login";
import Signup from "./pages/Onboarding/SignUp";
import Onboarding from "./pages/Onboarding/Onboarding";

const Routing = () => (
  <Routes>
    <Route path="/" element={<Onboarding />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
  </Routes>
);

export default Routing;
