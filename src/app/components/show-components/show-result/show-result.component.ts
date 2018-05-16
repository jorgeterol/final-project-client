import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.scss']
})
export class ShowResultComponent implements OnInit {

  @Input() shows: any;
  @Input() noshows: any;
  @Input() parameters: object;
  @Input() processing: boolean;
  @Input() index: number;
  @Input() comments: any;

  @Output() submitnext: EventEmitter<any> = new EventEmitter;
  @Output() submitsave: EventEmitter<any> = new EventEmitter;
  @Output() submitcomment: EventEmitter<any> = new EventEmitter;

  comment: string;

  constructor() { }

  ngOnInit() {
  }

  nextShow() {
    this.comment = '';
    this.submitnext.emit();
  }

  saveShow(show) {
    this.submitsave.emit(show);
  }

  submitComment(showAndComment) {
    this.submitcomment.emit(showAndComment);
  }

}
