import { describe, it, expect } from "vitest"
import { generateSitemapEntries } from "../sitemap"

describe("generateSitemapEntries", () => {
  it("should generate sitemap entries with correct structure", () => {
    const baseUrl = "https://example.com"
    const entries = generateSitemapEntries(baseUrl, ["africa", "oceania"], [])

    expect(entries).toHaveLength(3)

    entries.forEach((entry) => {
      expect(entry).toHaveProperty("url")
      expect(entry).toHaveProperty("lastModified")
      expect(entry).toHaveProperty("changeFrequency", "monthly")
      expect(entry).toHaveProperty("priority", 1)
    })

    expect(entries[0].url).toBe("https://example.com")
    expect(entries[1].url).toBe("https://example.com/africa")
    expect(entries[2].url).toBe("https://example.com/oceania")
  })

  it("should generate sitemap entries with correct structure", () => {
    const baseUrl = "https://example.com"
    const entries = generateSitemapEntries(
      baseUrl,
      [],
      ["terms-of-use", "privacy-policy"]
    )

    expect(entries).toHaveLength(3)

    // Remove the root URL
    entries.slice(1).forEach((entry) => {
      expect(entry).toHaveProperty("url")
      expect(entry).toHaveProperty("lastModified")
      expect(entry).toHaveProperty("changeFrequency", "monthly")
      expect(entry).toHaveProperty("priority", 0.5)
    })

    expect(entries[0].url).toBe("https://example.com")
    expect(entries[1].url).toBe("https://example.com/terms-of-use")
    expect(entries[2].url).toBe("https://example.com/privacy-policy")
  })
})
