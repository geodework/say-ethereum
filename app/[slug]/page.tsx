import { Tabs, TabsContent } from "@/components/ui/tabs"
import CountryCard from "@/components/country-card"
import EthereumBearButton from "@/components/ethereum-bear-button"
import countryData, { globe } from "@/data/country"
import { getContinentsViews, setData } from "@/lib/data-setter"
import Continents from "@/components/continents"
import { generateMetadata as generatePageMetadata } from "@/lib/metadata"
import { Metadata } from "next"
import MainWrapper from "@/components/MainWrapper"
import { EPage } from "@/lib/constant"
import MainHeader from "@/components/MainHeader"
import { capitalizeString } from "@/lib/utils"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  return generatePageMetadata({
    params: { pageType: EPage.Home, continent: slug },
  })
}

const geoData = setData(countryData)

/**
 * Required to prepare the dynamic slugs for the page in build time.
 */
export function generateStaticParams() {
  return Object.keys(geoData).map((continent) => ({
    slug: continent,
  }))
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug: primaryContinent } = await params

  return (
    <MainWrapper>
      <MainHeader continent={primaryContinent} />

      <Tabs defaultValue={primaryContinent} className="w-full">
        <Continents continents={getContinentsViews(geoData)} />
        {Object.entries(geoData).map(([continent, countries]) => (
          <TabsContent key={continent} value={continent}>
            <section>
              <header className="flex items-center gap-3 bg-pink-50 border-blue-200 rounded-3xl mt-8 sm:mt-6 sm:p-4 md:p-4">
                <div className="text-4xl rounded-full overflow-hidden">
                  {globe[continent]}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-600">
                  {capitalizeString(continent)}
                </h3>
              </header>
              <div className="mt-4 md:mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {countries.map((geodata) => (
                    <CountryCard geodata={geodata} key={geodata.country} />
                  ))}
                </div>
              </div>
            </section>
          </TabsContent>
        ))}
      </Tabs>
      <EthereumBearButton />
    </MainWrapper>
  )
}
