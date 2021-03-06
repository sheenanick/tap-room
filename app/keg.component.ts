import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <div>
      <label>Name: {{keg.name}}</label>
      <p>Brand: {{ keg.brand }}</p>
      <p>Price: {{ keg.price | currency:'USD':true }}</p>
      <p>Alcohol Content: {{ keg.alcoholContent }}%</p>
      <p>Pints Remaining: {{ keg.pintsRemaining }}</p>
      <p>Date: {{ keg.date | date: 'MM/dd/yyyy' }}</p>
    </div>
  `
})

export class KegComponent {
  public keg: Keg;
}
