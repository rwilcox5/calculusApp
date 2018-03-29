import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Derappfirst1Page } from '../derappfirst1/derappfirst1';
import { Derappfirst2Page } from '../derappfirst2/derappfirst2';
import { Derappfirst3Page } from '../derappfirst3/derappfirst3';
import { Derappfirst4Page } from '../derappfirst4/derappfirst4';
import { Derappfirst5Page } from '../derappfirst5/derappfirst5';
//New Pages
/**
 * Generated class for the Derappfirst0Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-derappfirst0',
  templateUrl: 'derappfirst0.html',
})
export class Derappfirst0Page {
	derappfirst1 = Derappfirst1Page;
	derappfirst2 = Derappfirst2Page;
	derappfirst3 = Derappfirst3Page;
	derappfirst4 = Derappfirst4Page;
	derappfirst5 = Derappfirst5Page;
//New Names

	levelPoints = ['0px','0px','0px','0px','0px','0px','0px','0px'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Derappfirst0Page');
  }

}
