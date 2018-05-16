import { Component, OnInit } from '@angular/core';
import { ShowService } from '../../services/show.service';

@Component({
  selector: 'app-show-result-page',
  templateUrl: './show-result-page.component.html',
  styleUrls: ['./show-result-page.component.scss']
})
export class ShowResultPageComponent implements OnInit {
  shows: Array<any>;
  noshows = false;
  comments: any;
  parameters: object;
  error: string;
  processing: boolean;
  feedbackEnabled: boolean;
  commentShow = false;
  index: number;
  showsLength: number;
  comment: string;

  constructor(private showService: ShowService) { }

  ngOnInit() {
    this.parameters = this.showService.getParameters();
    this.showService.getShows(this.parameters)
      .then((result) => {
        this.index = 0;
        if (result.length === 0) {
          this.noshows = true;
        } else {
          this.shows = result;
          this.showsLength = result.length;
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
    this.showService.showComments(this.shows[this.index])
      .then((comments) => {
        this.comments = comments;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleNextShow() {
    if (this.showsLength === 3) {
      if (this.index < 2) {
        this.index++;
      } else {
        this.index = 0;
      }
    } else if (this.showsLength === 2) {
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

  handleSaveShow(show) {
    this.showService.saveShow(show);
  }

  handleSubmitComment(showAndComment) {
    this.comment = '';
    this.showService.saveComment(showAndComment)
      .then((comment) => {
        this.comments.push(comment);
      });
  }

}
