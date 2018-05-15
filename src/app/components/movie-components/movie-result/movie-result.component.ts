import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-result',
  templateUrl: './movie-result.component.html',
  styleUrls: ['./movie-result.component.scss']
})
export class MovieResultComponent implements OnInit {

  @Input() movies: any;
  @Input() nomovies: any;
  @Input() parameters: object;
  @Input() processing: boolean;
  @Input() index: number;
  @Input() comments: any;
  @Input() displayTorrents: any;
  @Input() torrents: any;
  @Input() notorrents: any;

  @Output() submitnext: EventEmitter<any> = new EventEmitter;
  @Output() submitsave: EventEmitter<any> = new EventEmitter;
  @Output() submitcomment: EventEmitter<any> = new EventEmitter;
  @Output() showcomment: EventEmitter<any> = new EventEmitter;
  @Output() searchtorrents: EventEmitter<any> = new EventEmitter;
  @Output() submitback: EventEmitter<any> = new EventEmitter;

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

  submitComment(movieAndComment) {
    this.submitcomment.emit(movieAndComment);
  }

  searchTorrents(movie) {
    this.searchtorrents.emit(movie);
  }

  goBack() {
    this.submitback.emit();
  }
}
