import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import Login from "../../pages/Login";

export default function AppContainer() {
  return (
    <Routes>
      <Route>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
