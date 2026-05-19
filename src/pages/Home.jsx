import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-black">
      {/* Video placeholder */}
      <video
  className="absolute inset-0 h-full w-full object-cover"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
>
  <source src="/videos/shop-loop.mp4" type="video/mp4" />
</video>

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

        {/* Primary CTA */}
        <Link
          to="/booking"
          className="serif-font inline-block rounded-full bg-[--hh-honey] px-8 py-3 text-base font-semibold uppercase tracking-wide text-[--hh-paper] transition-colors hover:bg-[--hh-honey-soft] sm:text-lg"
        >
          Contact / Booking
        </Link>

        {/* Secondary CTAs */}
        <div className="serif-font mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm uppercase tracking-[0.18em] text-white/70 sm:text-base">
          <Link
            to="/portfolio"
            className="transition-colors hover:text-[--hh-honey]"
          >
            View Portfolios
          </Link>

          <span className="text-white/30">•</span>

          <Link
            to="/about"
            className="transition-colors hover:text-[--hh-honey]"
          >
            Meet The Artists
          </Link>


        </div>
      </div>
    </section>
  );
}