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
import { Trig8Page } from '../trig8/trig8';
import { Trig9Page } from '../trig9/trig9';
import { Trig10Page } from '../trig10/trig10';
import { Trig11Page } from '../trig11/trig11';
import { Trig12Page } from '../trig12/trig12';
//New Pages
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
	trig8 = Trig8Page;
	trig9 = Trig9Page;
	trig10 = Trig10Page;
	trig11 = Trig11Page;
	trig12 = Trig12Page;
	//New Names
	levelPoints = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Trig0Page');
    this.getData();
  }

  getData() {
  		this.levelPoints = [];
  		let allGets = [];
	  	for (var i=0;i<13;i++){
	  		this.levelPoints.push('0px');
	  		if (i>0){
		  		allGets.push(this.storage.get('pointsTrig'+i.toString()));
		  	}
	  	}
	  	

	  	Promise.all(allGets).then(values => {
	  		for (var i=0;i<12;i++){
	  			if (values[i]>20){
	  				values[i]=20;
	  			}
	  			this.levelPoints[i+1] = (values[i]*10).toString()+'px';
	  		}
	  	});

	  
	}

	clearData(){
		for (var i=1;i<13;i++){
			this.storage.set('pointsTrig'+i.toString(),0);
		}
	}


}
