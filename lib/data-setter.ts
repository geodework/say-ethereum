import {
  ICountryData,
  TCountryRequieredData,
  TGeographyData,
} from "@/data/country"
import { getCountryAudio } from "./audio-getter"

export function setData(data: TGeographyData) {
  const sortedContinents = sortContinentByName(data)
  const sortedCountries = sortCountryByName(sortedContinents)
  setAudioPath(sortedCountries)
  return sortedCountries as Record<string, TCountryRequieredData[]>
}

function sortContinentByName(data: TGeographyData) {
  const sortedContinents = Object.keys(data).toSorted()
  return sortedContinents.reduce(
    (acc, continent) => {
      acc[continent] = data[continent]
      return acc
    },
    {} as Record<string, ICountryData[]>
  )
}

function sortCountryByName(data: TGeographyData) {
  for (const continent of Object.keys(data)) {
    data[continent].sort((a, b) => a.country.localeCompare(b.country))
  }
  return data
}

function setAudioPath(data: TGeographyData) {
  for (const continent of Object.keys(data)) {
    for (const geodata of data[continent]) {
      geodata.audiopath = getCountryAudio(geodata.language)

      if (!geodata.audiopath)
        throw new Error(
          `Audio data is not set for ${geodata.country}. Please set audio file.`
        )
    }
  }
}

export interface IContinentViews {
  slug: string
  label: string
}

export function getContinentsViews(data: TGeographyData): IContinentViews[] {
  return [
    {
      slug: "",
      label: "All",
    },
    ...Object.keys(data).map((continent) => ({
      slug: continent,
      label: continent,
    })),
  ]
}
