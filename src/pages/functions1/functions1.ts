import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the Functions1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-functions1',
  templateUrl: 'functions1.html',
})
export class Functions1Page {
	testValue: number = 0;
	matchArrayArray: any[] = [];
	matchArray: any[] = [];
	canvasSize: number[] = [100,100,.2,.2];


  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform) {
  	this.canvasSize[0] = Math.min(this.platform.height()/4-25,this.platform.width()/4-25);
  	this.canvasSize[1] = Math.min(this.platform.height()/4-25,this.platform.width()/4-25);
  	this.canvasSize[2] = 10/this.canvasSize[0];
  	this.canvasSize[3] = 10/this.canvasSize[1];
  	for (var i=0;i<5;i++){
  		this.createMArray();
  		this.matchArrayArray.push(this.matchArray);
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Trig3Page');

  }

  	createMArray(){
  		let a = (Math.floor(Math.random()*3)+1).toString();
  		let b = (Math.floor(Math.random()*3)+1).toString();
  		let c = (Math.floor(Math.random()*3)+1).toString();
  		let d = (Math.floor(Math.random()*3)+1).toString();
  		let e = (Math.floor(Math.random()*2)+2).toString();
  		let f = (Math.floor(Math.random()*2)+1).toString();
		let allValues = ['y=x+'+a,'y=x-'+b,'y=-x+'+c,'y=-x-'+d,'y='+e+'x+'+f];
		let allMatchQ = [['canvasx+'+a,'canvasx+'+a],['canvasx-'+b,'canvasx-'+b],['canvas-1*x+'+c,'canvas-1*x+'+c],['canvas-1*x-'+d,'canvas-1*x-'+d],['canvas'+e+'*x+'+f,'canvas'+e+'*x+'+f]];
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
