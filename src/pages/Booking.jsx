import React from "react";
import SocialLinks from "../components/SocialLinks";

export default function Booking() {
  return (
    <main className="min-h-screen bg-[--hh-paper] px-4 py-12">
      <section className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl md:text-5xl">Contact / Booking</h1>

        <p className="mb-6 text-[--hh-ink]/80">
          All tattoos are custom. For pricing, duration, and consultation,
          please contact us directly or visit the studio in person.
        </p>

        <div className="rounded-2xl border border-[--hh-border] bg-[--hh-paper-soft] p-6 shadow-sm">
          <p className="mb-2">Phone: (815)999-7442</p>
          <p className="mb-6">Email: shelby@hardhoneyink.com</p>

          <SocialLinks />
        </div>
      </section>
        <section className="mx-auto mt-12 max-w-4xl">
        <h2 className="mb-4 text-3xl md:text-4xl">Location</h2>
        <p className="mb-6 text-[--hh-ink]/80">
          Hard Honey Ink is located at 403 S Main St, Jacksonville, IL.
        </p>
      <iframe
  title="Hard Honey Ink Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.3903946888004!2d-90.23210682402275!3d39.73088067155815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87dfebfc258affe5%3A0xce9c6d515c2a7f08!2s403%20S%20Main%20St%2C%20Jacksonville%2C%20IL%2062650!5e0!3m2!1sen!2sus!4v1779141928626!5m2!1sen!2sus"
  width="100%"
  height="100%"
  style={{ border: 0, minHeight: "450px" }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
        </section>
    </main>
  );
}