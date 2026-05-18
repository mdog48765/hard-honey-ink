import React from "react";
import { artists } from "../data/artists";

export default function About() {
  return (
    <main className="min-h-screen bg-[--hh-paper] px-4 py-12">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl text-center mb-10">
          Meet theArtists
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {artists.map((artist) => (
            <article
              key={artist.id}
              className="rounded-2xl border border-[--hh-border] bg-[--hh-paper-soft] p-6 shadow-sm"
            >
              <img
                src={artist.photo}
                alt={`${artist.name}, ${artist.role}`}
                className="w-full aspect-[4/3] object-cover rounded-xl mb-5 bg-white/40"
              />

              <h2 className="text-3xl mb-1">{artist.name}</h2>
              <p className="text-[--hh-ink]/70 mb-4">{artist.role}</p>

              <p className="text-[--hh-ink]/80 mb-4">{artist.bio}</p>

              <div className="flex flex-wrap gap-2">
                {artist.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="rounded-full bg-[--hh-honey]/20 px-3 py-1 text-sm"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}