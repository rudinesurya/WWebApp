import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Sensor } from '../models/Sensor';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  private apiUrl = "https://localhost:7133/api/Sensors";

  constructor(private http: HttpClient) { }

  getSensors(sensorNames?: string[], startDate?: Date, endDate?: Date): Observable<Sensor[]>{
    let params = new HttpParams();

    if (sensorNames !== undefined){
      sensorNames!.forEach(sensorName => {
        params = params.append('sensorNames', sensorName);
      });
    }
    
    if (startDate !== undefined)
      params = params.append('startDate', startDate!.toISOString());
    if (endDate !== undefined)
      params = params.append('endDate', endDate!.toISOString());

    console.log(params);
    return this.http.get<Sensor[]>(this.apiUrl, {params: params});
  }

  addSensor(sensor: Sensor): Observable<Sensor>{
    return this.http.post<Sensor>(this.apiUrl, {
      name: sensor.name,
      country: sensor.country,
      city: sensor.city
    });
  }
}
