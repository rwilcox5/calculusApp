import { Component,Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Trig0Page } from '../../pages/trig0/trig0';

/**
 * Generated class for the MultiChoiceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'multi-choice',
  templateUrl: 'multi-choice.html'
})
export class MultiChoiceComponent {
	catName = Trig0Page;
	question = '';

	private nCorrect: number;
	private randomQ: string;
	private cAnswer: number;
	private answer0: string;
	private answer1: string;

	@Input() private q1: string = '';
	@Input() private q2: string = '';
	@Input() private a1: string = '';
	@Input() private a2: string = '';
	@Input() private pointsHere: string = '';




	bWidth: string;
	

	constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

		
	}

	ngOnInit() {

		this.storage.get(this.pointsHere).then((val) => {
		    this.nCorrect = val;
		    this.bWidth = (this.nCorrect*10).toString()+'px';
			
			this.randomQ = '';
			this.newRandom();		
			
	  	});
		
	}


	newRandom(answer=-1){

		if (this.randomQ !=''){
			if (answer==this.cAnswer){
				this.nCorrect++;
			}
			else {
				this.nCorrect=0;
			}
		}
		if (Math.random()<.25){
			this.randomQ = this.q1;
			this.answer0 = this.a1.split('@').join('\\');
			this.answer1 = this.a2.split('@').join('\\');
			this.cAnswer = 0;
		}
		else if (Math.random()<.333){
			this.randomQ = this.q2;
			this.answer0 = this.a1.split('@').join('\\');
			this.answer1 = this.a2.split('@').join('\\');
			this.cAnswer = 1;
		}
		else if (Math.random()<.5){
			this.randomQ = this.q1;
			this.answer0 = this.a2.split('@').join('\\');
			this.answer1 = this.a1.split('@').join('\\');
			this.cAnswer = 1;
		}
		else {
			this.randomQ = this.q2;
			this.answer0 = this.a2.split('@').join('\\');
			this.answer1 = this.a1.split('@').join('\\');
			this.cAnswer = 0;
		}
		
		this.question = '\\text{What is }'+this.randomQ.split('@').join('\\')+'\\text{?}';
		this.bWidth = (this.nCorrect*10).toString()+'px';
		this.storage.set(this.pointsHere, this.nCorrect);

	}

}
