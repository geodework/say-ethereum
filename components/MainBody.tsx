import { globe, TCountryRequieredData } from "@/data/country"
import CountryCard from "@/components/country-card"
import { capitalizeString } from "@/lib/utils"

export function MainBody({
  continent,
  countries,
}: {
  continent: string
  countries: TCountryRequieredData[]
}) {
  return (
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
  )
}
