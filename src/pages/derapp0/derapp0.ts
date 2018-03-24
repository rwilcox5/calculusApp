import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Derapp1Page } from '../derapp1/derapp1';
import { Derapp2Page } from '../derapp2/derapp2';
import { Derapp3Page } from '../derapp3/derapp3';
import { Derapp4Page } from '../derapp4/derapp4';
import { Derapp5Page } from '../derapp5/derapp5';
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
		derapp1 = Derapp1Page;
	derapp2 = Derapp2Page;
	derapp3 = Derapp3Page;
	derapp4 = Derapp4Page;
	derapp5 = Derapp5Page;
//New Names

	levelPoints = {'derapp1':'0px','derapp2':'0px','derapp3':'0px','derapp4':'0px','derapp5':'0px'};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Derapp0Page');
  }

}
