import { Tabs } from "@/components/ui/tabs"
import EthereumBearButton from "@/components/ethereum-bear-button"
import countryData from "@/data/country"
import { getContinentsViews, setData } from "@/lib/data-setter"
import Continents from "@/components/continents"
import { generateMetadata } from "@/lib/metadata"
import { Metadata } from "next"
import MainWrapper from "@/components/MainWrapper"
import { EPage } from "@/lib/constant"
import MainHeader from "@/components/MainHeader"
import { MainBody } from "@/components/MainBody"

export const metadata: Metadata = generateMetadata({
  params: { pageType: EPage.Home, continent: "" },
})

const geoData = setData(countryData)

const continentsViews = getContinentsViews(geoData)

export default function Home() {
  return (
    <MainWrapper>
      <MainHeader continent="" />
      <Tabs defaultValue={continentsViews[0].label} className="w-full">
        <Continents continents={getContinentsViews(geoData)} />
        {Object.entries(geoData).map(([continent, countries]) => (
          <MainBody
            key={continent}
            continent={continent}
            countries={countries}
          />
        ))}
      </Tabs>
      <EthereumBearButton />
    </MainWrapper>
  )
}
