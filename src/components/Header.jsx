import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[--hh-border] bg-[--hh-paper-soft]/95 backdrop-blur">
      <div className="w-full max-w-[1600px] mx-auto px-6">
        <div className="h-24 md:h-28 flex items-center justify-between">

          {/* Logo */}
          <Link to="/">
            <img
              src="/hard-honey-logo.png"
              alt="Hard Honey Ink Logo"
              className="h-20 md:h-28 w-auto max-w-[250px] object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-[--hh-ink]">
            <Link to="/" className="hover:text-[--hh-honey] transition-colors">Home</Link>
            <Link to="/portfolio" className="hover:text-[--hh-honey] transition-colors">Portfolio</Link>
                    <Link to="/booking" className="hover:text-[--hh-honey] transition-colors">Booking</Link>
    <Link to="/about" className="hover:text-[--hh-honey] transition-colors">About</Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className={`block h-0.5 w-6 bg-[--hh-ink] transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block h-0.5 w-6 bg-[--hh-ink] transition-opacity ${mobileOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-0.5 w-6 bg-[--hh-ink] transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden mt-2 flex flex-col gap-3 pb-4 text-[--hh-ink]">
            <Link to="/" className="hover:text-[--hh-honey]" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link to="/portfolio" className="hover:text-[--hh-honey]" onClick={() => setMobileOpen(false)}>Portfolio</Link>
                   <Link to="/booking" className="hover:text-[--hh-honey]" onClick={() => setMobileOpen(false)}>Booking</Link>
     <Link to="/about" className="hover:text-[--hh-honey]" onClick={() => setMobileOpen(false)}>About</Link>
          </div>
        )}
      </div>
    </header>
  );
}