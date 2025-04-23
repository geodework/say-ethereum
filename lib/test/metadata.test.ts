import { describe, expect, test } from "vitest"
import { generateMetadata } from "../metadata"
import { EPage } from "../constant"

describe("generateMetadata", () => {
  test("should generate metadata for Home page", () => {
    const metadata = generateMetadata({
      params: { pageType: EPage.Home, continent: "" },
    })

    expect(metadata.title).toBe(
      "Say Ethereum - Discover how to pronounce Ethereum in different languages and countries by Geodework"
    )
    expect(metadata.description).toContain(
      "Learn how to pronounce Ethereum in different languages around the world"
    )
    expect(metadata.openGraph).toBeDefined()
    expect(metadata.twitter).toBeDefined()
  })

  test("should generate metadata for Home page with continent", () => {
    const metadata = generateMetadata({
      params: { pageType: EPage.Home, continent: "asia" },
    })
    const title =
      "Say Ethereum in Asia - Discover how to pronounce Ethereum in different languages and countries by Geodework"
    expect(metadata.title).toBe(title)
    expect(metadata.openGraph.title).toBe(title)
    expect(metadata.twitter.title).toBe(title)
    expect(metadata.description).toContain(
      "Learn how to pronounce Ethereum in different languages around the world in Asia:"
    )
  })

  test("should generate metadata for Privacy Policy page", () => {
    const metadata = generateMetadata({
      params: { pageType: EPage.PrivacyPolicy, continent: "" },
    })

    expect(metadata.title).toBe(
      "Privacy Policy | Say Ethereum - Discover how to pronounce Ethereum in different languages and countries by Geodework"
    )
    expect(metadata.description).toContain("Privacy Policy for Say Ethereum")
    expect(metadata.openGraph).toBeDefined()
    expect(metadata.twitter).toBeDefined()
  })

  test("should generate metadata for Terms of Use page", () => {
    const metadata = generateMetadata({
      params: { pageType: EPage.TermsOfUse, continent: "" },
    })

    expect(metadata.title).toBe(
      "Terms of Use | Say Ethereum - Discover how to pronounce Ethereum in different languages and countries by Geodework"
    )
    expect(metadata.description).toContain("Terms of Use for Say Ethereum")
    expect(metadata.openGraph).toBeDefined()
    expect(metadata.twitter).toBeDefined()
  })

  test("should include required metadata fields", () => {
    const metadata = generateMetadata({
      params: { pageType: EPage.Home, continent: "" },
    })

    expect(metadata).toHaveProperty("title")
    expect(metadata).toHaveProperty("description")
    expect(metadata).toHaveProperty("icons")
    expect(metadata).toHaveProperty("openGraph")
    expect(metadata).toHaveProperty("twitter")
  })

  test("should include correct icon paths", () => {
    const metadata = generateMetadata({
      params: { pageType: EPage.Home, continent: "" },
    })

    expect(metadata.icons?.icon).toContainEqual({
      url: "/favicon.ico",
      sizes: "any",
    })
    expect(metadata.icons?.apple).toContainEqual({
      url: "/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180",
    })
  })
})
