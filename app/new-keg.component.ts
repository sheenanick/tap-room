import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Keg } from './keg.model';
import { KegService } from './keg.service';

@Component({
  selector: 'new-keg',
  template: `
    <div>
      <label>Enter Keg Name:</label>
      <input class="form-control" #newName>
      <label>Enter Keg Brand:</label>
      <input class="form-control" #newBrand>
      <label>Enter Price Per Pint:</label>
      <input class="form-control" #newPrice type="number">
      <label>Enter Alcohol Content:</label>
      <input class="form-control" #newAlcoholContent type="number">
    </div>
    <button class="btn btn-primary" (click)="addClicked(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value); newName.value=''; newBrand.value=''; newPrice.value=''; newAlcoholContent.value='';">Add</button>
  `,
    providers: [KegService]
})

export class NewKegComponent {
  constructor(private kegService: KegService) {
  }
  @Output() newKegSender = new EventEmitter();
  addClicked(name: string, brand: string, price: number, alcoholContent: number) {
    var newKegToAdd: Keg = new Keg(name, brand, price, alcoholContent);
    this.kegService.addKeg(newKegToAdd);
  }
}
