import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './components/films/films.component';

import { HttpClientModule } from '@angular/common/http';
import { FilmComponent } from './components/film/film.component';

@NgModule({
  declarations: [AppComponent, FilmsComponent, FilmComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
