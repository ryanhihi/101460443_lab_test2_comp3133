import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MissionlistComponent,],
  template: '<app-missionlist></app-missionlist>',
  styleUrl: './missionlist/missionlist.component.css'
})
export class AppComponent {
  title = '101460443-lab-test2-comp3133_ryan';
}

8323406879