import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Trig0Page } from '../trig0/trig0';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	trig0 = Trig0Page;



  constructor(public navCtrl: NavController) {

  }

}
