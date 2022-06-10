import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import {LandingPage} from "./pages/landing-page/Landing-page"

export default function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </div>
  );
}
