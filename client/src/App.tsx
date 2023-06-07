import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/App.css";
import AppContainer from "./components/AppContainer";
import Stats from "./components/Stats";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Stats />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<AppContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
