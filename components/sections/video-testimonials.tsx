"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import type { VideoTestimonial } from "@/lib/data";
import { videoTestimonials } from "@/lib/data";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Reveal } from "@/components/ui/reveal";

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

function Avatar({ item, size }: { item: VideoTestimonial; size: "sm" | "md" }) {
  const box = size === "md" ? "h-11 w-11" : "h-10 w-10";

  if (!item.photo) {
    return (
      <span
        aria-hidden="true"
        className={`flex ${box} shrink-0 items-center justify-center rounded-full bg-[#0066b2] text-sm font-semibold text-white`}
      >
        {initials(item.name)}
      </span>
    );
  }

  return (
    <span className={`relative ${box} shrink-0 overflow-hidden rounded-full bg-muted`}>
      <Image src={item.photo} alt="" fill sizes="44px" className="object-cover" />
    </span>
  );
}

function VideoPlayer({ item }: { item: VideoTestimonial }) {
  if (item.youtubeId) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
        title={`${item.name} testimonial`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    );
  }

  return (
    <video
      key={item.videoSrc}
      src={item.videoSrc}
      poster={item.thumbnail}
      controls
      autoPlay
      playsInline
      preload="auto"
      className="h-full w-full"
    >
      <a href={item.videoSrc}>Download the video testimonial</a>
    </video>
  );
}

export function VideoTestimonials() {
  const items = videoTestimonials.filter((item) => item.videoSrc || item.youtubeId);
  const [active, setActive] = useState<VideoTestimonial | null>(null);

  if (items.length === 0) return null;

  return (
    <>
      <ul
        className={
          items.length === 1
            ? "mx-auto grid max-w-2xl gap-6"
            : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        }
      >
        {items.map((item, i) => (
          <li key={`${item.name}-${i}`}>
            <Reveal delay={(i % 3) * 0.1}>
            <button
              type="button"
              onClick={() => setActive(item)}
              aria-label={`Play video testimonial from ${item.name}`}
              className="group w-full overflow-hidden rounded-3xl border border-navy/10 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-navy-deep">
                {item.thumbnail ? (
                  <Image
                    src={item.thumbnail}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    className="transform-gpu object-cover transition-transform duration-500 [backface-visibility:hidden] group-hover:scale-105"
                  />
                ) : (
                  <video
                    src={`${item.videoSrc}#t=0.1`}
                    preload="metadata"
                    muted
                    playsInline
                    disablePictureInPicture
                    aria-hidden="true"
                    tabIndex={-1}
                    className="pointer-events-none h-full w-full transform-gpu object-cover transition-transform duration-500 [backface-visibility:hidden] [will-change:transform] group-hover:scale-105"
                  />
                )}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/10 to-transparent"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#0066b2] shadow-lg transition duration-300 group-hover:scale-110 group-hover:bg-white"
                >
                  <Play className="ml-0.5 h-7 w-7 fill-current" />
                </span>
                {item.duration && (
                  <span className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-0.5 text-xs font-semibold text-white">
                    {item.duration}
                  </span>
                )}
              </div>

              <div className="p-6">
                {item.headline && (
                  <p className="font-heading text-base font-semibold leading-snug text-[#0066b2]">
                    &ldquo;{item.headline}&rdquo;
                  </p>
                )}
                <div className={`flex items-center gap-3 ${item.headline ? "mt-5" : ""}`}>
                  <Avatar item={item} size="md" />
                  <div>
                    <p className="font-heading font-semibold text-[#000]">{item.name}</p>
                    <p className="text-sm text-navy/60">
                      {item.role}
                      {item.company && ` · ${item.company}`}
                    </p>
                  </div>
                </div>
              </div>
            </button>
            </Reveal>
          </li>
        ))}
      </ul>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-3xl overflow-hidden p-0 sm:max-w-3xl">
          {active && (
            <>
              <DialogTitle className="sr-only">
                Video testimonial from {active.name}
              </DialogTitle>
              <div className="aspect-video w-full bg-black">
                <VideoPlayer item={active} />
              </div>
              <div className="flex items-center gap-3 p-5">
                <Avatar item={active} size="sm" />
                <div>
                  <p className="font-heading font-semibold text-[#000]">{active.name}</p>
                  <p className="text-sm text-navy/60">
                    {active.role}
                    {active.company && ` · ${active.company}`}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
