import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacexService, Mission } from '../spacex.service';
import { RouterModule, Router } from '@angular/router';
//Add filter
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports:  [ CommonModule, MissionfilterComponent, RouterModule],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit{

  missions: Mission[] = [];

  //add filtered array
  filteredMissions: Mission[] = [];
  selectedYear: string = '';

  constructor(private spaceXService: SpacexService) {}

  ngOnInit() {
    this.spaceXService.getMissions().subscribe((data) => {
      this.missions = data;
      this.filteredMissions = data; // fetch addition filtered data only
    });
  }

  //Filter handler
  // by year 

  filterByYear(year: string) {
    this.selectedYear = year;
    this.filteredMissions = this.missions.filter(mission => 
      mission.launch_year.includes(this.selectedYear));

      if (this.filteredMissions.length === 0) {
        this.filteredMissions = [];
      }
    }
  
}
