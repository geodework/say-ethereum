'use client'

import { TCountryRequieredData } from '@/data/country'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

export default function CountryCard({
  country,
  pronunciation,
  flag,
  characters,
  audiopath,
}: TCountryRequieredData) {
  return (
    <Card className="overflow-hidden bg-yellow-50 border-4 border-blue-100 rounded-xl">
      {/* <div className="relative h-24 flex items-center justify-center bg-gradient-to-r from-pink-100 to-pink-200 p-3"> */}
      <div className="relative h-24 flex items-center justify-center p-3">
        <div className="absolute top-2 right-2">
          <span className="text-yellow-600">✧</span>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-6xl">{flag}</span>
        </div>
        <div className="absolute bottom-0 w-full">
          <svg
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
            className="w-full h-4"
          >
            <path
              d="M0,0 L10,5 L20,0 L30,5 L40,0 L50,5 L60,0 L70,5 L80,0 L90,5 L100,0 V10 H0 Z"
              fill="#FFC0CB"
            />
          </svg>
        </div>
      </div>
      <CardContent className="p-6 bg-purple-50">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-pink-400 text-xl">✧</span>
          <h4 className="text-xl font-bold text-purple-700 font-comic">
            {country}
          </h4>
          <Button
            className="bg-yellow-200 hover:bg-yellow-300 text-yellow-800 rounded-full px-4 py-1 font-comic"
            onClick={() => {
              const audio = new Audio(audiopath)
              audio.play()
            }}
          >
            Play ▶
          </Button>
        </div>
        <div className="flex items-center justify-between gap-4 mb-4"></div>
        <div className="flex flex-col gap-2">
          <div className="bg-yellow-100 p-3 rounded-lg text-center">
            <p className="text-gray-700 font-comic">{pronunciation}</p>
          </div>
          <div className="bg-yellow-100 p-3 rounded-lg text-center font-sans">
            <p className="text-gray-700 ">{characters}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
