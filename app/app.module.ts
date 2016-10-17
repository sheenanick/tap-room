import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { NewKegComponent }   from './new-keg.component';
import { KegListComponent }   from './keg-list.component';
import { KegComponent }   from './keg.component';
import { EditKegComponent }   from './edit-keg.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    NewKegComponent,
    KegListComponent,
    KegComponent,
    EditKegComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
