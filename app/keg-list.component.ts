import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <p><input type="checkbox" (click)="toggleMaxTen()"/><label>Show kegs with <10 pints remaining</label></p>
  <select (change)="onChangeSort($event.target.value)" class="filter">
    <option value="name" selected>Sort by name</option>
    <option value="brand">Sort by brand</option>
    <option value="price">Sort by price</option>
    <option value="alcoholContent">Sort by alcohol content</option>
    <option value="pintsRemaining">Sort by pints remaining</option>
    <option value="date">Sort by date</option>
  </select>
  <input type="checkbox" (click)="toggleSortOrder()"/><label>Reverse</label>
  <div *ngFor="let currentKeg of childKegList | keg:maxToShow | sort:sortBy:order">
  <div *ngIf="currentKeg.price < 5" class="cheap">
    <keg-display [keg]="currentKeg"></keg-display>
  </div>
  <div *ngIf="currentKeg.price >= 5 && keg.price <= 8">
    <keg-display [keg]="currentKeg"></keg-display>
  </div>
  <div *ngIf="currentKeg.price > 8" class="expensive">
    <keg-display [keg]="currentKeg"></keg-display>
  </div>
    <button class="btn btn-danger" (click)="removePint(currentKeg)">Remove Pint</button>
    <button class="btn btn-secondary" (click)="editButtonHasBeenClicked(currentKeg)">Edit</button>
  </div>
  `
})

export class KegListComponent {
  public maxToShow: number = 124;
  public sortBy: string = 'name';
  public order:boolean = true;
  onChangeSort(optionFromMenu) {
    this.sortBy = optionFromMenu;
  }
  toggleSortOrder() {
    this.order = (!this.order);
  }
  toggleMaxTen() {
    if(this.maxToShow === 10) {
      this.maxToShow = 124;
    } else {
      this.maxToShow = 10;
    }
  }
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
  @Output() pintClickSender = new EventEmitter();
  removePint(kegToEdit: Keg) {
    this.pintClickSender.emit(kegToEdit);
  }
}
