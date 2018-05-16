import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProfileService {

  username: string;

  private apiUrl = environment.apiUrl + '/profile';

  constructor(private httpClient: HttpClient) { }

  getProfile(username): Promise<any> {
    const options = {
      withCredentials: true
    };

    return this.httpClient.get(`${this.apiUrl}/${username}`, options)
      .toPromise();
  }

}
