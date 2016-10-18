import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewKegComponent } from './new-keg.component';
import { AppComponent }   from './app.component';
import { KegListComponent }   from './keg-list.component';

export const routes: Routes = [
  { path: '', component: KegListComponent },
  { path: 'kegs', component: KegListComponent },
  { path: 'new', component: NewKegComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
