import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { NewKegComponent }   from './new-keg.component';
import { KegListComponent }   from './keg-list.component';
import { KegComponent }   from './keg.component';
import { EditKegComponent }   from './edit-keg.component';
import { KegPipe } from './keg.pipe';
import { SortPipe } from './sort.pipe';
import { routing } from './app.routes';
import { KegService } from './keg.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    AppComponent,
    NewKegComponent,
    KegListComponent,
    KegComponent,
    EditKegComponent,
    KegPipe,
    SortPipe
  ],
  providers: [ KegService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
