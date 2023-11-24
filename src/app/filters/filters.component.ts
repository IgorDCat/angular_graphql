import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FiltersService } from '../services/filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  radioOptions : 'Barge' | 'Cargo' | 'High Speed Craft' | 'Tug' = 'Tug'
  form: FormGroup
  numberOfSelected = 0

  constructor(private filtersService: FiltersService) {
    this.form = new FormGroup({
      'Port of Los Angeles': new FormControl(true),
      'Port Canaveral': new FormControl(true),
      'Fort Lauderdale': new FormControl(false)
    })
    this.setNumberOfSelected()
  }

  ngOnInit() {
    this.filtersService.filterCheckbox.emit(this.form.value)
    this.filtersService.radioOptions.emit(this.radioOptions)
  }

  setNumberOfSelected() {
    this.numberOfSelected = 0
    Object.values(this.form.value).forEach(val => val ? this.numberOfSelected++ : null)
  }

  setCheckOptions() {
    setTimeout(() => {
      this.filtersService.filterCheckbox.emit(this.form.value)
      this.setNumberOfSelected()
    }, 0)
  }

  onRadioChange() {
    setTimeout(() => {
      this.filtersService.radioOptions.emit(this.radioOptions)
    }, 0)
  }
}
