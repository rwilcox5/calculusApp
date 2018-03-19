import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Trig7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trig7',
  templateUrl: 'trig7.html',
})
export class Trig7Page {
	sudoku1: number[] = [2,0,3,1,0,0,0,0,0,0,0,0,1,3,0,0];
	sudoku2: number[] = [0,0,0,0,3,1,0,0,0,3,2,4,0,0,0,0];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Trig7Page');
  }

}
