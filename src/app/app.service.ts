import { Movie } from './movie.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

    url: string = "http://www.omdbapi.com/?apikey=e6d414fb&";
    moviename : string;
    movie: Movie;

    onSubmit() {
        this.url = "http://www.omdbapi.com/?apikey=e6d414fb&t=" + this.moviename;
        console.log(this.url);
        this.http.get(this.url).subscribe((movieObj) => {
          this.movie =JSON.parse(JSON.stringify(movieObj));
          return this.movie;
        })
        return this.http.get(this.url);
    };
   
}