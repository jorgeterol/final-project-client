import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-result-page',
  templateUrl: './movie-result-page.component.html',
  styleUrls: ['./movie-result-page.component.scss']
})
export class MovieResultPageComponent implements OnInit {

  movies: any;
  parameters: object;
  error: string;
  processing: boolean;
  feedbackEnabled: boolean;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.parameters = this.movieService.getParameters();
    this.movieService.getMovies(this.parameters)
      .then((result) => {
        this.movies = result;
      })
      .catch((err) => {
        this.error = err.error.code; // :-)
        this.processing = false;
        this.feedbackEnabled = false;
      });
  }

}
