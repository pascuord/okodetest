import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './components/films/films.component';
import { FilmComponent } from './components/film/film.component';

const routes: Routes = [
  { path: '', component: FilmsComponent },
  { path: 'film/:imdbID', component: FilmComponent },
  { path: '**', component: FilmsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
