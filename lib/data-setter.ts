import countryData, { ICountryData } from '@/data/country'

// should we add audio data here?
export function sortCountryData(data: typeof countryData) {
  return sortContinentAndCountryByName(data)
}

function sortContinentAndCountryByName(data: typeof countryData) {
  const sortedContinents = Object.keys(data).toSorted()

  return sortedContinents.reduce(
    (acc, continent) => {
      acc[continent] = sortCountryByName(data[continent])
      return acc
    },
    {} as Record<string, ICountryData[]>
  )
}

function sortCountryByName(data: ICountryData[]) {
  return data.sort((a, b) => a.country.localeCompare(b.country))
}
