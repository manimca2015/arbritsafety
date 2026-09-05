import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first, WebP fallback. AVIF is typically 20-30% smaller than WebP at the
    // same visual quality, which is where mobile data savings actually come from.
    formats: ["image/avif", "image/webp"],
    // Next 16 requires every `quality` used in the app to be allow-listed.
    // 65 is for photos sitting under heavy colour overlays, where detail is invisible.
    qualities: [65, 75],
    // Adds a 480px step so two-up mobile grids (~50vw at 2x DPR ≈ 390px) stop
    // rounding all the way up to the 640px device size. Must stay below deviceSizes[0].
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 480],
  },
};

export default nextConfig;
