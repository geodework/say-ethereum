import { capitalizeString } from "@/lib/utils"

export default function MainHeader({ continent }: { continent: string }) {
  const continentLabel = capitalizeString(continent)
  return (
    <div className="text-center mb-8">
      <h1
        className="text-3xl md:text-4xl font-bold text-pink-400 mb-4 font-comic"
        dangerouslySetInnerHTML={{
          __html: continentLabel
            ? `How do you say ${"Ethereum"} in ${continentLabel}?<br />( ๑•ᴗ•๑)`
            : `How do you say ${"Ethereum"}? ( ๑•ᴗ•๑)`,
        }}
      />
      <p className="text-gray-600 max-w-3xl mx-auto font-comic">
        Ethereum is a global technology, but it's pronounced differently across
        the world! Discover how 'Ethereum' sounds in{" "}
        {continentLabel || "each country"}—one language at a time!
      </p>
    </div>
  )
}
