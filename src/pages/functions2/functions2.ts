import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the Functions2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-functions2',
  templateUrl: 'functions2.html',
})
export class Functions2Page {
	testValue: number = 0;
	matchArrayArray: any[] = [];
	matchArray: any[] = [];
	canvasSize: number[] = [100,100,.2,.2];


  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform) {
  	this.canvasSize[0] = this.platform.height()/4-25;
  	this.canvasSize[1] = this.platform.height()/4-25;
  	this.canvasSize[2] = 10/this.canvasSize[0];
  	this.canvasSize[3] = 10/this.canvasSize[0];
  	for (var i=0;i<5;i++){
  		this.createMArray();
  		this.matchArrayArray.push(this.matchArray);
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Trig3Page');

  }

  	createMArray(){
  		let a = (Math.floor(Math.random()*2)+1).toString();
  		let b = (Math.floor(Math.random()*2)+1).toString();
  		let c = (Math.floor(Math.random()*2)+1).toString();
  		let d = (Math.floor(Math.random()*2)+1).toString();
  		let e = (Math.floor(Math.random()*2)+1).toString();
  		let f = (Math.floor(Math.random()*2)+1).toString();
		let allValues = ['y=x^2+'+a,'y=x^2-'+b,'y=(x-'+c+')^2','y=(x+'+d+')^2','y=(x+'+e+')^2+'+f];
		let allMatchQ = ['canvasMath.pow(x,2)+'+a,'canvasMath.pow(x,2)-'+b,'canvasMath.pow(x-'+c+',2)','canvasMath.pow(x+'+d+',2)','canvasMath.pow(x+'+e+',2)+'+f];
		this.matchArray = [];
		let notIN = Math.floor(Math.random()*5);
		for (var i=0;i<5;i++){
			if (i!=notIN){
				this.matchArray.push([allValues[i].split("@").join("\\"),i]);
				this.matchArray.push([allMatchQ[i].split("@").join("\\"),i]);
			}
			else{
				this.matchArray.push([allValues[i].split("@").join("\\"),i]);
			}
		}
	}

}
