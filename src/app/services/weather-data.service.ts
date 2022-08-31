import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { WeatherData } from '../models/WeatherData';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  private apiUrl = "https://localhost:7133/api/WeatherData";

  constructor(private http: HttpClient) { }

  getWeatherData(): Observable<WeatherData[]>{
    return this.http.get<WeatherData[]>(this.apiUrl);
  }

  addWeatherData(weatherData: WeatherData): Observable<WeatherData>{
    return this.http.post<WeatherData>(this.apiUrl, {
      dateTime: weatherData.dateTime,
      temperature: weatherData.temperature,
      humidity: weatherData.humidity,
      sensorId: weatherData.sensorId
    });
  }
}
