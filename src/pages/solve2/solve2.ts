import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Solve2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solve2',
  templateUrl: 'solve2.html',
})
export class Solve2Page {
	q1: string[] = [];
	q2: string[] = [];
	a1: string[][] = [];
	a2: string[][] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	for (var i=0;i<10;i++){
  		let addTo = 0;
  		while (addTo==0){
	  		addTo = randn(5)+2;
	  	}
	  	let equalIt = addTo;
	  	while (equalIt==addTo){
	  		equalIt = randn(6)+3;
	  	}
	  	let eqStrP = '';
	  	let eqStrN = '';

	  	if (Math.random()<.5){
	  		eqStrP = addTo.toString()+'x='+equalIt.toString();
	  		eqStrN = '@frac{x}{'+addTo.toString()+'}='+equalIt.toString();
	  	}
	  	else {
	  		eqStrP = equalIt.toString()+'='+addTo.toString()+'x';
	  		eqStrN = equalIt.toString()+'=@frac{x}{'+addTo.toString()+'}';
	  	}
	  	this.q1.push('@text{What would you multiply both sides by to solve for }x@text{ when }'+eqStrP+'?');
	  	if (equalIt==0){
		  	this.a1.push(['@frac{1}{'+addTo.toString()+'}',addTo.toString(),equalIt.toString(),'1']);
		}
		else{
			this.a1.push(['@frac{1}{'+addTo.toString()+'}',addTo.toString(),equalIt.toString(),'@frac{1}{'+equalIt.toString()+'}']);
		}
	  	this.q2.push('@text{What would you multiply both sides by to solve for }x@text{ when }'+eqStrN+'?');
	  	if (equalIt==0){
	  		this.a2.push([addTo.toString(),'@frac{1}{'+addTo.toString()+'}',equalIt.toString(),'1']);
	  	}
	  	else{
	  		this.a2.push([addTo.toString(),'@frac{1}{'+addTo.toString()+'}',equalIt.toString(),'@frac{1}{'+equalIt.toString()+'}']);
	  	}
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

