import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location){
    const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?';
    //ENTER YOUR API KEY HERE (make sure to no include < >)
    const apiId = '&appid=1a114a781287b4271745708711952991&units=imperial';
    //const location = 'london,us';
    return this.http.get(
          baseUrl + apiId +'&q=' + location
      );

  }
}
