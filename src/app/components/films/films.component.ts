import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.interface';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {
  films: any;

  constructor(private filmsService: FilmsService) {
    this.films = [];
  }

  getFilms(event: any) {
    this.filmsService.getAllFilms(event.target.value).subscribe((films) => {
      this.films = films;
    });
  }

  getFilm(id: string) {
    //TODO routing a otro componente y cargar los datos
  }

  ngOnInit(): void {}
}
