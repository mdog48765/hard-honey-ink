import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Booking from "./pages/Booking";
import "@fontsource/great-vibes";


export default function App() {
  return (
    <div className="min-h-screen bg-[--hh-paper] text-[--hh-ink]">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}