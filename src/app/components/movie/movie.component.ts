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

  genres: Array<object> = genres;
  languages: Array<object> = languages;

  constructor() {
    this.parameters = {};
  }

  ngOnInit() {
  }

  submitForm(form) {
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
