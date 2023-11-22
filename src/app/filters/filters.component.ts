import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  radioOptions : 'Barge' | 'Cargo' | 'High Speed Craft' = 'Barge'
}