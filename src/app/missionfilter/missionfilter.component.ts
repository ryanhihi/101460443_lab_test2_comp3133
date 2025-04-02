import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-missionfilter',
  imports: [CommonModule, FormsModule],
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.css'
})
//implement search by launched year
export class MissionfilterComponent {
  launchYear: string = '';
  @Output() filteredyear = new EventEmitter<string>();

  //filter
  onFilterChange() {
    this.filteredyear.emit(this.launchYear)
  }

}
