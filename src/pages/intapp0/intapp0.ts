import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//New Pages

/**
 * Generated class for the Intapp0Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intapp0',
  templateUrl: 'intapp0.html',
})
export class Intapp0Page {
	//New Names

	levelPoints = {'intapp1':'0px'};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Intapp0Page');
  }

}
