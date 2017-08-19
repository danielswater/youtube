  import { Http, Response } from '@angular/http';
  import { Injectable } from "@angular/core";
  import 'rxjs/add/operator/map';  
  
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  const API_TOKEN = 'AIzaSyAJk1xUI72YYfBMgEc84gjHUX-k2AN6-B0';
  //`${BASE_URL}?q=${keyword}&part=snippet&maxResults=50&key=${API_TOKEN}`
  
  
  @Injectable()
  export class YoutubeService {
	
	constructor(private http:Http) {
		
	}
	
	search(query){
		return this.http.get(`${BASE_URL}?q=${query}&part=snippet&maxResults=25&key=${API_TOKEN}`)
		.map((res:Response) => res.json())
		.map(json => json.items);
	}
	
}