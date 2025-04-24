import { MetadataRoute } from "next"

export function generateSitemapEntries(
  baseUrl: string,
  dynamicPaths: string[],
  staticPaths: string[]
): MetadataRoute.Sitemap {
  const urls = [
    "",
    ...dynamicPaths.map((p) => `/${p}`),
    ...staticPaths.map((p) => `/${p}`),
  ]

  return urls.map((url) => ({
    url: `${baseUrl}${url}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: staticPaths.includes(url.slice(1)) ? 0.5 : 1,
  }))
}
