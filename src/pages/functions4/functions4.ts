import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the Functions4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-functions4',
  templateUrl: 'functions4.html',
})
export class Functions4Page {
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
		let allValues = ['@text{Linear}','@text{Quadratic}','@text{Logarithmic}','@text{Trigonometric}','@text{Exponential}'];
		let allMatchQ = [['canvasx+3','canvas2*x-1'],['canvasMath.pow(x,2)+1','canvasMath.pow(x,2)-1'],['canvasMath.log(x)','canvasMath.log(x)+1'],['canvasMath.sin(x)','canvasMath.cos(x)'],['canvasMath.pow(2.7,x)','canvasMath.pow(2,x)']];
		this.matchArray = [];
		let notIN = Math.floor(Math.random()*5);
		for (var i=0;i<5;i++){
			if (i!=notIN){
				this.matchArray.push([allValues[i].split("@").join("\\"),i]);
				this.matchArray.push([allMatchQ[i][Math.floor(Math.random()*2)].split("@").join("\\"),i]);
			}
			else{
				this.matchArray.push([allValues[i].split("@").join("\\"),i]);
			}
		}
	}

}
