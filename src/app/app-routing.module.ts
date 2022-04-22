import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistNamesComponent } from './artist-names/artist-names.component';
import { ArtistsComponent } from './artists/artists.component';
import { LoginExampleComponent } from './login-example/login-example.component';
import { OberservableExampleComponent } from './oberservable-example/oberservable-example.component';
import { TravelEntryComponent } from './travel-entry/travel-entry.component';

const routes: Routes = [
   { path: '', component: ArtistsComponent }
  ,{ path: 'artists', component: ArtistsComponent }
  ,{ path: 'artist-names', component: ArtistNamesComponent}
  ,{ path: 'login-example', component: LoginExampleComponent }
  ,{ path: 'travel-entry', component: TravelEntryComponent }
  ,{ path: 'observable-example', component: OberservableExampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
