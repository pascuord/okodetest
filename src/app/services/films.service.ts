import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Film } from '../models/film.interface';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  BASE_API_URL: string = 'http://www.omdbapi.com/?apikey=3fcfe8a3';
  constructor(private http: HttpClient) {}

  getAllFilms(s:string): Observable<any> {
    return this.http.get<any>(this.BASE_API_URL + '&s=' + s);
  }

  getFilm(id: string): Observable<any> {
    return this.http.get<any>(this.BASE_API_URL + '&i=' + id);
  }
}
