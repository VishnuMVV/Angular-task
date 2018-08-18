import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import {Router} from '@angular/router';
import { MovieDetails } from '../movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title: String;
  movies = [];
  movie = new MovieDetails();
  // result: Object;
  constructor(private router: Router , private omdbService: SearchService) {}

  // getMovie(title: String) {
  // this.omdbService.searchMovie(title)
  //      .subscribe(next: (result) => {
  //               this.result = result;
  // });
  // }
  getMovie(title: string) {
    this.omdbService.getMovies(title)
                   .then(re => this.movies = re.Search);
  }
  ngOnInit() {}
  addMovie(movie) {
    this.movie.movieId = movie.imdbID;
    this.movie.movieTitle = movie.Title;
    this.movie.movieRating = movie.imdbVotes;
    this.movie.movieReleaseYear = movie.Year;
    this.omdbService.addMovie(this.movie).subscribe();
  }
}
