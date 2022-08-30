import { WeatherData } from "./WeatherData"

export interface Sensor {
    id?: string,
    name: string,
    country: string,
    city: string,
    averageTemperature: number,
    averageHumidity: number,
    weatherData: WeatherData[]
}