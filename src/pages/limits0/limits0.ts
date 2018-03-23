import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//New Pages

/**
 * Generated class for the Limits0Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-limits0',
  templateUrl: 'limits0.html',
})
export class Limits0Page {
	//New Names

	levelPoints = {'limits1':'0px'};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Limits0Page');
  }

}
