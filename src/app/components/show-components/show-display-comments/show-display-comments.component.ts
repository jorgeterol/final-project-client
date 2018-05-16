import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-display-comments',
  templateUrl: './show-display-comments.component.html',
  styleUrls: ['./show-display-comments.component.scss']
})
export class ShowDisplayCommentsComponent implements OnInit {

  @Input() comments: any;

  constructor() { }

  ngOnInit() {
  }

}
