import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-send-comments',
  templateUrl: './show-send-comments.component.html',
  styleUrls: ['./show-send-comments.component.scss']
})
export class ShowSendCommentsComponent implements OnInit {


  @Input() show: any;
  @Input() disabled: boolean;
  @Input() processing: boolean;

  @Output() submitcommentcomponent: EventEmitter<any> = new EventEmitter;
  constructor() { }

  showAndComment: any;
  comment: any;

  ngOnInit() {
  }

  submitComment(form, show) {
    this.showAndComment = {
      show: show,
      comment: form.value.comment
    };
    this.submitcommentcomponent.emit(this.showAndComment);
    this.comment = '';
  }
}
