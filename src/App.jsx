import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Drivers from "./pages/Drivers";
import Layouts from "./loyout";
import GoogleRegister from "./google";

function App() {
  return (
    <Routes>
      <Route index element={<Start />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<Layouts />}>
        <Route path="/home" element={<Home />} />
        <Route path="/drivers" element={<Drivers />} />
      </Route>
    </Routes>
  );
}

export default App;
