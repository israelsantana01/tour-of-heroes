import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from '../components/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailsComponent } from 'src/components/hero-details/hero-details.component';
import { MessagesComponent } from 'src/components/messages/messages.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
