import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ShowService {

  parameters: Object;
  private apiUrl = environment.apiUrl + '/shows';

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

    return this.httpClient.post(`${this.apiUrl}`, parameters, options)
      .toPromise();
  }

  saveShow(show): any {
    const options = {
      withCredentials: true
    };

    return this.httpClient.post(`${this.apiUrl}/save`, show, options)
      .toPromise();
  }

  saveComment(showAndComment): any {
    const options = {
      withCredentials: true
    };

    return this.httpClient.post(`${this.apiUrl}/comment`, showAndComment, options)
      .toPromise();
  }

  showComments(show): any {
    const options = {
      withCredentials: true
    };

    return this.httpClient.post(`${this.apiUrl}/show`, show, options)
      .toPromise();
  }

}
