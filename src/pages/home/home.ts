import { YoutubePlayer } from './model/youtube.model';
import { Observable } from 'rxjs/Observable';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { YoutubeService } from './youtube';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/Rx';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})


export class HomePage {

	search = new FormControl();
	results: Observable<any>;
	public item: boolean;
	private _video = new YoutubePlayer();
	
	constructor(public navCtrl: NavController, public youtube: YoutubeService) {
		this.results =
		 this.search.valueChanges
		   .debounceTime(200) //debounce for 200ms
		   .switchMap(query => youtube.search(query));
	}

	keyPress(ev){
		this.item = true;
	}

	selecionarVideo(video){
		this.item = false;
		this._video.player = video.id.videoId;
		this._video.titulo = video.snippet.title;
		this._video.descricao = video.snippet.description;
		console.log(video)
		// this.player = video.id.videoId;
		// console.log(this.player)
	}

	fecharBusca(){
		this.item = false;
	}
}
