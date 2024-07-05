import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Location from "./pages/Location";
import Welcome from "./components/Welcome";
import { useState } from "react";

function App() {
  const [hours, setTime] = useState("");
  const [theme, setTheme] = useState("day");
  const getTime = () => {
    setInterval(() => {
      const today = new Date();
      const hours = today.getHours();
      setTime(hours);
      setTheme(hours > 19 ? "dark" : "light");
    }, 5);
  };
  useState(() => {
    getTime();
  }, []);

  return (
    <div className={theme}>
      <BrowserRouter>
        <Welcome />
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/:location" element={<Location theme={theme} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
