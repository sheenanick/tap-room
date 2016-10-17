import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div *ngIf="childSelectedKeg">
    <label>Name:</label>
    <input class="form-control" [(ngModel)]="childSelectedKeg.name">
    <label>Brand:</label>
    <input class="form-control" [(ngModel)]="childSelectedKeg.brand">
    <label>Price:</label>
    <input class="form-control" [(ngModel)]="childSelectedKeg.price">
    <label>Alcohol Content:</label>
    <input class="form-control" [(ngModel)]="childSelectedKeg.alcoholContent">
    <label>Pints Remaining:</label>
    <input class="form-control" [(ngModel)]="childSelectedKeg.pintsRemaining">
    <button class="btn btn-warning" (click)="doneClicked()">Done</button>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
