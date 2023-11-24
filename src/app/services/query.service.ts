import { Apollo, gql } from 'apollo-angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  public query = gql`
    query ExampleQuery($limit: Int) {
      ships(limit: $limit) {
        name, home_port, type
      }
    }
  `;

  constructor(private apollo: Apollo) {
  }

  getShipsQuery() {
    return this.apollo.query({query: this.query, variables: {limit: 20}})
  }
}
