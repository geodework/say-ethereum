import { Tabs, TabsContent } from '@/components/ui/tabs'
import CountryCard from '@/components/country-card'
import EthereumBearButton from '@/components/ethereum-bear-button'
import countryData, { globe } from '@/data/country'
import { setData } from '@/lib/data-setter'
import Continents from '@/components/continents'
import { generateMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import MainWrapper from '@/components/MainWrapper'
import { EPage } from '@/lib/constant'

export const metadata: Metadata = generateMetadata({
  params: { pageType: EPage.Home },
})

const geoData = setData(countryData)
const primaryContinent = Object.keys(geoData)[0]

export default function Home() {
  return (
    <MainWrapper>
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-400 mb-4 font-comic">
          How do you say "Ethereum"? ( ๑•ᴗ•๑)
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto font-comic">
          Ethereum is a global technology, but it's pronounced differently
          across the world! Discover how 'Ethereum' sounds in each country—one
          language at a time!"
        </p>
      </div>

      <Tabs defaultValue={primaryContinent} className="w-full">
        <Continents continents={Object.keys(geoData)} />
        {Object.entries(geoData).map(([continent, countries]) => (
          <TabsContent key={continent} value={continent}>
            <section>
              <header className="flex items-center gap-3 bg-pink-50 border-blue-200 rounded-3xl mt-8 sm:mt-6 sm:p-4 md:p-4">
                <div className="text-4xl rounded-full overflow-hidden">
                  {globe[continent]}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-600">
                  {continent.charAt(0).toUpperCase() + continent.slice(1)}
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
