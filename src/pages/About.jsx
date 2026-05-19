import React, { useEffect } from "react";
import { artists } from "../data/artists";
import { useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    const scrollToArtist = () => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    setTimeout(scrollToArtist, 100);
  }, [location]);

  return (
    <main className="min-h-screen bg-[--hh-paper] px-4 py-12">
      <section className="mx-auto max-w-6xl">
        <h1 className="script-font mb-12 px-3 pb-3 text-center text-6xl leading-[1.7] md:text-7xl">
          Meet The Artists
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {artists.map((artist) => (
            <article
              id={artist.id}
              key={artist.id}
              className="scroll-mt-36 overflow-hidden rounded-2xl border border-[--hh-border] bg-[--hh-paper-soft] shadow-sm md:scroll-mt-40"
            >
              <div className="bg-black">
                <img
                  src={artist.photo}
                  alt={`${artist.name}, ${artist.role}`}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="script-font px-3 pb-3 text-5xl leading-[1.75] md:text-6xl">
                  {artist.name}
                </h2>

                <p className="serif-font mb-6 uppercase tracking-[0.18em] text-[--hh-honey]">
                  {artist.role}
                </p>

                <div className="serif-font space-y-5 leading-relaxed text-[--hh-ink]/80">
                  {artist.bio
                    .split(/\r?\n\r?\n/)
                    .filter((paragraph) => paragraph.trim() !== "")
                    .map((paragraph, index) => (
                      <p key={index}>{paragraph.trim()}</p>
                    ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {artist.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="serif-font rounded-full border border-[--hh-border] bg-black/20 px-4 py-1 text-sm uppercase tracking-wide text-[--hh-ink]/85"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}