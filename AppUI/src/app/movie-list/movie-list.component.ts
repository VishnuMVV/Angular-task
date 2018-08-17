import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList = [];
  deleteList;
  constructor(private movieService: SearchService ) { }

  ngOnInit() {
    this.movieService.getWhishList().subscribe(fullList => this.movieList = fullList);
   }
  addMovie() { }
  deleteMovie(id: number) {
    this.movieService.deleteMovie(id).subscribe(fullList => this.deleteList = fullList);
  }
}
