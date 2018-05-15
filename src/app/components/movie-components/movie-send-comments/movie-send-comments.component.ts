import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-send-comments',
  templateUrl: './movie-send-comments.component.html',
  styleUrls: ['./movie-send-comments.component.scss']
})
export class MovieSendCommentsComponent implements OnInit {

  @Input() movie: any;
  @Input() disabled: boolean;
  @Input() processing: boolean;

  @Output() submitcommentcomponent: EventEmitter < any > = new EventEmitter;
  constructor() { }

  movieAndComment: any;
  comment: any;

  ngOnInit() {
  }

  submitComment(form, movie) {
    this.movieAndComment = {
      movie: movie,
      comment: form.value.comment
    };
    this.submitcommentcomponent.emit(this.movieAndComment);
    this.comment = '';
  }

}
