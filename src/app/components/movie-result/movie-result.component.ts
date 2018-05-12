import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-result',
  templateUrl: './movie-result.component.html',
  styleUrls: ['./movie-result.component.scss']
})
export class MovieResultComponent implements OnInit {

  @Input() movies: any;
  @Input() nomovies = false;
  @Input() parameters: object;
  @Input() error: string;
  @Input() processing: boolean;
  @Input() feedbackEnabled: boolean;
  @Input() index: number;

  @Output() submitnext: EventEmitter<any> = new EventEmitter;
  @Output() submitsave: EventEmitter<any> = new EventEmitter;
  @Output() submitcomment: EventEmitter<any> = new EventEmitter;

  movieAndComment: any;
  comment: string;
  constructor() {}

  ngOnInit() {
  }

  nextMovie() {
    this.comment = '';
    this.submitnext.emit();
  }

  saveMovie(movie) {
    this.submitsave.emit(movie);
  }

  submitComment(form, movie) {
    this.movieAndComment = {
      movie: movie,
      comment: form.value.comment
    };
    this.submitcomment.emit(this.movieAndComment);
  }

}
