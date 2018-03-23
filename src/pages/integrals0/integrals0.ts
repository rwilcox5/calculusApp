import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//New Pages

/**
 * Generated class for the Integrals0Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-integrals0',
  templateUrl: 'integrals0.html',
})
export class Integrals0Page {
	//New Names

	levelPoints = {'integrals1':'0px'};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Integrals0Page');
  }

}
