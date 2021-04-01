import { Movie } from './movie.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

    url: string = "http://www.omdbapi.com/?apikey=e6d414fb";
    movie: Movie;
    movieID: string = '';
    clickedAgain: boolean = false;
    onSubmit() {
        this.http.get(this.url).subscribe((movieObj) => {
          this.movie = JSON.parse(JSON.stringify(movieObj));
          if (this.clickedAgain = true) {
            for(let i = 0; i < 7; i++) {
              this.movieID = '';
              this.movieID += Math.floor(Math.random()*9).toString();
            }
          }
          if (this.movie.Response == "False") {
            console.log('false');
            this.movieID = '';
            for(let i = 0; i < 7; i++) {
              this.movieID += Math.floor(Math.random()*9).toString();
            }
            this.clickedAgain = false;
          }  
          this.url = "http://www.omdbapi.com/?apikey=e6d414fb&i=tt" + this.movieID;
          this.clickedAgain =true;
          return this.movieID;
        })
        console.log(this.movieID)
        console.log(this.url)
        
        return this.http.get(this.url);
    };
   
}