import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/about";
import Header from "./components/header/header";
import Home from "./components/home";
import ContactUs from "./components/contact";
import Skills from "./components/skills";
import ExperienceList from "./components/experience";
import { Posts } from "./localstorage";
import Experience from "./components/experience/experience";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<ExperienceList />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/experience/:id" element={<Experience />} />
      </Routes>
      <Posts />
    </>
  );
}
export default App;
