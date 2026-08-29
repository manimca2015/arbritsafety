"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Shows a poster image with a play button and only mounts the <video> once the
 * visitor clicks, so the page never downloads video bytes on first load.
 * Playback starts with sound because it is always user-initiated.
 */
export function PosterVideo({
  src,
  poster,
  posterAlt,
  label,
  caption = "Watch our story",
  duration,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  sizeClassName = "aspect-video",
  posterPosition = "object-center",
  className,
}: {
  src: string;
  poster: string;
  posterAlt: string;
  /** Accessible name for the play button, e.g. "Play the Arbrit Safety company video". */
  label: string;
  /** Overlay text on the poster. */
  caption?: string;
  /** Optional runtime badge, e.g. "2:14". */
  duration?: string;
  sizes?: string;
  /** Sizing classes for the frame — an aspect ratio or explicit heights. */
  sizeClassName?: string;
  /** Which part of the poster to keep when the frame crops it, e.g. "object-[center_22%]". */
  posterPosition?: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl bg-navy-deep shadow-lg",
        sizeClassName,
        className,
      )}
    >
      {playing ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        >
          <a href={src}>Download the Arbrit Safety video</a>
        </video>
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={label}
          className="group absolute inset-0 h-full w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
        >
          <Image
            src={poster}
            alt={posterAlt}
            fill
            sizes={sizes}
            className={cn(
              "transform-gpu object-cover transition-transform duration-500 [backface-visibility:hidden] group-hover:scale-105",
              posterPosition,
            )}
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/15 to-navy-deep/5 transition duration-300 group-hover:from-navy-deep/60"
          />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#0066b2] shadow-lg ring-1 ring-white/60 transition duration-300 group-hover:scale-110 group-hover:bg-white sm:h-20 sm:w-20"
          >
            <Play className="ml-1 h-7 w-7 fill-current sm:h-9 sm:w-9" />
          </span>
          <span className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3">
            <span className="text-left text-sm font-semibold text-white drop-shadow sm:text-base">
              {caption}
            </span>
            {duration && (
              <span className="shrink-0 rounded-md bg-black/70 px-2 py-0.5 text-xs font-semibold text-white">
                {duration}
              </span>
            )}
          </span>
        </button>
      )}
    </div>
  );
}
