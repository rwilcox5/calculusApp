import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Riemann2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-riemann2',
  templateUrl: 'riemann2.html',
})
export class Riemann2Page {
	private xfn: string = '';
	private maxError: number[] = [];
	private maxRects: number = 3;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.xfn = 'x+2';
  	this.maxError = [-10,10];
  	this.maxRects = 5;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Riemann1Page');
  }

}
