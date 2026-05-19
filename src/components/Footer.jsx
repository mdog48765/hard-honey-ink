import React from "react";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-[--hh-border] bg-[--hh-paper-soft]/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-8 text-center text-[--hh-ink]/80 md:flex-row md:justify-between md:text-left">
        <div>
          <p>&copy; {new Date().getFullYear()} Hard Honey Ink. All rights reserved.</p>
          <p>Custom Traditional & floral tattoos · Jacksonville, IL</p>
        </div>

        <SocialLinks />

        <img
          src="/hard-honey-logo2.png"
          alt="Hard Honey Ink secondary logo"
          className="h-28 w-auto md:h-36"
        />
      </div>
      <div className="bg-[--hh-paper-soft]/90 text-center text-sm text-[--hh-ink]/60 py-2">
        <p>
          Website by {"Michael Kyle"}
        </p>
      </div>
    </footer>
  );
}