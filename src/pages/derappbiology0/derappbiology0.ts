import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Derappbiology1Page } from '../derappbiology1/derappbiology1';
import { Derappbiology2Page } from '../derappbiology2/derappbiology2';
import { Derappbiology3Page } from '../derappbiology3/derappbiology3';
import { Derappbiology4Page } from '../derappbiology4/derappbiology4';
import { Derappbiology5Page } from '../derappbiology5/derappbiology5';
import { Derappbiology6Page } from '../derappbiology6/derappbiology6';
//New Pages

/**
 * Generated class for the Derappbiology0Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-derappbiology0',
  templateUrl: 'derappbiology0.html',
})
export class Derappbiology0Page {
	derappbiology1 = Derappbiology1Page;
	derappbiology2 = Derappbiology2Page;
	derappbiology3 = Derappbiology3Page;
	derappbiology4 = Derappbiology4Page;
	derappbiology5 = Derappbiology5Page;
	derappbiology6 = Derappbiology6Page;
//New Names

	levelPoints = ['0px','0px','0px','0px','0px','0px','0px','0px'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Derappbiology0Page');
  }

}
