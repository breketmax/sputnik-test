
export interface IWeather{
        coord:ICoord,
        weather: IWeatherParams[],
        base: string,
        main: IMain,
        visibility: number,
        wind: IWind,
        clouds: ICloud,
        dt: number,
        sys: ISys,
        timezone: number,
        id: number,
        name: string,
        cod: number,
        isWeatherLoading:boolean,
        isWeatherError:string,
        isWeatherFullfield:boolean
}

export interface ICoord{
    lon: number,
    lat: number
}
interface IWeatherParams{
    id: 800,
    main: string,
    description: string,
    icon: string
}
interface  IMain{
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
}

interface IWind{
    speed: number,
    deg: number
}

interface ICloud{
    all: number
}

interface ISys{
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
}