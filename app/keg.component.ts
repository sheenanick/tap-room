import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <div *ngIf="keg.price < 5" class="cheap">
      <label>Name: {{keg.name}}</label>
      <p>Brand: {{ keg.brand }}</p>
      <p>Price: \${{ keg.price }}</p>
      <p>Alcohol Content: {{ keg.alcoholContent }}%</p>
      <p>Pints Remaining: {{ keg.pintsRemaining }}</p>
    </div>
    <div *ngIf="keg.price >= 5 && keg.price <= 8">
      <label>Name: {{keg.name}}</label>
      <p>Brand: {{ keg.brand }}</p>
      <p>Price: \${{ keg.price }}</p>
      <p>Alcohol Content: {{ keg.alcoholContent }}%</p>
      <p>Pints Remaining: {{ keg.pintsRemaining }}</p>
    </div>
    <div *ngIf="keg.price > 8" class="expensive">
      <label>Name: {{keg.name}}</label>
      <p>Brand: {{ keg.brand }}</p>
      <p>Price: \${{ keg.price }}</p>
      <p>Alcohol Content: {{ keg.alcoholContent }}%</p>
      <p>Pints Remaining: {{ keg.pintsRemaining }}</p>
    </div>
  `
})

export class KegComponent {
  public keg: Keg;
}
