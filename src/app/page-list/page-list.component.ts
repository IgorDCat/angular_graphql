import { Component, OnInit } from '@angular/core';
import { QueryService } from '../services/query.service';
import { Ship } from '../models/ship.model';
import { FiltersService } from '../services/filters.service';
import { FilterCheckbox } from '../models/filter-checkbox.model';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {
  ships: Ship[] | undefined
  shipsFiltered: Ship[] | undefined
  radioValue: string | undefined
  checkboxValue: FilterCheckbox | undefined

  constructor(
    private queryService: QueryService,
    private filtersService: FiltersService
  ) { }

  ngOnInit() {
    this.filtersService.radioOptions.subscribe(res => {
      this.radioValue = res
      if(this.ships) {
        this.filterShips()
      }
    })

    this.filtersService.filterCheckbox.subscribe((res: FilterCheckbox) => {
      this.checkboxValue = res
      if(this.ships) {
        this.filterShips()
      }
    })

    this.queryService.getShipsQuery()
      .subscribe((res: any) => {
        this.ships = res.data.ships
        this.filterShips()
      })
  }

  filterShips() {
    this.shipsFiltered = this.ships
      ?.filter((ship: Ship) => ship['type'] === this.radioValue)
    let res: Ship[] = []
    this.shipsFiltered?.map((ship: Ship) => {
      this.checkboxValue?.[ship.home_port] ? res = [...res, ship] : null
    })
    this.shipsFiltered = res
  }
}
