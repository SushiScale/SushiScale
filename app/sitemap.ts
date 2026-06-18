import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sushiscale.com",
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
