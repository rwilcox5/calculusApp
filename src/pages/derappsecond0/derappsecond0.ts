import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Derappsecond1Page } from '../derappsecond1/derappsecond1';
import { Derappsecond2Page } from '../derappsecond2/derappsecond2';
import { Derappsecond3Page } from '../derappsecond3/derappsecond3';
import { Derappsecond4Page } from '../derappsecond4/derappsecond4';
import { Derappsecond5Page } from '../derappsecond5/derappsecond5';
import { Derappsecond6Page } from '../derappsecond6/derappsecond6';
//New Pages

/**
 * Generated class for the Derappsecond0Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-derappsecond0',
  templateUrl: 'derappsecond0.html',
})
export class Derappsecond0Page {
		derappsecond1 = Derappsecond1Page;
	derappsecond2 = Derappsecond2Page;
	derappsecond3 = Derappsecond3Page;
	derappsecond4 = Derappsecond4Page;
	derappsecond5 = Derappsecond5Page;
	derappsecond6 = Derappsecond6Page;
//New Names

	levelPoints = ['0px','0px','0px','0px','0px','0px','0px','0px'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Derappsecond0Page');
  }

}
