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
<div className="serif-font mt-6 flex w-full max-w-md flex-col gap-3 px-6 sm:flex-row sm:justify-center sm:px-0">
  <Link
    to="/portfolio"
    className="rounded-full border border-white/25 px-5 py-2 text-center text-sm font-semibold uppercase tracking-[0.14em] text-white/85 transition-colors hover:border-[--hh-honey] hover:text-[--hh-honey]"
  >
    View Portfolio
  </Link>

  <Link
    to="/about"
    className="rounded-full border border-white/25 px-5 py-2 text-center text-sm font-semibold uppercase tracking-[0.14em] text-white/85 transition-colors hover:border-[--hh-honey] hover:text-[--hh-honey]"
  >
    Meet Artists
  </Link>
</div>
      </div>
    </section>
  );
}