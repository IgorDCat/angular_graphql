import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { QueryService } from '../services/query.service';
import { Ship } from '../models/ship.model';
import { FiltersService } from '../services/filters.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {
  ships: Ship[] | undefined
  radioValue: string | undefined

  constructor(
    private apollo: Apollo,
    private queryService: QueryService,
    private filtersService: FiltersService
  ) { }

  ngOnInit() {
    this.filtersService.radioOptions.subscribe(res => {
      this.radioValue = res
      this.apollo.query({query: this.queryService.query, variables: {limit: 10}})
        .subscribe((res: any) => {
          this.ships = res.data.ships
            ?.filter((ship: Ship) => ship['type'] === this.radioValue)
        })
    })
  }
}
