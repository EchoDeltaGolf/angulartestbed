import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistNamesComponent } from './artist-names/artist-names.component';
import { DataService } from './data.service';
import { LoginExampleComponent } from './login-example/login-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TravelEntryComponent } from './travel-entry/travel-entry.component';
import { OberservableExampleComponent } from './oberservable-example/oberservable-example.component';

@NgModule({
  declarations: [
     AppComponent
    ,ArtistsComponent
    ,ArtistNamesComponent
    ,LoginExampleComponent
    ,TravelEntryComponent, OberservableExampleComponent
  ],
  imports: [
     BrowserModule
    ,AppRoutingModule
    ,FormsModule
    ,ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
