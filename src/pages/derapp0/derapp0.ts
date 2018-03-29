import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Derappopt0Page } from '../derappopt0/derappopt0';
import { Derappnewton0Page } from '../derappnewton0/derappnewton0';
import { Derapprelated0Page } from '../derapprelated0/derapprelated0';
import { Derappvelocity0Page } from '../derappvelocity0/derappvelocity0';
import { Derappbiology0Page } from '../derappbiology0/derappbiology0';
import { Derappeconomics0Page } from '../derappeconomics0/derappeconomics0';
import { Derappsecond0Page } from '../derappsecond0/derappsecond0';
import { Derappfirst0Page } from '../derappfirst0/derappfirst0';
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

	derappopt0 = Derappopt0Page;
	derappnewton0 = Derappnewton0Page;
	derapprelated0 = Derapprelated0Page;
	derappvelocity0 = Derappvelocity0Page;
	derappbiology0 = Derappbiology0Page;
	derappeconomics0 = Derappeconomics0Page;
	derappsecond0 = Derappsecond0Page;
	derappfirst0 = Derappfirst0Page;
//New Names

	levelPoints = ['0px','0px','0px','0px','0px','0px','0px','0px'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Derapp0Page');
  }

}
