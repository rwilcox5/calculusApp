import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Functions1Page } from '../functions1/functions1';
import { Functions2Page } from '../functions2/functions2';

//New Pages

/**
 * Generated class for the Functions0Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-functions0',
  templateUrl: 'functions0.html',
})
export class Functions0Page {
	functions1 = Functions1Page;
	functions2 = Functions2Page;
	linearParams = {};
	quadraticParams = {};
	logParams ={};
	expParams ={};
	mixedParams = {};
//New Names

	levelPoints = ['0px','0px','0px','0px','0px','0px'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.linearParams = this.makeLinear();
  	this.quadraticParams = this.makeQuadratic();
  	this.logParams = this.makeLog();
  	this.expParams = this.makeExp();
  	this.mixedParams = this.makeMixed();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Functions0Page');
  }
  makeLinear(){
  	let a = (Math.floor(Math.random()*3)+1).toString();
	let b = (Math.floor(Math.random()*3)+1).toString();
	let c = (Math.floor(Math.random()*3)+1).toString();
	let d = (Math.floor(Math.random()*3)+1).toString();
	let e = (Math.floor(Math.random()*2)+2).toString();
	let f = (Math.floor(Math.random()*2)+1).toString();
	let allValues = ['y=x+'+a,'y=x-'+b,'y=-x+'+c,'y=-x-'+d,'y='+e+'x+'+f];
	let allMatchQ = ['canvasx+'+a,'canvasx-'+b,'canvas-1*x+'+c,'canvas-1*x-'+d,'canvas'+e+'*x+'+f,'canvas'+e+'*x+'+f];
  	return {'firstArray':allValues,'secondArray':allMatchQ};
  }
  makeQuadratic(){
  	let a = (Math.floor(Math.random()*2)+1).toString();
	let b = (Math.floor(Math.random()*2)+1).toString();
	let c = (Math.floor(Math.random()*2)+1).toString();
	let d = (Math.floor(Math.random()*2)+1).toString();
	let e = (Math.floor(Math.random()*2)+1).toString();
	let f = (Math.floor(Math.random()*2)+1).toString();
	let allValues = ['y=x^2+'+a,'y=x^2-'+b,'y=(x-'+c+')^2','y=(x+'+d+')^2','y=(x+'+e+')^2+'+f];
	let allMatchQ = ['canvasMath.pow(x,2)+'+a,'canvasMath.pow(x,2)-'+b,'canvasMath.pow(x-'+c+',2)','canvasMath.pow(x+'+d+',2)','canvasMath.pow(x+'+e+',2)+'+f];
	return {'firstArray':allValues,'secondArray':allMatchQ};
  }
  makeLog(){
  	let a = (Math.floor(Math.random()*2)+1).toString();
	let b = (Math.floor(Math.random()*2)+1).toString();
	let c = (Math.floor(Math.random()*2)+1).toString();
	let d = (Math.floor(Math.random()*2)+1).toString();
	let allValues = ['y=@ln(x+'+a+')','y=@ln(x)+'+b,'y=@ln(x-'+c+')','y=@ln(x)-'+d,'y=@ln(x)'];
	let allMatchQ = ['canvasMath.log(x+'+a+')','canvasMath.log(x)+'+b,'canvasMath.log(x-'+c+')','canvasMath.log(x)-'+d,'canvasMath.log(x)'];
	return {'firstArray':allValues,'secondArray':allMatchQ};
  }
  makeExp(){
  	let a = (Math.floor(Math.random()*2)+1).toString();
	let b = (Math.floor(Math.random()*2)+1).toString();
	let c = (Math.floor(Math.random()*2)+1).toString();
	let d = (Math.floor(Math.random()*2)+1).toString();
	let allValues = ['y=e^(x)','y=e^(-x)','y=@ln(x-'+c+')','y=@ln(x)-'+d,'y=@ln(x)'];
	let allMatchQ = ['canvasMath.log(x+'+a+')','canvasMath.log(x)+'+b,'canvasMath.log(x-'+c+')','canvasMath.log(x)-'+d,'canvasMath.log(x)'];
	return {'firstArray':allValues,'secondArray':allMatchQ};
  }
  makeMixed(){
  	let allValues = ['@text{Linear}','@text{Quadratic}','@text{Logarithmic}','@text{Trigonometric}','@text{Exponential}'];
	let allMatchQ = ['canvasx','canvasMath.pow(x,2)','canvasMath.log(x)','canvasMath.sin(x)','canvasMath.pow(2.7,x)'];
	return {'firstArray':allValues,'secondArray':allMatchQ};
		
  }

}
