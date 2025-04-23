import { capitalizeString } from "@/lib/utils"

export default function MainHeader({ continent }: { continent: string }) {
  const continentLabel = capitalizeString(continent)
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl md:text-3xl xl:text-4xl font-bold text-pink-400 mb-4 font-comic">
        {continentLabel
          ? `How do you say ${"Ethereum"} in ${continentLabel}?`
          : `How do you say ${"Ethereum"}?`}
        <span className="text-lg md:text-2xl lg:text-3xl xl:text-2xl">
          {" "}
          ( ๑•ᴗ•๑)`
        </span>
      </h1>
      <p className="text-gray-600 max-w-3xl mx-auto font-comic">
        Ethereum is a global technology, but it's pronounced differently across
        the world! Discover how 'Ethereum' sounds in{" "}
        {continentLabel || "each country"}—one language at a time!
      </p>
    </div>
  )
}
