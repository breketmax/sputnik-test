export interface IWeather {
  coord: ICoord
  weather: IWeatherParams[]
  base: string
  main: IMain
  visibility: number
  wind: IWind
  clouds: ICloud
  dt: number
  sys: ISys
  timezone: number
  id: number
  name: string
  cod: number
  isWeatherLoading: boolean
  isWeatherError: string
  isWeatherFullfield: boolean
  time: ITime
  isNight: boolean
}

export interface ICoord {
  lon: number
  lat: number
}
interface IWeatherParams {
  id: 800
  main: string
  description: string
  icon: string
}
interface IMain {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

interface IWind {
  speed: number
  deg: number
}

interface ICloud {
  all: number
}

interface ISys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}
interface ITime {
  hours: number
  minutes: number
  day: string
  month: string
  number: number
}

export enum Month {
  Jan = 0,
  Feb = 1,
  Mar = 2,
  Apr = 3,
  May = 4,
  Jun = 5,
  Jul = 6,
  Aug = 7,
  Sep = 8,
  Oct = 9,
  Nov = 10,
  Dec = 11
}

export enum Day {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6
}
