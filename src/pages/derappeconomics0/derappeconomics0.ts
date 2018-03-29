import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Derappeconomics1Page } from '../derappeconomics1/derappeconomics1';
import { Derappeconomics2Page } from '../derappeconomics2/derappeconomics2';
import { Derappeconomics3Page } from '../derappeconomics3/derappeconomics3';
import { Derappeconomics4Page } from '../derappeconomics4/derappeconomics4';
import { Derappeconomics5Page } from '../derappeconomics5/derappeconomics5';
import { Derappeconomics6Page } from '../derappeconomics6/derappeconomics6';
//New Pages

/**
 * Generated class for the Derappeconomics0Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-derappeconomics0',
  templateUrl: 'derappeconomics0.html',
})
export class Derappeconomics0Page {
		derappeconomics1 = Derappeconomics1Page;
	derappeconomics2 = Derappeconomics2Page;
	derappeconomics3 = Derappeconomics3Page;
	derappeconomics4 = Derappeconomics4Page;
	derappeconomics5 = Derappeconomics5Page;
	derappeconomics6 = Derappeconomics6Page;
//New Names

	levelPoints = ['0px','0px','0px','0px','0px','0px','0px','0px'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Derappeconomics0Page');
  }

}
