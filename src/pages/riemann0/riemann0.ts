import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Riemann1Page } from '../riemann1/riemann1';
import { Riemann2Page } from '../riemann2/riemann2';
import { Riemann3Page } from '../riemann3/riemann3';
import { Riemann4Page } from '../riemann4/riemann4';
import { Riemann5Page } from '../riemann5/riemann5';
//New Pages
/**
 * Generated class for the Riemann0Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-riemann0',
  templateUrl: 'riemann0.html',
})
export class Riemann0Page {
		riemann1 = Riemann1Page;
	riemann2 = Riemann2Page;
	riemann3 = Riemann3Page;
	riemann4 = Riemann4Page;
	riemann5 = Riemann5Page;
//New Names

	levelPoints = {'riemann1':'0px'};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Riemann0Page');
  }

}
