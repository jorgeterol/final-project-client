import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-result-page',
  templateUrl: './movie-result-page.component.html',
  styleUrls: ['./movie-result-page.component.scss']
})
export class MovieResultPageComponent implements OnInit {

  movies: Array<object>;
  movie: any;
  parameters: object;
  error: string;
  processing: boolean;
  feedbackEnabled: boolean;
  index: number;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.parameters = this.movieService.getParameters();
    this.movieService.getMovies(this.parameters)
      .then((result) => {
        this.index = 0;
        this.movies = result;
      })
      .catch((err) => {
        this.error = err.error.code; // :-)
        this.processing = false;
        this.feedbackEnabled = false;
      });
    }

    nextMovie() {
      if (this.index < 2) {
        this.index++;
      } else {
        this.index = 0;
      }
  }

}
