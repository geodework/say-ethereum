import { BASE_URL } from "@/lib/constant"
import { MetadataRoute } from "next"
import { globe } from "@/data/country"
import { generateSitemapEntries } from "@/lib/sitemap"

export default function sitemap(): MetadataRoute.Sitemap {
  return generateSitemapEntries(BASE_URL, Object.keys(globe), [
    "terms-of-use",
    "privacy-policy",
  ])
}

// This is required for static exports
export const dynamic = "force-static"
