import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
})
export class FilmComponent implements OnInit {
  film: any;
  constructor(
    private activatedroute: ActivatedRoute,
    private filmsService: FilmsService
  ) {}

  ngOnInit(): void {
    const id = this.activatedroute.snapshot.paramMap.get('imdbID')!;
    this.filmsService.getFilm(id).subscribe((film) => (this.film = film));
  }
}
