export interface ICountryData {
  country: string
  pronunciation: string
  characters: string
  flag: string
  language: string
  audiopath?: string
}

export type TGeographyData = Record<string, ICountryData[]>

export type TCountryRequieredData = Required<ICountryData>

const countryData: TGeographyData = {
  asia: [
    {
      country: 'China',
      pronunciation: 'Yǐ tài fāng',
      characters: '以太坊',
      language: 'MandarinChinese',
      flag: '🇨🇳',
    },
    {
      country: 'India',
      pronunciation: 'Etheriyam',
      characters: 'एथेरियम',
      language: 'Hindi',
      flag: '🇮🇳',
    },
    {
      country: 'Japan',
      pronunciation: 'Isariamu',
      characters: 'イーサリアム',
      language: 'Japanese',
      flag: '🇯🇵',
    },
    {
      country: 'South Korea',
      pronunciation: 'Ideorium',
      characters: '이더리움',
      language: 'Korean',
      flag: '🇰🇷',
    },
    {
      country: 'Indonesia',
      pronunciation: 'Eterium',
      characters: 'Eterium',
      language: 'Indonesian',
      flag: '🇮🇩',
    },
    {
      country: 'Vietnam',
      pronunciation: 'E-te-ri-um',
      characters: 'Ethereum',
      language: 'Vietnamese',
      flag: '🇻🇳',
    },
    {
      country: 'Pakistan',
      pronunciation: 'Etherium',
      characters: 'ایتھیریم',
      language: 'Urdu',
      flag: '🇵🇰',
    },
    {
      country: 'Bangladesh',
      pronunciation: 'Etherium',
      characters: 'ইথেরিয়াম',
      language: 'Bengali',
      flag: '🇧🇩',
    },
    {
      country: 'Philippines',
      pronunciation: 'Etherium',
      characters: 'Etherium',
      language: 'Filipino',
      flag: '🇵🇭',
    },
    {
      country: 'Malaysia',
      pronunciation: 'Etherium',
      characters: 'Etherium',
      language: 'Malay',
      flag: '🇲🇾',
    },
    {
      country: 'The United Arab Emirates (UAE)',
      pronunciation: 'Ethereum',
      characters: 'إيثيريوم',
      language: 'Arabic',
      flag: '🇦🇪',
    },
    {
      country: 'Iran',
      pronunciation: 'Ethereum',
      characters: 'اتریوم',
      language: 'Persian',
      flag: '🇮🇷',
    },
    {
      country: 'Türkiye',
      pronunciation: 'Eterium',
      characters: 'Eterium',
      language: 'Turkish',
      flag: '🇹🇷',
    },
    {
      country: 'Hong Kong SAR China',
      pronunciation: 'Yi tai fong',
      characters: '以太坊',
      language: 'Cantonese',
      flag: '🇭🇰',
    },
    {
      country: 'Singapore',
      pronunciation: 'Ethereum',
      characters: 'Ethereum',
      language: 'SingaporeEnglish',
      flag: '🇸🇬',
    },
    {
      country: 'Taiwan',
      pronunciation: 'Yǐ tài fāng',
      characters: '以太坊',
      language: 'TaiwaneseMandarin',
      flag: '🇹🇼',
    },
  ],
  europe: [
    {
      country: 'United Kingdom',
      pronunciation: 'Ethereum',
      characters: 'Ethereum',
      language: 'BritishEnglish',
      flag: '🇬🇧',
    },
    {
      country: 'Germany',
      pronunciation: 'Ethereum',
      characters: 'Ethereum',
      language: 'German',
      flag: '🇩🇪',
    },
    {
      country: 'France',
      pronunciation: 'Étérèum',
      characters: 'Étérèum',
      language: 'French',
      flag: '🇫🇷',
    },
    {
      country: 'Russia',
      pronunciation: 'Eterium',
      characters: 'Эфириум',
      language: 'Russian',
      flag: '🇷🇺',
    },
    {
      country: 'Ukraine',
      pronunciation: 'Eterium',
      characters: 'Етеріум',
      language: 'Ukrainian',
      flag: '🇺🇦',
    },
    {
      country: 'Spain',
      pronunciation: 'Eterio',
      characters: 'Eterio',
      language: 'Spanish',
      flag: '🇪🇸',
    },
    {
      country: 'Poland',
      pronunciation: 'Eterium',
      characters: 'Eterium',
      language: 'Polish',
      flag: '🇵🇱',
    },
    {
      country: 'Netherlands',
      pronunciation: 'Ethereum',
      characters: 'Ethereum',
      language: 'Dutch',
      flag: '🇳🇱',
    },
    {
      country: 'Italy',
      pronunciation: 'Etereum',
      characters: 'Etereum',
      language: 'Italian',
      flag: '🇮🇹',
    },
    {
      country: 'Serbia',
      pronunciation: 'Eterijum',
      characters: 'Етеријум',
      language: 'Serbian',
      flag: '🇷🇸',
    },
    {
      country: 'Slovenia',
      pronunciation: 'Eterij',
      characters: 'Eterij',
      language: 'Slovene',
      flag: '🇸🇮',
    },
  ],
  americas: [
    {
      country: 'United States',
      pronunciation: 'Ethereum',
      characters: 'Ethereum',
      language: 'AmericanEnglish',
      flag: '🇺🇸',
    },
    {
      country: 'Canada',
      pronunciation: 'Ethereum',
      characters: 'Ethereum',
      language: 'CanadianEnglish',
      flag: '🇨🇦',
    },
    {
      country: 'Brazil',
      pronunciation: 'Eterium',
      characters: 'Eterium',
      language: 'BrazilianPortuguese',
      flag: '🇧🇷',
    },
    {
      country: 'Mexico',
      pronunciation: 'Eterio',
      characters: 'Eterio',
      language: 'MexicanSpanish',
      flag: '🇲🇽',
    },
    {
      country: 'Argentina',
      pronunciation: 'Eterio',
      characters: 'Eterio',
      language: 'ArgentinianSpanish',
      flag: '🇦🇷',
    },
  ],
  africa: [
    {
      country: 'Nigeria',
      pronunciation: 'Ethereum',
      characters: 'Ethereum',
      language: 'NigerianEnglish',
      flag: '🇳🇬',
    },
    // Amharic
    {
      country: 'Ethiopia',
      pronunciation: 'Ethereum',
      characters: 'ኢቴሪየም',
      language: 'Amharic',
      flag: '🇪🇹',
    },
    // Swahili (Kiswahili)
    {
      country: 'Kenya',
      pronunciation: 'Etherium',
      characters: 'Etherium',
      language: 'Swahili',
      flag: '🇰🇪',
    },
    // Zulu (isiZulu)
    {
      country: 'South Africa',
      pronunciation: 'I-Etherium',
      characters: 'I-Etherium',
      language: 'Zulu',
      flag: '🇿🇦',
    },
  ],
  oceania: [
    {
      country: 'Australia',
      pronunciation: 'Ethereum',
      characters: 'Ethereum',
      language: 'AustralianEnglish',
      flag: '🇦🇺',
    },
    {
      country: 'New Zealand',
      pronunciation: 'Ethereum',
      characters: 'Ethereum',
      language: 'NewZealandEnglish',
      flag: '🇳🇿',
    },
  ],
}

export default countryData
