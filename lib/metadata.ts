import { EPage } from "./constant"
import { getBaseUrl } from "./url"

const url = getBaseUrl()
const image = `${url}/og.png`

const siteName = "Say Ethereum"

const title = `${siteName} - Discover how to pronounce Ethereum in different languages and countries by Geodework`

const metadataList = {
  [EPage.Home]: {
    description:
      "Learn how to pronounce Ethereum in different languages around the world. Geodework will pursue the geographic decentralization of Ethereum.",
  },
  [EPage.PrivacyPolicy]: {
    description: `Privacy Policy for ${siteName} - Learn about how we handle and protect your data when using our Ethereum pronunciation guide.`,
  },
  [EPage.TermsOfUse]: {
    description: `Terms of Use for ${siteName} - Read our terms and conditions for using our platform to learn Ethereum pronunciations worldwide.`,
  },
}

export function generateMetadata({ params }: { params: { pageType: EPage } }) {
  const { pageType } = params
  const description = metadataList[pageType].description

  return {
    title: `${pageType !== EPage.Home ? `${pageType} | ` : ""}${title}`,
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
