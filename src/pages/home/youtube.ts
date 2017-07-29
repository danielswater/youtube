/* import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {AutoCompleteService} from 'ionic2-auto-complete';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
//https://www.googleapis.com/youtube/v3/search?part=id&maxResults=50&q={query}&type=video&key={API_KEY} 
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_TOKEN = 'AIzaSyAJk1xUI72YYfBMgEc84gjHUX-k2AN6-B0';

@Injectable()
export class YoutubeService {
  constructor(private http: Http) { }
  
  getResults(keyword:string) {
    return this.http.get("https://restcountries.eu/rest/v1/name/"+keyword)
    .map(
      result =>
      {
        return result.json()
        .filter(item => item.name.toLowerCase().startsWith(keyword.toLowerCase()) )
      });
    }
    
    search(query){
      return this.http.get(`${BASE_URL}?q=${query}&part=snippet&maxResults=5&key=${API_TOKEN}`)
      .map((res: Response) => res.json())
      .map(json => json.items);        
    };
    
  } */
  
  import {AutoCompleteService} from '../../pages/home/component/index'
  import { Http } from '@angular/http';
  import {Injectable} from "@angular/core";
  import 'rxjs/add/operator/map'
  
  @Injectable()
  export class YoutubeService implements AutoCompleteService {
    labelAttribute = "name";
    valor: any;
    
    constructor(private http:Http) {
      
    }
    getResults(keyword:string) {
      return this.http.get("https://restcountries.eu/rest/v1/name/"+keyword)
      .map(
        result =>
        {
          return result.json()
          .filter(item => item.name.toLowerCase().startsWith(keyword.toLowerCase()) )
        });
      }

      
      
    }