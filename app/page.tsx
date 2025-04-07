import { Tabs, TabsContent } from '@/components/ui/tabs'
import CountryCard from '@/components/country-card'
import EthereumBearButton from '@/components/ethereum-bear-button'
import countryData from '@/data/country'
import { setData } from '@/lib/data-setter'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Continents from '@/components/continents'

const geoData = setData(countryData)
const primaryContinent = Object.keys(geoData)[0]

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 bg-blue-50 py-8 px-4">
        <section className="max-w-4xl mx-auto bg-pink-50 rounded-3xl border-4 border-dashed border-pink-200 p-6 md:p-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-400 mb-4 font-comic">
              How do you say "Ethereum"? ( ๑•ᴗ•๑)
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto font-comic">
              Ethereum is a global technology, but it's pronounced differently
              across the world! Discover how 'Ethereum' sounds in each
              country—one major language at a time!"
            </p>
          </div>

          <Tabs defaultValue={primaryContinent} className="w-full">
            <Continents continents={Object.keys(geoData)} />
            {Object.entries(geoData).map(([continent, countries]) => (
              <TabsContent key={continent} value={continent}>
                <section className="flex items-center gap-3 bg-pink-50 border-blue-200 rounded-3xl mt-8 sm:mt-6 sm:p-4 md:p-4">
                  <div className="text-4xl rounded-full overflow-hidden">
                    🌎
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-600">
                    {continent.charAt(0).toUpperCase() + continent.slice(1)}
                  </h3>
                </section>
                <div className="mt-4 md:mt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {countries.map((geodata) => (
                      <CountryCard geodata={geodata} key={geodata.country} />
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </div>

      <Footer />

      <EthereumBearButton />
    </main>
  )
}
