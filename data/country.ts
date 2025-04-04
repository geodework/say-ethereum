export interface ICountryData {
  country: string
  pronunciation: string
  characters: string
  flag: string
  audiopath?: string
}

export type TGeographyData = Record<string, ICountryData[]>

const countryData: TGeographyData = {
  asia: [
    {
      country: 'china',
      pronunciation: 'Yǐ tài fáng',
      characters: '以太坊',
      flag: '🇨🇳',
    },
    {
      country: 'india',
      pronunciation: 'Ethereyam',
      characters: 'एथेरियम',
      flag: '🇮🇳',
    },
    {
      country: 'japan',
      pronunciation: 'Īsariamu',
      characters: 'イーサリアム',
      flag: '🇯🇵',
    },
    {
      country: 'south korea',
      pronunciation: 'Ideorium',
      characters: '이더리움',
      flag: '🇰🇷',
    },
  ],
  europe: [
    {
      country: 'france',
      pronunciation: 'Étérèum',
      characters: 'Étérèum',
      flag: '🇫🇷',
    },
    {
      country: 'germany',
      pronunciation: 'Ethereum',
      characters: 'Ethereum',
      flag: '🇩🇪',
    },
    {
      country: 'spain',
      pronunciation: 'Eterio',
      characters: 'Eterio',
      flag: '🇪🇸',
    },
    {
      country: 'italy',
      pronunciation: 'Etereum',
      characters: 'Etereum',
      flag: '🇮🇹',
    },
  ],
  americas: [
    {
      country: 'usa',
      pronunciation: 'Ethereum',
      characters: 'Ethereum',
      flag: '🇺🇸',
    },
    {
      country: 'canada',
      pronunciation: 'Ethereum',
      characters: 'Ethereum',
      flag: '🇨🇦',
    },
    {
      country: 'brazil',
      pronunciation: 'Eterium',
      characters: 'Eterium',
      flag: '🇧🇷',
    },
    {
      country: 'mexico',
      pronunciation: 'Eterio',
      characters: 'Eterio',
      flag: '🇲🇽',
    },
  ],
  africa: [
    {
      country: 'nigeria',
      pronunciation: 'Ethereum',
      characters: 'Ethereum',
      flag: '🇳🇬',
    },
    {
      country: 'south africa',
      pronunciation: 'Ethereum',
      characters: 'Ethereum',
      flag: '🇿🇦',
    },
    {
      country: 'egypt',
      pronunciation: 'Ethereum',
      characters: 'إيثيريوم',
      flag: '🇪🇬',
    },
    {
      country: 'kenya',
      pronunciation: 'Ethereum',
      characters: 'Ethereum',
      flag: '🇰🇪',
    },
  ],
  oceania: [
    {
      country: 'australia',
      pronunciation: 'Ethereum',
      characters: 'Ethereum',
      flag: '🇦🇺',
    },
    {
      country: 'new zealand',
      pronunciation: 'Ethereum',
      characters: 'Ethereum',
      flag: '🇳🇿',
    },
  ],
}

export default countryData
