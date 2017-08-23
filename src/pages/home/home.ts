import { YoutubePlayer } from './model/youtube.model';
import { Observable } from 'rxjs/Observable';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { YoutubeService } from './youtube';
import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
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
	private link = "https://www.youtubeinmp3.com/fetch/?video=https://www.youtube.com/watch?v=";
	//https://www.youtubeinmp3.com/fetch/?video=https://www.youtube.com/watch?v=YouTube-Video-ID	
	
	constructor(public platform: Platform, public alertCtrl: AlertController, public navCtrl: NavController, public youtube: YoutubeService, private file: File, private transfer: FileTransfer) {		
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
	}
	
	download(){		
		const fileTransfer: FileTransferObject = this.transfer.create();
		fileTransfer.download(this.link+this._video.player, this.file.dataDirectory + 'file.mp3').then((entry) => {
			console.log('download complete: ' + entry.toURL());
		  }, (error) => {
			  console.log(error)
			// handle error
		  });
	}
	
	fecharBusca(){
		this.item = false;
	}
}
