import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Solve3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solve3',
  templateUrl: 'solve3.html',
})
export class Solve3Page {
	private xfn: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.xfn = '3';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Solve3Page');
  }

}
