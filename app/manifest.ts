import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Arseniiy Kapshtyk",
    description: "Personal website of Arseniiy Kapshtyk",
    start_url: "/",
    display: "standalone",
    background_color: "#6fc96e",
    theme_color: "#6fc96e",
    icons: [
      {
        src: "/images/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
