import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class TorrentService {

  private apiUrl = environment.apiUrl + '/torrent';

  constructor(private httpClient: HttpClient) { }

  getTorrents(movie) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.apiUrl}`, movie, options)
      .toPromise();
  }

}
