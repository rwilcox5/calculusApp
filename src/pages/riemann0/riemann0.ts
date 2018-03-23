import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Riemann1Page } from '../riemann1/riemann1';
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
//New Names

	levelPoints = {'riemann1':'0px'};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Riemann0Page');
  }

}
