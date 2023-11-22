import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  animations: [
    trigger('placeholder', [
      state('start', style({ 'font-size': '16px', transform: 'translateY(0)' })),
      state('end', style({ 'font-size': '14px', transform: 'translateY(-20px)' })),
      transition('start => end', animate('200ms ease')),
      transition('end => start', animate('200ms ease')),
    ])
  ]
})
export class InputComponent {
  inputValue = ''
  state = 'start'

  onInputChange() {
    this.inputValue !== '' ? this.state = 'end' : this.state = 'start'
  }
}
