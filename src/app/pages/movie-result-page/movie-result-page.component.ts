import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { TorrentService } from '../../services/torrent.service';

@Component({
  selector: 'app-movie-result-page',
  templateUrl: './movie-result-page.component.html',
  styleUrls: ['./movie-result-page.component.scss']
})
export class MovieResultPageComponent implements OnInit {

  movies: Array<any>;
  nomovies = false;
  comments: any;
  torrents: any;
  notorrents = false;
  parameters: object;
  error: string;
  processing: boolean;
  feedbackEnabled: boolean;
  commentShow = false;
  index: number;
  moviesLength: number;
  comment: string;
  displayTorrents = false;

  constructor(private movieService: MoviesService, private torrentService: TorrentService) { }

  ngOnInit() {
    this.parameters = this.movieService.getParameters();
    this.movieService.getMovies(this.parameters)
      .then((result) => {
        this.index = 0;
        if (result.length === 0) {
          this.nomovies = true;
        } else {
          this.movies = result;
          this.moviesLength = result.length;
          this.getComments();
        }
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
    if (this.moviesLength === 3) {
      if (this.index < 2) {
        this.index++;
      } else {
        this.index = 0;
      }
    } else if (this.moviesLength === 2) {
        if (this.index < 1) {
          this.index++;
        } else {
          this.index = 0;
        }
    } else {
      this.index = 0;
    }

    this.getComments();
  }

  handleSaveMovie(movie) {
    this.movieService.saveMovie(movie);
  }

  handleSubmitComment(movieAndComment) {
    this.comment = '';
    this.movieService.saveComment(movieAndComment)
      .then((comment) => {
        this.comments.push(comment);
      });
  }

  handleSearchTorrents(movie) {
    this.displayTorrents = true;
    this.torrentService.getTorrents(movie)
    .then((torrents) => {
      if (torrents === null) {
        this.notorrents = true;
      } else {
      this.torrents = torrents[0].torrents;
      }
    });
  }

  handleGoBack() {
    this.displayTorrents = false;
    this.notorrents = false;
    this.torrents = [];
  }
}
