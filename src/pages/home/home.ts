import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Trig0Page } from '../trig0/trig0';
import { Solve0Page } from '../solve0/solve0';
import { Functions0Page } from '../functions0/functions0';
import { Limits0Page } from '../limits0/limits0';
import { Derivatives0Page } from '../derivatives0/derivatives0';
import { Derapp0Page } from '../derapp0/derapp0';
import { Riemann0Page } from '../riemann0/riemann0';
import { Integrals0Page } from '../integrals0/integrals0';
import { Intapp0Page } from '../intapp0/intapp0';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	trig0 = Trig0Page;
	solve0 = Solve0Page;
	functions0 = Functions0Page;
    limits0 = Limits0Page;
    derivatives0 = Derivatives0Page;
    derapp0 = Derapp0Page;
    riemann0 = Riemann0Page;
    integrals0 = Integrals0Page;
    intapp0 = Intapp0Page;



  constructor(public navCtrl: NavController) {

  }

}
