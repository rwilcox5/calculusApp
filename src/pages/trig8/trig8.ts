import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Trig8Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trig8',
  templateUrl: 'trig8.html',
})
export class Trig8Page {
	testValue: number = 0;
	matchArrayArray: any[] = [];
	matchArray: any[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	for (var i=0;i<5;i++){
  		this.createMArray();
  		this.matchArrayArray.push(this.matchArray);
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Trig3Page');

  }

  	createMArray(){
		let allValues = ['0','@frac{1}{2}','@frac{@sqrt{2}}{2}','@frac{@sqrt{3}}{2}','1'];
		let allMatchQ = [['@sin(0)','@cos(@frac{@pi}{2})'],['@sin(@frac{@pi}{6})','@cos(@frac{@pi}{3})'],['@sin(@frac{@pi}{4})','@cos(@frac{@pi}{4})'],['@sin(@frac{@pi}{3})','@cos(@frac{@pi}{6})'],['@sin(@frac{@pi}{2})','@cos(0)']];
		this.matchArray = [];
		let notIN = Math.floor(Math.random()*5);
		for (var i=0;i<5;i++){
			if (i!=notIN){
				this.matchArray.push([allValues[i].split("@").join("\\"),i]);
				this.matchArray.push([allMatchQ[i][0].split("@").join("\\"),i]);
			}
			else{
				this.matchArray.push([allValues[i].split("@").join("\\"),i]);
			}
		}
	}

}
