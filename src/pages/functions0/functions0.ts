import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//New Pages

/**
 * Generated class for the Functions0Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-functions0',
  templateUrl: 'functions0.html',
})
export class Functions0Page {
	//New Names

	levelPoints = {'functions1':'0px'};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Functions0Page');
  }

}
