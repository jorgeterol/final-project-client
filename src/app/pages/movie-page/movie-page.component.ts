import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {

  error: string;
  processing: boolean;
  feedbackEnabled: boolean;
  movies: any;

  constructor(private movieService: MoviesService, private router: Router) { }

  ngOnInit() {
  }

  handleSubmitForm(params) {
    this.movieService.getMovies(params)
    .then((result) => {
      this.movies = result;
      console.log(this.movies);
      this.router.navigate(['/movies/result']);
    })
    .catch((err) => {
      this.error = err.error.code; // :-)
      this.processing = false;
      this.feedbackEnabled = false;
    });
  }

}
