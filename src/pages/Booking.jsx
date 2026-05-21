import React from "react";
import SocialLinks from "../components/SocialLinks";

export default function Booking() {
  return (
    <main className="min-h-screen bg-[--hh-paper] px-4 py-12">
      <section className="mx-auto max-w-5xl">
        <h1 className="script-font mb-10 px-3 pb-3 text-center text-6xl leading-[1.7] md:text-7xl">
          Contact / Booking
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Card */}
          <div className="rounded-2xl border border-[--hh-border] bg-[--hh-paper-soft] p-6 shadow-sm">
            <h2 className="serif-font mb-5 text-2xl uppercase tracking-wide text-[--hh-ink]">
              Studio Information
            </h2>

            <p className="serif-font mb-6 leading-relaxed text-[--hh-ink]/80">
              All tattoos are custom. For pricing, duration, and consultation,
              please contact us directly or visit the studio in person.
            </p>

            <div className="serif-font space-y-5 text-[--hh-ink]/80">
              <p>
                <span className="block text-sm uppercase tracking-wide text-[--hh-ink]/60">
                  Phone
                </span>
                <a
                  href="tel:+12172919781"
                  className="text-lg text-[--hh-ink] transition-colors hover:text-[--hh-honey]"
                >
                  (217) 291-9781
                </a>
              </p>

              <p>
                <span className="block text-sm uppercase tracking-wide text-[--hh-ink]/60">
                  Email
                </span>
                <a
                  href="mailto:shelby@hardhoneyink.com"
                  className="text-lg text-[--hh-ink] transition-colors hover:text-[--hh-honey]"
                >
                  shelby@hardhoneyink.com
                </a>
              </p>

              <p>
                <span className="block text-sm uppercase tracking-wide text-[--hh-ink]/60">
                  Location
                </span>
                <a
                  href="https://maps.app.goo.gl/d2CcvbksLje9449F6"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg text-[--hh-ink] transition-colors hover:text-[--hh-honey]"
                >
                  405 S Main St
                  <br />
                  Jacksonville, IL 62650
                </a>
              </p>
            </div>

            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-[--hh-border] bg-[--hh-paper-soft] shadow-sm">
            <iframe
              title="Hard Honey Ink Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.3931854492275!2d-90.23209962402277!3d39.730817971558125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87dfebfc25952fb5%3A0xf135216e8398b9b9!2s405%20S%20Main%20St%2C%20Jacksonville%2C%20IL%2062650!5e0!3m2!1sen!2sus!4v1779326522438!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "460px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}