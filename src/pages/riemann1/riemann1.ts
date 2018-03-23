import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Riemann1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-riemann1',
  templateUrl: 'riemann1.html',
})
export class Riemann1Page {
	private xfn: string = '';
	private maxError: number[] = [];
	private maxRects: number = 3;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.xfn = '5';
  	this.maxError = [-10,20];
  	this.maxRects = 3;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Riemann1Page');
  }

}
