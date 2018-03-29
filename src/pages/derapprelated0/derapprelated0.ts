import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Derapprelated1Page } from '../derapprelated1/derapprelated1';
import { Derapprelated2Page } from '../derapprelated2/derapprelated2';
import { Derapprelated3Page } from '../derapprelated3/derapprelated3';
import { Derapprelated4Page } from '../derapprelated4/derapprelated4';
import { Derapprelated5Page } from '../derapprelated5/derapprelated5';
import { Derapprelated6Page } from '../derapprelated6/derapprelated6';
//New Pages

/**
 * Generated class for the Derapprelated0Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-derapprelated0',
  templateUrl: 'derapprelated0.html',
})
export class Derapprelated0Page {
		derapprelated1 = Derapprelated1Page;
	derapprelated2 = Derapprelated2Page;
	derapprelated3 = Derapprelated3Page;
	derapprelated4 = Derapprelated4Page;
	derapprelated5 = Derapprelated5Page;
	derapprelated6 = Derapprelated6Page;
//New Names

	levelPoints = ['0px','0px','0px','0px','0px','0px','0px','0px'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Derapprelated0Page');
  }

}
