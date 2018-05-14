import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-result-page',
  templateUrl: './movie-result-page.component.html',
  styleUrls: ['./movie-result-page.component.scss']
})
export class MovieResultPageComponent implements OnInit {

  movies: Array<any>;
  comments: any;
  nomovies = false;
  parameters: object;
  error: string;
  processing: boolean;
  feedbackEnabled: boolean;
  commentShow = false;
  index: number;
  comment: string;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.parameters = this.movieService.getParameters();
    this.movieService.getMovies(this.parameters)
      .then((result) => {
        this.index = 0;
        if (result.length === 0) {
          this.nomovies = true;
        } else {
          this.movies = result;
        }
        this.getComments();
      })
      .catch((err) => {
        this.error = err.error.code; // :-)
        this.processing = false;
        this.feedbackEnabled = false;
      });
  }

  getComments() {
    this.movieService.showComments(this.movies[this.index])
      .then((comments) => {
        this.comments = comments;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleNextMovie() {
    if (this.index < 2) {
      this.index++;
    } else {
      this.index = 0;
    }
    this.getComments();
    this.comment = '';
  }

  handleSaveMovie(movie) {
    this.movieService.saveMovie(movie);
  }

  handleSubmitComment(movieAndComment) {
    this.movieService.saveComment(movieAndComment)
      .then((comment) => {
        this.comments.push(comment);
      });
  }
}
