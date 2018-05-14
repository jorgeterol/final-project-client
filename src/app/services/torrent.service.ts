import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TorrentService {

  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getTorrents(movie) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseUrl}/torrent`, movie, options)
      .toPromise();
  }

}
