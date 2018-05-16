import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MoviesService {

  parameters: Object;

  private apiUrl = environment.apiUrl + '/movies';

  constructor(private httpClient: HttpClient) { }

  saveParameters(parameters) {
    return this.parameters = parameters;
  }

  getParameters() {
    return this.parameters;
  }

  getMovies(parameters): Promise<any> {
    const options = {
      withCredentials: true
    };

    return this.httpClient.post(`${this.apiUrl}`, parameters, options)
      .toPromise();
  }

  saveMovie(movie): any {
    const options = {
      withCredentials: true
    };

    return this.httpClient.post(`${this.apiUrl}/save`, movie, options)
      .toPromise();
  }

  saveComment(movieAndComment): any {
    const options = {
      withCredentials: true
    };

    return this.httpClient.post(`${this.apiUrl}/comment`, movieAndComment, options)
      .toPromise();
  }

  showComments(movie): any {
    const options = {
      withCredentials: true
    };

    return this.httpClient.post(`${this.apiUrl}/show`, movie, options)
      .toPromise();
  }
}
