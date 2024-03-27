import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';//importacions propias de JS

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { NausikaaModule } from './nausikaa/nausikaa.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CounterModule,
    AppRoutingModule,
    HeroesModule,
    NausikaaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
