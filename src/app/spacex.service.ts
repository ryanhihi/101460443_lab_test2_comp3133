import { Injectable } from '@angular/core';
//import Http / Observable
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  //api link
  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http:HttpClient) { 
  }

  //launch api
  getLaunches():Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
