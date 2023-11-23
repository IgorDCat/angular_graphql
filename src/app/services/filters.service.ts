import { EventEmitter, Injectable } from '@angular/core';
import { FilterCheckbox } from '../models/filter-checkbox.model';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  filterCheckbox = new EventEmitter<FilterCheckbox>()
  radioOptions = new EventEmitter<'Barge' | 'Cargo' | 'High Speed Craft' | 'Tug'>()
}
