import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_TOKEN = 'AIzaSyAJk1xUI72YYfBMgEc84gjHUX-k2AN6-B0';

@Injectable()
export class YoutubeService {

  constructor(private http: Http) {

  }

  search(query) {
    return this.http.get(`${BASE_URL}?q=${query}&part=snippet&maxResults=25&key=${API_TOKEN}`)
      .map((res: Response) => res.json())
      .map(json => json.items);
  }

  videosRelacionados(id): Observable<any> {
    return this.http.get(`${BASE_URL}?part=snippet&relatedToVideoId=${id}&type=video&key=${API_TOKEN}`)
      .map(data => {
        return data.json().items;
      })
  }

}