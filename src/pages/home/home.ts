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
	
	constructor(public navCtrl: NavController, public youtube: YoutubeService) {
		this.results =
		 this.search.valueChanges
		   .debounceTime(200) //debounce for 200ms
		   .switchMap(query => youtube.search(query));
	}

	selectedItem(item){
		console.log('item', item)
	}
	
}
