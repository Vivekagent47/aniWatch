import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Onboarding/Login";
import Onboarding from "./pages/Onboarding/Onboarding";

const Routing = () => (
  <Routes>
    <Route path="/" element={<Onboarding />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default Routing;
