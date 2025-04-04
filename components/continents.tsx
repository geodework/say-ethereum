import { TabsList, TabsTrigger } from '@/components/ui/tabs'

interface ContinentProps {
  continents: string[]
}

export default function Continents({ continents }: ContinentProps) {
  return (
    <div>
      <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent max-w-full">
        {continents.map((continent) => (
          <TabsTrigger
            key={continent}
            value={continent}
            className="bg-blue-200 hover:bg-pink-400 text-white rounded-full px-6 data-[state=active]:bg-pink-400 capitalize"
          >
            {continent}
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  )
}
