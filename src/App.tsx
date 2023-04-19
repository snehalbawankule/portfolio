import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./components/about";
//import Header from "./components/header";
import Header from "./components/header/header";
import Home from "./components/home";
import ContactUs from "./components/contact";
import Skills from "./components/skills";
import Experience from "./components/experience";
import All from "./components/all";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      {location.pathname === `/` ? <All /> : null}

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
}
export default App;
