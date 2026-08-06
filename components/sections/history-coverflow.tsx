"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

type Photo = { src: string; alt: string };

export function HistoryCoverflow({ photos }: { photos: Photo[] }) {
  return (
    <div className="relative">
      <Swiper
        modules={[EffectCoverflow, Autoplay, Navigation]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={{
          prevEl: ".history-coverflow-prev",
          nextEl: ".history-coverflow-next",
        }}
        className="!py-4"
      >
        {photos.map((photo, i) => (
          <SwiperSlide
            key={i}
            className="!w-64 !h-72 sm:!w-72 sm:!h-80"
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="288px"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        aria-label="Previous photo"
        className="history-coverflow-prev absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#000] shadow-md transition hover:bg-orange hover:text-white"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next photo"
        className="history-coverflow-next absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#000] shadow-md transition hover:bg-orange hover:text-white"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}
