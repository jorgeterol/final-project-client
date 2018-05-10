import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MoviesService {

  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getMovies(parameters): Promise<any> {
    const options = {
      withCredentials: true
    };

    return this.httpClient.post(`${this.baseUrl}/movies`, parameters, options)
      .toPromise();
  }

}
