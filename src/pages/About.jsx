import React from "react";
import { artists } from "../data/artists";

export default function About() {
  return (
    <main className="min-h-screen bg-[--hh-paper] px-4 py-12">
      <section className="mx-auto max-w-6xl">
        <h1 className="script-font mb-12 px-3 pb-3 text-center text-6xl leading-[1.7] md:text-7xl">
          Meet The Artists
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {artists.map((artist) => (
            <article
              key={artist.id}
              className="overflow-hidden rounded-2xl border border-[--hh-border] bg-[--hh-paper-soft] shadow-sm"
            >
              <div className="bg-black">
                <img
                  src={artist.photo}
                  alt={`${artist.name}, ${artist.role}`}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="script-font px-2 pb-2 text-5xl leading-[1.7]">
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