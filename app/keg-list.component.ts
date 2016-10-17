import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <div *ngFor="let currentKeg of childKegList">
    <keg-display [keg]="currentKeg"></keg-display>
    <button class="btn btn-danger" (click)="removePint(currentKeg)">Remove Pint</button>
    <button class="btn btn-secondary" (click)="editButtonHasBeenClicked(currentKeg)">Edit</button>
  </div>
  `
})

export class KegListComponent {
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
