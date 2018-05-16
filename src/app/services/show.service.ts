import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ShowService {

  parameters: Object;
  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  saveParameters(parameters) {
    return this.parameters = parameters;
  }

  getParameters() {
    return this.parameters;
  }

  getShows(parameters): Promise<any> {
    const options = {
      withCredentials: true
    };

    return this.httpClient.post(`${this.baseUrl}/shows`, parameters, options)
      .toPromise();
  }

  saveShow(show): any {
    const options = {
      withCredentials: true
    };

    return this.httpClient.post(`${this.baseUrl}/shows/save`, show, options)
      .toPromise();
  }

  saveComment(showAndComment): any {
    const options = {
      withCredentials: true
    };

    return this.httpClient.post(`${this.baseUrl}/shows/comment`, showAndComment, options)
      .toPromise();
  }

  showComments(show): any {
    const options = {
      withCredentials: true
    };

    return this.httpClient.post(`${this.baseUrl}/shows/show`, show, options)
      .toPromise();
  }

}
