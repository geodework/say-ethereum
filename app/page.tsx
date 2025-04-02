import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import CountryCard from '@/components/country-card'
import EthereumBearButton from '@/components/ethereum-bear-button'
import countryData from '@/data/country'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-pink-300 py-4 border-b-4 border-dashed border-white">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="border-2 border-purple-400 rounded-full">
              <div className="bg-purple-500 rounded-full border-4 border-white">
                <div className="w-11 h-11 flex items-center justify-center text-4xl text-purple-100 pb-1">
                  ⟠
                </div>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-purple-700 drop-shadow-md">
              Say Ethereum
            </h1>
          </div>
          {/* ✧･ﾟ( ミ ᴗ ミ )ﾉ･ﾟ✧ */}
          <div className="text-white text-xl md:text-2xl">
            A Geodework Project ✧･ﾟ( ミ ᴗ ミ )ﾉ･ﾟ✧
          </div>
        </div>
      </header>

      {/* Main Content */}
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

          <Tabs defaultValue="asia" className="w-full">
            <TabsList className="flex justify-center gap-2 bg-transparent">
              {Object.keys(countryData).map((continent) => (
                <TabsTrigger
                  key={continent}
                  value={continent}
                  className="bg-blue-200 hover:bg-pink-400 text-white rounded-full px-6 py-2 data-[state=active]:bg-pink-400"
                >
                  {continent.charAt(0).toUpperCase() + continent.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(countryData).map(([continent, countries]) => (
              <TabsContent key={continent} value={continent}>
                <section className="flex items-center gap-3 my-6 bg-pink-50 border-blue-200 rounded-3xl p-4 md:p-4 shadow-sm">
                  <div className="text-4xl rounded-full overflow-hidden">
                    🌎
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-600">
                    {continent.charAt(0).toUpperCase() + continent.slice(1)}
                  </h3>
                </section>
                <div className="mt-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {countries.map((country) => (
                      <CountryCard
                        key={country.country}
                        country={country.country}
                        pronunciation={country.pronunciation}
                        characters={country.characters}
                        flag={country.flag}
                      />
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-pink-300 py-4 text-center text-white">
        <p className="mb-2">✧･ﾟ Say Ethereum ✧･ﾟ A pronunciation guide ✧･ﾟ</p>
        <p className="text-sm">
          Provided by{' '}
          <a
            href="https://geodework.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-purple-100"
          >
            Geodework
          </a>{' '}
          •{' '}
          <a
            href="https://localethereum.beehiiv.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-purple-100"
          >
            Local Ethereum Newsletter
          </a>
        </p>
      </footer>

      {/* Ethereum Bear Button */}
      <EthereumBearButton />
    </main>
  )
}
