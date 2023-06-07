import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/App.css";
import AppContainer from "./components/AppContainer";
import ContactNav from "./components/ContactNav";
import PrimaryNav from "./components/PrimaryNav";

function App() {
  return (
    <>
      <ContactNav />
      <PrimaryNav />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<AppContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
