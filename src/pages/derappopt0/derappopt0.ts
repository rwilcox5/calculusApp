import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Derappopt1Page } from '../derappopt1/derappopt1';
import { Derappopt2Page } from '../derappopt2/derappopt2';
import { Derappopt3Page } from '../derappopt3/derappopt3';
import { Derappopt4Page } from '../derappopt4/derappopt4';
import { Derappopt5Page } from '../derappopt5/derappopt5';
import { Derappopt6Page } from '../derappopt6/derappopt6';
import { Derappopt7Page } from '../derappopt7/derappopt7';
//New Pages
/**
 * Generated class for the Derappopt0Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-derappopt0',
  templateUrl: 'derappopt0.html',
})
export class Derappopt0Page {
	derappopt1 = Derappopt1Page;
	derappopt2 = Derappopt2Page;
	derappopt3 = Derappopt3Page;
	derappopt4 = Derappopt4Page;
	derappopt5 = Derappopt5Page;
	derappopt6 = Derappopt6Page;
	derappopt7 = Derappopt7Page;
//New Names

	levelPoints = ['0px','0px','0px','0px','0px','0px','0px','0px'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Derappopt0Page');
  }

}
