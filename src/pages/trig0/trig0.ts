import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Trig1Page } from '../trig1/trig1';
import { Trig2Page } from '../trig2/trig2';
import { Trig3Page } from '../trig3/trig3';
import { Trig4Page } from '../trig4/trig4';
import { Trig5Page } from '../trig5/trig5';
import { Trig6Page } from '../trig6/trig6';
import { Trig7Page } from '../trig7/trig7';

/**
 * Generated class for the Trig0Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trig0',
  templateUrl: 'trig0.html',
})
export class Trig0Page {
	trig1 = Trig1Page;
	trig2 = Trig2Page;
	trig3 = Trig3Page;
	trig4 = Trig4Page;
	trig5 = Trig5Page;
	trig6 = Trig6Page;
	trig7 = Trig7Page;
	levelPoints = {'trig1':'0px','trig2':'0px','trig3':'0px','trig4':'0px','trig5':'0px','trig6':'0px','trig7':'0px'};


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Trig0Page');
    this.getData();
  }

  getData() {
	   this.storage.get('pointsTrig1').then((val) => {
	    this.levelPoints.trig1 = (val*10).toString()+'px';
	  });
	  this.storage.get('pointsTrig2').then((val) => {
	    this.levelPoints.trig2 = (val*10).toString()+'px';
	  });
	  this.storage.get('pointsTrig3').then((val) => {
	    this.levelPoints.trig3 = (val*10).toString()+'px';
	  });
	  this.storage.get('pointsTrig4').then((val) => {
	    this.levelPoints.trig4 = (val*10).toString()+'px';
	  });
	  
	}


}
