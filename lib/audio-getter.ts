import fs from 'fs'
import path from 'path'

// Get audio files at build time
const audioDir = path.join(process.cwd(), 'public', 'audio')
const audioFiles = fs.readdirSync(audioDir)

// Create a mapping of country names to their audio files
const countryAudio = audioFiles.reduce<Record<string, string>>((acc, file) => {
  // Remove .mp3 extension and use as country key
  const country = path.basename(file, '.mp3').toLowerCase()
  // Store the path relative to public directory for client-side usage
  acc[country] = `/audio/${file}`
  return acc
}, {})

export type CountryAudioKey = keyof typeof countryAudio

// Helper to check if a country has audio
export function hasCountryAudio(country: string): country is CountryAudioKey {
  return country.toLowerCase() in countryAudio
}

// Get audio URL for a country if available
export function getCountryAudio(countryToDisplay: string): string | undefined {
  const key = countryToDisplay
    .toLowerCase()
    .replaceAll(' ', '') as CountryAudioKey
  return hasCountryAudio(key) ? countryAudio[key] : undefined
}

export { countryAudio }
