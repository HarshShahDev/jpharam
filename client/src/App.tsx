import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/App.css";
import AppContainer from "./components/AppContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<AppContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
