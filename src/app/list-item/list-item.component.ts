import { Component, Input } from '@angular/core';
import { Ship } from '../models/ship.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() ship: Ship | undefined
}
