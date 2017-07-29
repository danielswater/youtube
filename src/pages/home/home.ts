import { Observable } from 'rxjs/Observable';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { YoutubeService } from './youtube';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	
	search = new FormControl();
	results: Observable<any>;
	
	constructor(public navCtrl: NavController, public youtube: YoutubeService) {
		/* this.search.valueChanges
		.debounceTime(200)
		.switchMap(query => youtube.search(query))
		.subscribe(result => {
			this.results = result;
			console.log(result);
		}) */
	}
	onSelect(event){
		console.log('evento', event)
	}
}
