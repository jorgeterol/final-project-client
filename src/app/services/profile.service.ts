import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProfileService {

  username: string;

  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getProfile(username): Promise<any> {
    const options = {
      withCredentials: true
    };

    return this.httpClient.get(`${this.baseUrl}/profile/${username}`, options)
      .toPromise();
  }

}
