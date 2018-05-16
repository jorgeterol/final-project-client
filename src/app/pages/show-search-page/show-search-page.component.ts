import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShowService } from '../../services/show.service';

@Component({
  selector: 'app-show-search-page',
  templateUrl: './show-search-page.component.html',
  styleUrls: ['./show-search-page.component.scss']
})
export class ShowSearchPageComponent implements OnInit {

  error: string;
  processing: boolean;
  feedbackEnabled: boolean;
  shows: any;

  constructor(private showService: ShowService, private router: Router) { }

  ngOnInit() {
  }

  handleSubmitForm(params) {
    this.showService.saveParameters(params);
    this.router.navigate(['/shows/result']);
  }

}
