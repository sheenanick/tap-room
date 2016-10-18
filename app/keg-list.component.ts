import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <p><input type="checkbox" (click)="toggleMaxTen()"/><label>Show kegs with <10 pints remaining</label>
  <div *ngFor="let currentKeg of childKegList | keg:maxToShow">
    <keg-display [keg]="currentKeg"></keg-display>
    <button class="btn btn-danger" (click)="removePint(currentKeg)">Remove Pint</button>
    <button class="btn btn-secondary" (click)="editButtonHasBeenClicked(currentKeg)">Edit</button>
  </div>
  `
})

export class KegListComponent {
  public maxToShow: number = 124;
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
