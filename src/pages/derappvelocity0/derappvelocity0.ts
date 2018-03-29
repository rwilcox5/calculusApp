import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Derappvelocity1Page } from '../derappvelocity1/derappvelocity1';
import { Derappvelocity2Page } from '../derappvelocity2/derappvelocity2';
import { Derappvelocity3Page } from '../derappvelocity3/derappvelocity3';
import { Derappvelocity4Page } from '../derappvelocity4/derappvelocity4';
import { Derappvelocity5Page } from '../derappvelocity5/derappvelocity5';
import { Derappvelocity6Page } from '../derappvelocity6/derappvelocity6';
//New Pages

/**
 * Generated class for the Derappvelocity0Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-derappvelocity0',
  templateUrl: 'derappvelocity0.html',
})
export class Derappvelocity0Page {
		derappvelocity1 = Derappvelocity1Page;
	derappvelocity2 = Derappvelocity2Page;
	derappvelocity3 = Derappvelocity3Page;
	derappvelocity4 = Derappvelocity4Page;
	derappvelocity5 = Derappvelocity5Page;
	derappvelocity6 = Derappvelocity6Page;
//New Names

	levelPoints = ['0px','0px','0px','0px','0px','0px','0px','0px'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Derappvelocity0Page');
  }

}
