import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import ApiPage from "./components/ApiConsmuption/ApiPage";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/cards" element={<ApiPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
