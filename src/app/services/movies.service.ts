import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MoviesService {

  parameters: Object;
  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  saveParameters(parameters) {
    return this.parameters = parameters;
  }

  getParameters() {
    return this.saveParameters(this.parameters);
  }

  getMovies(parameters): Promise<any> {
    const options = {
      withCredentials: true
    };

    return this.httpClient.post(`${this.baseUrl}/movies`, parameters, options)
      .toPromise();
  }

  saveMovie(movie): any {
    const options = {
      withCredentials: true
    };

    return this.httpClient.post(`${this.baseUrl}/movies/save`, movie, options)
      .toPromise();  }
}
