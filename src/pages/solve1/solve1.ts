import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Solve1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solve1',
  templateUrl: 'solve1.html',
})
export class Solve1Page {
	q1: string[] = [];
	q2: string[] = [];
	a1: string[][] = [];
	a2: string[][] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	for (var i=0;i<10;i++){
	  	let addTo = Math.abs(randn(5))+1;
	  	let equalIt = addTo;
	  	while (equalIt==addTo || equalIt*-1==addTo){
	  		equalIt = randn(5);
	  	}
	  	let eqStrP = '';
	  	let eqStrN = '';
	  	if (Math.random()<.25){
	  		eqStrP = 'x+'+addTo.toString()+'='+equalIt.toString();
	  		eqStrN = 'x-'+addTo.toString()+'='+equalIt.toString();
	  	}
	  	else if (Math.random()<.333){
	  		eqStrP = addTo.toString()+'+x='+equalIt.toString();
	  		eqStrN = '-'+addTo.toString()+'+x='+equalIt.toString();
	  	}
	  	else if (Math.random()<.5){
	  		eqStrP = equalIt.toString()+'=x+'+addTo.toString();
	  		eqStrN = equalIt.toString()+'=x-'+addTo.toString();
	  	}
	  	else {
	  		eqStrP = equalIt.toString()+'='+addTo.toString()+'+x';
	  		eqStrN = equalIt.toString()+'=-'+addTo.toString()+'+x';
	  	}
	  	this.q1.push('@text{What would you add to both sides to solve for }x@text{ when }'+eqStrP+'?');
	  	this.a1.push(['-'+addTo.toString(),addTo.toString(),equalIt.toString(),(-1*equalIt).toString()]);
	  	this.q2.push('@text{What would you add to both sides to solve for }x@text{ when }'+eqStrN+'?');
	  	this.a2.push([addTo.toString(),'-'+addTo.toString(),equalIt.toString(),(-1*equalIt).toString()]);
	  }
	  
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Solve1Page');
  }

}

function randn(maxParam) {
    var u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    return Math.floor(maxParam*Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v )+.5);
}
