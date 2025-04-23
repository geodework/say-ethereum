"use client"

import { TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"
import { IContinentViews } from "@/lib/data-setter"

export default function Continents({
  continents,
}: {
  continents: IContinentViews[]
}) {
  const router = useRouter()

  return (
    <div>
      <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent max-w-full">
        {continents.map((continent) => (
          <TabsTrigger
            key={continent.label}
            value={continent.label}
            onClick={() => router.push(`/${continent.slug}`, { scroll: false })}
            className="bg-blue-200 hover:bg-pink-400 text-white rounded-full px-6 data-[state=active]:bg-pink-400 capitalize"
          >
            {continent.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  )
}
