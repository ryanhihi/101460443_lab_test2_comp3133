import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacexService, Mission } from '../spacex.service';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports:  [ CommonModule],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})
export class MissionlistComponent implements OnInit{

  missions: Mission[] = [];

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.spacexService.getMissions().subscribe(data => {
      this.missions = data;
    });
  }
}
