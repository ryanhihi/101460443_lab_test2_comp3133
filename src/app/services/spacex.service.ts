import { Injectable } from '@angular/core';
//import Http / Observable
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../model/mission';




@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  //api link
  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) { 
  }

  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.apiUrl);
  }
}
