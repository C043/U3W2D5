import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Location from "./pages/Location";
import Welcome from "./components/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Welcome />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:location" element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
