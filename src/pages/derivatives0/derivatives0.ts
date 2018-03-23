import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//New Pages
/**
 * Generated class for the Derivatives0Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-derivatives0',
  templateUrl: 'derivatives0.html',
})
export class Derivatives0Page {
	//New Names

	levelPoints = {'derivatives1':'0px'};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Derapp0Page');
  }

}
