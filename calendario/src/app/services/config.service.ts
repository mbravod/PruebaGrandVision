import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  _data: any = {};
  cargada = false;

  constructor(private http: HttpClient) { 
    this.getData();
  }

  public getData() {
    return new Promise((resolve, reject) => {
      this.http.get('../../assets/endPoints.json').subscribe(data => {
        this._data = data;
        this.cargada = true;
        if (this.cargada) {
          resolve(true);
        }
      }, error => {
        console.log('Error al cargar la información' + error);
        reject(true);
      });
    });
  }

  get apiKey() {
    return this._data.apiKey;
  }

  get apiUrl() {
    return this._data.apiUrl;
  }

}
