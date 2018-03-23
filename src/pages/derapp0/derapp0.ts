import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//New Pages
/**
 * Generated class for the Derapp0Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-derapp0',
  templateUrl: 'derapp0.html',
})
export class Derapp0Page {
	//New Names

	levelPoints = {'derapp1':'0px'};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Derapp0Page');
  }

}
