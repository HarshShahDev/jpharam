import { Route, Routes } from "react-router-dom";
import Login from "../../pages/Login";
import Home from "../../pages/Home";

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
