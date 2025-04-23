import countryData from "@/data/country"
import { EPage } from "./constant"
import { getBaseUrl } from "./url"
import { capitalizeString } from "./utils"

const url = getBaseUrl()
const image = `${url}/og.png`

const siteName = "Say Ethereum"

const getTitle = (siteName: string) =>
  `${siteName} - Discover how to pronounce Ethereum in different languages and countries by Geodework`

const descSuffix =
  "Geodework will pursue the geographic decentralization of Ethereum."

const metadataList = {
  [EPage.Home]: {
    description:
      "Learn how to pronounce Ethereum in different languages around the world",
  },
  [EPage.PrivacyPolicy]: {
    description: `Privacy Policy for ${siteName} - Learn about how we handle and protect your data when using our Ethereum pronunciation guide.`,
  },
  [EPage.TermsOfUse]: {
    description: `Terms of Use for ${siteName} - Read our terms and conditions for using our platform to learn Ethereum pronunciations worldwide.`,
  },
}

export function generateMetadata({
  params,
}: {
  params: { pageType: EPage; continent?: string }
}) {
  const { pageType, continent } = params
  const description = getDescription(pageType, continent || "")
  const title = generateTitle(pageType, continent || "")

  return {
    title,
    description,
    icons: {
      icon: [{ url: "/favicon.ico", sizes: "any" }],
      apple: [
        { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
      ],
    },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      images: [{ url: image }],
      siteName,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      site: siteName,
    },
  }
}

function generateTitle(pageType: EPage, continent: string): string {
  if (pageType !== EPage.Home) return `${pageType} | ${getTitle(siteName)}`

  return getTitle(
    `${siteName}${continent ? ` in ${capitalizeString(continent)}` : ""}`
  )
}

function getDescription(pageType: EPage, continent: string): string {
  const desc = metadataList[pageType].description
  if (pageType !== EPage.Home || !continent) return desc

  const continentData = countryData[continent]
  if (!continentData)
    throw new Error(`Continent ${continent} not found in Metadata`)

  const countries = continentData.map((details) => details.country)

  return `${desc} in ${capitalizeString(continent)}: ${countries.join(", ")}. ${descSuffix}`
}
