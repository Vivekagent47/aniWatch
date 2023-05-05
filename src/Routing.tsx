import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, SignUp, Onboarding } from "./pages/Onboarding";
import { Home } from "./pages/Home";

const Routing = () => (
  <Routes>
    <Route path="/" element={<Onboarding />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signUp" element={<SignUp />} />
    <Route path="/home" element={<Home />} />
  </Routes>
);

export default Routing;
