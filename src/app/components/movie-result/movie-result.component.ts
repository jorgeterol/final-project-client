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

  constructor() {}

  ngOnInit() {
    console.log(this.movies);
  }

  nextMovie() {
    this.submitnext.emit();
  }

  saveMovie(movie) {
    this.submitsave.emit(movie);
  }

}
