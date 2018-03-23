import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the Trig1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trig1',
  templateUrl: 'trig1.html',
})
export class Trig1Page {
	q1: string[] = ["@text{What is }@sin(0)?"];
	q2: string[] = ["@text{What is }@cos(0)?"];
	a1: string[][] = [["0",'1']];
	a2: string[][] = [["1",'0']];

	constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
		
	}

	ionViewDidLoad() {
		
	}
  

}
