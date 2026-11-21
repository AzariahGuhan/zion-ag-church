import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zion AG Church",
    short_name: "Zion AG",
    description: "Zion AG Church, Kamarajapuram, Chennai",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [{ src: "/icon", sizes: "512x512", type: "image/png" }],
  };
}
