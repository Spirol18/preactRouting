import { useState } from "react";
import "./App.css";
import Home from "./Components/Header";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/footer";
import { BrowserRouter, Link, NavLink, Router } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
        <About />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
