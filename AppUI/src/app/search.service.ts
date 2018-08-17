import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieDetails } from './movie';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    // searchMovie(title: String) {
    //     const url = 'http://www.omdbapi.com/?s=' + title + '&apikey=35346456';
    //     return this.http.get(url)
    //                 .map((response: Response) => {
    //                     return response.json();
    //                 });
    // }
    baseUrl = 'http://localhost:8080/movie/api/v1/movie';
    constructor( private http: HttpClient ) {}
    getMovies(title: string) {
        return fetch('http://www.omdbapi.com/?s=' + title + '&apikey=8f89faaf')
                .then(response => response.json());
    }
    getWhishList(): Observable<MovieDetails[]> {
        return this.http.get<MovieDetails[]>(this.baseUrl + 's');
    }
    deleteMovie(id: number) {
        return this.http.delete(this.baseUrl + '/' + id);
    }
    addMovie(movie: string) {
        return this.http.post(this.baseUrl, movie);
    }
}
