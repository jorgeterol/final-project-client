import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-display-comments',
  templateUrl: './movie-display-comments.component.html',
  styleUrls: ['./movie-display-comments.component.scss']
})
export class MovieDisplayCommentsComponent implements OnInit {

  @Input() comments: any;

  constructor() { }

  ngOnInit() {
  }

}
