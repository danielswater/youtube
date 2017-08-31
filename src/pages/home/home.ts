import { YoutubePlayer } from './model/youtube.model';
import { Observable } from 'rxjs/Observable';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { YoutubeService } from './youtube';
import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import 'rxjs/Rx';

declare var cordova: any;

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
		this.item = true;
	}

	selecionarVideo(video) {
		this.item = false;
		this._video.player = video.id.videoId;
		this._video.titulo = video.snippet.title;
		this._video.descricao = video.snippet.description;
		console.log(video)
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

			console.log(entry.toURL())

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
		this.item = false;
	}
}
