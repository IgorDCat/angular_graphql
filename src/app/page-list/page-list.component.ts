import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { QueryService } from '../services/query.service';
import { Ship } from '../models/ship.model';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {
  ships: Ship[] | undefined

  constructor(private apollo: Apollo, private queryService: QueryService) {
  }

  ngOnInit() {
    this.apollo.query({query: this.queryService.query, variables: {limit: 5}})
      .subscribe((res: any) => this.ships = res.data.ships)
  }
}
