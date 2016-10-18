import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <nav class="mdl-navigation">
    <a class="mdl-navigation__link" [routerLink]="['/']">Home</a>
      <a class="mdl-navigation__link" [routerLink]="['/new']">New Keg</a>
    </nav>
    <h1>Tap Room App</h1>
    <!--new-keg (newKegSender)="addKeg($event)"></new-keg>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneClickedSender)="finishedEditing()"></edit-keg>
    <keg-list [childKegList]="masterKegList" (clickSender)="showDetails($event)"
    (pintClickSender)="removePint($event)"></keg-list-->
  </div>
  <router-outlet></router-outlet>`
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
