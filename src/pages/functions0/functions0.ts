import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Functions1Page } from '../functions1/functions1';
import { Functions2Page } from '../functions2/functions2';
import { Functions3Page } from '../functions3/functions3';
import { Functions4Page } from '../functions4/functions4';
import { Functions5Page } from '../functions5/functions5';
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
		functions1 = Functions1Page;
	functions2 = Functions2Page;
	functions3 = Functions3Page;
	functions4 = Functions4Page;
	functions5 = Functions5Page;
//New Names

	levelPoints = ['0px','0px','0px','0px','0px','0px'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Functions0Page');
  }

}
