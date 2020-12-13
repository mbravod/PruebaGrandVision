import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private configService: ConfigService, private http: HttpClient) { }

  getWeather(ciudad: string, pais: string) {
    const url = this.configService.apiUrl + ciudad + ',' + pais + '&APPID=' + this.configService.apiKey;
    return this.http.get(url);
  }
}
