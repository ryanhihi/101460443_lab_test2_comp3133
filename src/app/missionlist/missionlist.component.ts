import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'app-missionlist',
  imports: [],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})
export class MissionlistComponent implements OnInit{

  launches: any = [];

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.spacexService.getLaunches().subscribe(data => {
      this.launches = data;
    });
  }
}
