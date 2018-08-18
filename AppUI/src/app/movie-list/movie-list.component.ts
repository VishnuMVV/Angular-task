import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList = [];
  deleteList;
  constructor(private movieService: SearchService , private route: Router) { }

  ngOnInit() {
    this.movieService.getWhishList().subscribe(fullList => this.movieList = fullList);
  }
  deleteMovie(id: string) {
    this.movieService.deleteMovie(id).subscribe(fullList => this.deleteList = fullList);
    this.route.navigate(['movie-list']);
  }
}
