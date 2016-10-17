import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My Second Angular 2 App</h1>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneClickedSender)="finishedEditing()"></edit-keg>
    <keg-list [childKegList]="masterKegList" (clickSender)="showDetails($event)"
    (pintClickSender)="removePint($event)"></keg-list>
  </div>`
  })

  export class AppComponent {
    public masterKegList: Keg[] = [];
    selectedKeg = null;
    addKeg(newKegFromChild: Keg) {
      this.masterKegList.push(newKegFromChild);
    }

    showDetails(clickedKeg: Keg) {
      this.selectedKeg = clickedKeg;
    }
    finishedEditing() {
      this.selectedKeg = null;
    }
    removePint(kegFromChild: Keg) {
      kegFromChild.pintsRemaining--;
    }

  }
