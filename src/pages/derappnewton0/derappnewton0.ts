import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Derappnewton1Page } from '../derappnewton1/derappnewton1';
import { Derappnewton2Page } from '../derappnewton2/derappnewton2';
import { Derappnewton3Page } from '../derappnewton3/derappnewton3';
import { Derappnewton4Page } from '../derappnewton4/derappnewton4';
import { Derappnewton5Page } from '../derappnewton5/derappnewton5';
import { Derappnewton6Page } from '../derappnewton6/derappnewton6';
//New Pages

/**
 * Generated class for the Derappnewton0Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-derappnewton0',
  templateUrl: 'derappnewton0.html',
})
export class Derappnewton0Page {
		derappnewton1 = Derappnewton1Page;
	derappnewton2 = Derappnewton2Page;
	derappnewton3 = Derappnewton3Page;
	derappnewton4 = Derappnewton4Page;
	derappnewton5 = Derappnewton5Page;
	derappnewton6 = Derappnewton6Page;
//New Names

	levelPoints = ['0px','0px','0px','0px','0px','0px','0px','0px'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Derappnewton0Page');
  }

}
