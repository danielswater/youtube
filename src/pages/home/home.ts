import { YoutubePlayer } from './model/youtube.model';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';
import { YoutubeService } from './youtube';
import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

declare var cordova: any;

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})


export class HomePage {

	search = new FormControl();
	results: Observable<any>;
	resultRelated: any;
	public videosRelacionados: any[];
	public searchItem: boolean;
	public showResult: boolean = false;
	private _video = new YoutubePlayer();
	private link = "https://www.youtubeinmp3.com/fetch/?video=https://www.youtube.com/watch?v=";
	storageDirectory: string = '';
	

	constructor(public platform: Platform, public alertCtrl: AlertController,
		public navCtrl: NavController, public youtube: YoutubeService,
		private file: File, private transfer: FileTransfer) {
		this.results =
			this.search.valueChanges
				.debounceTime(200)
				.switchMap(query => youtube.search(query));
	}

	keyPress(ev) {
		this.searchItem = true;
	}

	selecionarVideo(video) {
		this.searchItem = false;
		this.showResult = true;
		this._video.player = video.id.videoId;
		this._video.titulo = video.snippet.title;
		this._video.descricao = video.snippet.description;
		this.youtube.videosRelacionados(video.id.videoId).subscribe(videos => {
			this.videosRelacionados = videos;
			console.log(this.videosRelacionados)
		})
		
		
	}

	download() {

		const fileTransfer: FileTransferObject = this.transfer.create();
		fileTransfer.download(this.link + this._video.player, this.file.dataDirectory + 'file.mp3').then((entry) => {
			let alertSuccess = this.alertCtrl.create({
				title: `Download Concluído!`,
				subTitle: `$file was successfully downloaded to: ${entry.toURL()}`,
				buttons: ['Ok']
			});

			alertSuccess.present();

		}, (error) => {
			let alertFailure = this.alertCtrl.create({
				title: `Download Failed!`,
				subTitle: `file was not successfully downloaded. Error code: ${error.code}`,
				buttons: ['Ok']
			});

			alertFailure.present();
		});
		
	}

	fecharBusca() {
		this.searchItem = false;
	}
}
