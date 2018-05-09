import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;

  constructor() { }

  ngOnInit() {
  }

  submitForm(form) {
    console.log(form);
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      // this.someService.method(... data ...)
      //   .then((result) => {
      //     // ... handle result, reset form, etc...
      //     // ... navigate with this.router.navigate(['...'])
      //     // ... maybe turn this to false if your're staying on the page - this.processing = false;
      //   })
      //   .catch((err) => {
      //     this.error = err.error.error; // :-)
      //     this.processing = false;
      //     this.feedbackEnabled = false;
      //   });
    }
  }
}
