import { afterAll, beforeEach, describe, expect, test, vi } from "vitest"

import { setData } from "../data-setter"
import { ICountryData } from "@/data/country"
import * as audioGetter from "../audio-getter"

const data: Record<string, ICountryData[]> = {
  b: [
    {
      country: "b",
      pronunciation: "b",
      characters: "b",
      flag: "b",
      language: "b",
    },
    {
      country: "a",
      pronunciation: "a",
      characters: "a",
      flag: "a",
      language: "a",
    },
  ],
  a: [
    {
      country: "c",
      pronunciation: "c",
      characters: "c",
      flag: "c",
      language: "c",
    },
  ],
}

describe("country data", () => {
  let sortedData: Record<string, ICountryData[]>
  let getCountryAudioSpy: any

  beforeEach(() => {
    getCountryAudioSpy = vi.spyOn(audioGetter, "getCountryAudio")
    getCountryAudioSpy.mockReturnValue("/audio/dummy.mp3")
    sortedData = setData(data)
  })

  afterAll(() => {
    getCountryAudioSpy.mockRestore()
  })

  describe("sort the continents by alphabetical order", () => {
    test("should sort the continents by alphabetical order", () => {
      expect(Object.keys(sortedData)).toEqual(["a", "b"])
    })

    test("should sort the countries by alphabetical order", () => {
      expect(sortedData["b"][0].country).toEqual("a")
      expect(sortedData["b"][1].country).toEqual("b")
    })

    test("should add audio path to each country", () => {
      expect(sortedData["a"][0].audiopath).toEqual("/audio/dummy.mp3")
      expect(sortedData["b"][0].audiopath).toEqual("/audio/dummy.mp3")
      expect(sortedData["b"][1].audiopath).toEqual("/audio/dummy.mp3")
    })
  })

  describe("audio handling", () => {
    test("should throw error when audio is not available", () => {
      getCountryAudioSpy.mockReturnValue(undefined)
      expect(() => setData(data)).toThrow(
        `Audio data is not set for ${data["a"][0].country}. Please set audio file.`
      )
    })
  })
})
