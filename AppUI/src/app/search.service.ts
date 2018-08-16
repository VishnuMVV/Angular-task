import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
    // searchMovie(title: String) {
    //     const url = 'http://www.omdbapi.com/?s=' + title + '&apikey=35346456';
    //     return this.http.get(url)
    //                 .map((response: Response) => {
    //                     return response.json();
    //                 });
    // }
    constructor() {}
    getMovies(title: string) {
        return fetch('http://www.omdbapi.com/?s=' + title + '&apikey=8f89faaf')
                .then(response => response.json());
    }
}
