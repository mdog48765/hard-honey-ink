import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-black">
      {/* Video placeholder */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/placeholder.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-black/60"></div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center sm:px-6 md:px-12">
        {/* Logo */}
        <img
          src="/hard-honey-logo.png"
          alt="Hard Honey Ink"
          className="mb-8 w-full max-w-[950px] object-contain px-4"
        />

        {/* Supporting text */}
        <p className="serif-font mb-8 text-base uppercase tracking-[0.22em] text-white/85 sm:text-lg md:text-xl">
          Custom Tattoos · Jacksonville, IL
        </p>

        {/* CTA */}
        <Link
          to="/booking"
          className="serif-font inline-block rounded-full bg-[--hh-honey] px-8 py-3 text-base font-semibold uppercase tracking-wide text-[--hh-paper] transition-colors hover:bg-[--hh-honey-soft] sm:text-lg"
        >
          Contact / Booking
        </Link>
      </div>
    </section>
  );
}