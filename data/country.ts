export interface ICountryData {
  country: string
  pronunciation: string
  characters: string
  flag: string
  language: string
  audiopath?: string
}

export const globe: Record<string, string> = {
  asia: "🌏",
  europe: "🌍",
  americas: "🌎",
  africa: "🌍",
  oceania: "🌏",
}

export type TGeographyData = Record<string, ICountryData[]>

export type TCountryRequieredData = Required<ICountryData>

const countryData: TGeographyData = {
  asia: [
    {
      country: "China",
      pronunciation: "Yǐ tài fāng",
      characters: "以太坊",
      language: "MandarinChinese",
      flag: "🇨🇳",
    },
    {
      country: "India",
      pronunciation: "Etheriyam",
      characters: "एथेरियम",
      language: "Hindi",
      flag: "🇮🇳",
    },
    {
      country: "Japan",
      pronunciation: "Isariamu",
      characters: "イーサリアム",
      language: "Japanese",
      flag: "🇯🇵",
    },
    {
      country: "South Korea",
      pronunciation: "Ideorium",
      characters: "이더리움",
      language: "Korean",
      flag: "🇰🇷",
    },
    {
      country: "Indonesia",
      pronunciation: "Eterium",
      characters: "Ethereum",
      language: "Indonesian",
      flag: "🇮🇩",
    },
    {
      country: "Vietnam",
      pronunciation: "E-te-ri-um",
      characters: "Ethereum",
      language: "Vietnamese",
      flag: "🇻🇳",
    },
    {
      country: "Pakistan",
      pronunciation: "Etherium",
      characters: "ایتھیریم",
      language: "Urdu",
      flag: "🇵🇰",
    },
    {
      country: "Bangladesh",
      pronunciation: "Etherium",
      characters: "ইথেরিয়াম",
      language: "Bengali",
      flag: "🇧🇩",
    },
    {
      country: "Philippines",
      pronunciation: "Etherium",
      characters: "Ethereum",
      language: "Filipino",
      flag: "🇵🇭",
    },
    {
      country: "Malaysia",
      pronunciation: "Etherium",
      characters: "Ethereum",
      language: "Malay",
      flag: "🇲🇾",
    },
    {
      country: "The United Arab Emirates (UAE)",
      pronunciation: "Ethereum",
      characters: "إيثيريوم",
      language: "Arabic",
      flag: "🇦🇪",
    },
    {
      country: "Iran",
      pronunciation: "Ethereum",
      characters: "اتریوم",
      language: "IranianPersian",
      flag: "🇮🇷",
    },
    {
      country: "Türkiye",
      pronunciation: "Eterium",
      characters: "Ethereum",
      language: "Turkish",
      flag: "🇹🇷",
    },
    {
      country: "Hong Kong SAR China",
      pronunciation: "Yi tai fong",
      characters: "以太坊",
      language: "Cantonese",
      flag: "🇭🇰",
    },
    {
      country: "Singapore",
      pronunciation: "Ethereum",
      characters: "Ethereum",
      language: "SingaporeEnglish",
      flag: "🇸🇬",
    },
    {
      country: "Taiwan",
      pronunciation: "Yǐ tài fāng",
      characters: "以太坊",
      language: "TaiwaneseMandarin",
      flag: "🇹🇼",
    },
    {
      country: "Thailand",
      pronunciation: "Etherium",
      characters: "อีเธอเรียม",
      language: "Thai",
      flag: "🇹🇭",
    },
    {
      country: "Cambodia",
      pronunciation: "Etherium",
      characters: "Ethereum",
      language: "Khmer",
      flag: "🇰🇭",
    },
  ],
  europe: [
    {
      country: "United Kingdom",
      pronunciation: "Ethereum",
      characters: "Ethereum",
      language: "BritishEnglish",
      flag: "🇬🇧",
    },
    {
      country: "Germany",
      pronunciation: "Ethereum",
      characters: "Ethereum",
      language: "German",
      flag: "🇩🇪",
    },
    {
      country: "France",
      pronunciation: "Étérèum",
      characters: "Ethereum",
      language: "French",
      flag: "🇫🇷",
    },
    {
      country: "Russia",
      pronunciation: "Eterium",
      characters: "Ethereum",
      language: "Russian",
      flag: "🇷🇺",
    },
    {
      country: "Ukraine",
      pronunciation: "Eterium",
      characters: "Ethereum",
      language: "Ukrainian",
      flag: "🇺🇦",
    },
    {
      country: "Spain",
      pronunciation: "Etereum",
      characters: "Ethereum",
      language: "Spanish",
      flag: "🇪🇸",
    },
    {
      country: "Poland",
      pronunciation: "Eterium",
      characters: "Ethereum",
      language: "Polish",
      flag: "🇵🇱",
    },
    {
      country: "Netherlands",
      pronunciation: "Ethereum",
      characters: "Ethereum",
      language: "Dutch",
      flag: "🇳🇱",
    },
    {
      country: "Italy",
      pronunciation: "Etereum",
      characters: "Ethereum",
      language: "Italian",
      flag: "🇮🇹",
    },
    {
      country: "Serbia",
      pronunciation: "Eterijum",
      characters: "Етеријум",
      language: "Serbian",
      flag: "🇷🇸",
    },
    {
      country: "Slovenia",
      pronunciation: "Eterijum",
      characters: "Ethereum",
      language: "Slovene",
      flag: "🇸🇮",
    },
  ],
  americas: [
    {
      country: "United States",
      pronunciation: "Ethereum",
      characters: "Ethereum",
      language: "AmericanEnglish",
      flag: "🇺🇸",
    },
    {
      country: "Canada",
      pronunciation: "Ethereum",
      characters: "Ethereum",
      language: "CanadianEnglish",
      flag: "🇨🇦",
    },
    {
      country: "Brazil",
      pronunciation: "Eterium",
      characters: "Ethereum",
      language: "BrazilianPortuguese",
      flag: "🇧🇷",
    },
    {
      country: "Mexico",
      pronunciation: "Etereum",
      characters: "Ethereum",
      language: "MexicanSpanish",
      flag: "🇲🇽",
    },
    {
      country: "Argentina",
      pronunciation: "Etereum",
      characters: "Ethereum",
      language: "ArgentinianSpanish",
      flag: "🇦🇷",
    },
    {
      country: "Venezuela",
      pronunciation: "Etereum",
      characters: "Ethereum",
      language: "VenezuelanSpanish",
      flag: "🇻🇪",
    },
  ],
  africa: [
    {
      country: "Nigeria",
      pronunciation: "Ethereum",
      characters: "Ethereum",
      language: "NigerianEnglish",
      flag: "🇳🇬",
    },
    // Amharic
    {
      country: "Ethiopia",
      pronunciation: "Ethereum",
      characters: "ኢቴሪየም",
      language: "Amharic",
      flag: "🇪🇹",
    },
    // Swahili (Kiswahili)
    {
      country: "Kenya",
      pronunciation: "Etherium",
      characters: "Etherium",
      language: "Swahili",
      flag: "🇰🇪",
    },
    // Zulu (isiZulu)
    {
      country: "South Africa",
      pronunciation: "I-Etherium",
      characters: "I-Etherium",
      language: "Zulu",
      flag: "🇿🇦",
    },
  ],
  oceania: [
    {
      country: "Australia",
      pronunciation: "Ethereum",
      characters: "Ethereum",
      language: "AustralianEnglish",
      flag: "🇦🇺",
    },
    {
      country: "New Zealand",
      pronunciation: "Ethereum",
      characters: "Ethereum",
      language: "NewZealandEnglish",
      flag: "🇳🇿",
    },
  ],
}

export default countryData
