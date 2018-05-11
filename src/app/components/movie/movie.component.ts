import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() processing: boolean;
  @Input() parameters: any;

  @Output() submitform: EventEmitter<any> = new EventEmitter;

  genres = [
    { value: '28', viewValue: 'Action' },
    { value: '12', viewValue: 'Adventure' },
    { value: '16', viewValue: 'Animation' },
    { value: '35', viewValue: 'Comedy' },
    { value: '80', viewValue: 'Crime' },
    { value: '99', viewValue: 'Documentary' },
    { value: '18', viewValue: 'Drama' },
    { value: '10751', viewValue: 'Family' },
    { value: '14', viewValue: 'Fantasy' },
    { value: '36', viewValue: 'History' },
    { value: '27', viewValue: 'Horror' },
    { value: '10402', viewValue: 'Music' },
    { value: '9648', viewValue: 'Mystery' },
    { value: '10749', viewValue: 'Romance' },
    { value: '878', viewValue: 'Science Fiction' },
    { value: '10770', viewValue: 'TV Movie' },
    { value: '53', viewValue: 'Thriller' },
    { value: '37', viewValue: 'Western' }
  ];

  languages = [
    { value: 'en-US', viewValue: 'English' },
    { value: 'es-ES', viewValue: 'Spanish' },
    { value: 'fr-FR', viewValue: 'French' },
    { value: 'de-DE', viewValue: 'German' },
    { value: 'pt-PT', viewValue: 'Portuguese' },
    { value: 'ru-RU', viewValue: 'Russian' }
  ];

  constructor() {
    this.parameters = {};
  }

  ngOnInit() {
  }

  submitForm(form) {
    console.log(form.value);
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
