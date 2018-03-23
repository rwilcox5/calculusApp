import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Solve1Page } from '../solve1/solve1';
import { Solve2Page } from '../solve2/solve2';
import { Solve3Page } from '../solve3/solve3';
import { Solve4Page } from '../solve4/solve4';
import { Solve5Page } from '../solve5/solve5';
import { Solve6Page } from '../solve6/solve6';
//New Pages
/**
 * Generated class for the Solve0Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solve0',
  templateUrl: 'solve0.html',
})
export class Solve0Page {
	solve1 = Solve1Page;
	solve2 = Solve2Page;
	solve3 = Solve3Page;
	solve4 = Solve4Page;
	solve5 = Solve5Page;
  	solve6 = Solve6Page;
//New Names

	levelPoints = {'solve1':'0px','solve2':'0px','solve3':'0px','solve4':'0px','solve5':'0px','solve6':'0px'};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Solve0Page');
  }

}
