import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { genres, languages } from '../../helpers/values';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() processing: boolean;
  @Input() parameters: any;

  @Output() submitform: EventEmitter<any> = new EventEmitter;

  feedbackEnabled = false;
  error = null;
  genres: Array<object> = genres;
  languages: Array<object> = languages;
  invalidRating = false;
  invalidYear = false;

  constructor() {
    this.parameters = {};
  }

  ngOnInit() {
  }

  submitForm(form) {

    if (form.value.rating > 10 || form.value.rating < 0) {
      this.error = '';
      this.feedbackEnabled = true;
      this.invalidRating = true;
      return;
    }

    if (form.value.date > 2018) {
      this.error = '';
      this.feedbackEnabled = true;
      this.invalidYear = true;
      return;
    }

    if (form.valid) {
      this.processing = true;
      this.parameters = {
        rating: form.value.rating,
        language: form.value.language,
        date: form.value.date,
        genre: form.value.genre
      };
      this.submitform.emit(this.parameters);
    }
  }

}
