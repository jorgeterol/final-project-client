import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-search-page',
  templateUrl: './movie-search-page.component.html',
  styleUrls: ['./movie-search-page.component.scss']
})
export class MovieSearchPageComponent implements OnInit {

  error: string;
  processing: boolean;
  feedbackEnabled: boolean;
  movies: any;

  constructor(private movieService: MoviesService, private router: Router) { }

  ngOnInit() {
  }

  handleSubmitForm(params) {
    this.movieService.saveParameters(params);
    this.router.navigate(['/movies/result']);
  }

}
