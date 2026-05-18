import React, { useEffect, useRef, useState } from "react";
import { artists } from "../data/artists";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function useTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none) and (pointer: coarse)");

    const checkTouch = () => {
      setIsTouchDevice(mediaQuery.matches);
    };

    checkTouch();
    mediaQuery.addEventListener("change", checkTouch);

    return () => {
      mediaQuery.removeEventListener("change", checkTouch);
    };
  }, []);

  return isTouchDevice;
}

function getPortfolioItem(item) {
  if (typeof item === "string") {
    return {
      type: "image",
      src: item,
    };
  }

  return item;
}

function ArtistGallery({ artist }) {
  const swiperRef = useRef(null);
  const isTouchDevice = useTouchDevice();

  return (
    <section className="rounded-2xl border border-[--hh-border] bg-[--hh-paper-soft] p-5 shadow-sm">
      <div className="mb-6 text-center">
<h2 className="script-font px-2 pb-2 text-5xl leading-[1.7] md:text-6xl">          {artist.name}
        </h2>

        <p className="serif-font text-base tracking-wide text-[--hh-ink]/80 md:text-lg">
          {artist.specialties.join(" · ")}
        </p>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-[--hh-border] bg-black">
        <Swiper
          modules={[Pagination, EffectFade]}
          pagination={{ clickable: true }}
          effect="fade"
          loop={artist.portfolio.length > 1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="bg-black touch-pan-y"
        >
          {artist.portfolio.map((rawItem, index) => {
            const item = getPortfolioItem(rawItem);

            return (
              <SwiperSlide key={`${item.src}-${index}`}>
                <div className="flex h-[560px] items-center justify-center bg-black">
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      className="h-full w-full object-contain"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={`${artist.name} tattoo portfolio ${index + 1}`}
                      className="h-full w-full object-contain"
                    />
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {!isTouchDevice && (
          <div className="pointer-events-none absolute inset-0 z-20">
            <button
              type="button"
              aria-label={`Previous ${artist.name} portfolio item`}
              onClick={() => swiperRef.current?.slidePrev()}
              className="pointer-events-auto absolute left-0 top-0 h-full w-1/2 cursor-pointer bg-transparent"
            />

            <button
              type="button"
              aria-label={`Next ${artist.name} portfolio item`}
              onClick={() => swiperRef.current?.slideNext()}
              className="pointer-events-auto absolute right-0 top-0 h-full w-1/2 cursor-pointer bg-transparent"
            />
          </div>
        )}
      </div>

      <p className="serif-font mt-5 text-center text-sm text-[--hh-ink]/60">
        {isTouchDevice
          ? `Swipe to view more work by ${artist.name}`
          : `Click left or right to view more work by ${artist.name}`}
      </p>
    </section>
  );
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[--hh-paper] px-4 py-12">
      <section className="mx-auto max-w-5xl">
        <h1 className="script-font mb-12 text-center text-6xl leading-[1.45] md:text-7xl">
          Portfolio
        </h1>

        <div className="space-y-12">
          {artists.map((artist) => (
            <ArtistGallery key={artist.id} artist={artist} />
          ))}
        </div>
      </section>
    </main>
  );
}