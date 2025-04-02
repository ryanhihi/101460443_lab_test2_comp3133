import { Injectable } from '@angular/core';
//import Http / Observable
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Mission {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  details: string;
  links: {
    mission_patch_small: string;
    article_link: string;
    wikipedia: string;
    video_link: string;
  };
  rocket: {
    rocket_name: string;
    rocket_type: string;
  };
}


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
