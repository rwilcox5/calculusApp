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
	private question: string = '';

	private nCorrect: number;
	private cAnswer: number;
	private answers: string[] = ['',''];

	@Input() private q1: string[] = [''];
	@Input() private q2: string[] = [''];
	@Input() private a1: string[] = [''];
	@Input() private a2: string[] = [''];
	@Input() private pointsHere: string = '';




	bWidth: string;
	

	constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

		
	}

	ngOnInit() {

		this.storage.get(this.pointsHere).then((val) => {
		    this.nCorrect = val;
		    this.bWidth = (this.nCorrect*10).toString()+'px';
			
			this.question = '';
			this.newRandom();		
			
			
	  	});

		
	}

	ngOnChanges() {

	  }


	newRandom(answer=-1){
		console.log(answer);
		console.log(this.cAnswer);

		if (this.question !=''){
			if (answer==this.cAnswer){
				this.nCorrect++;
			}
			else {
				this.nCorrect=0;
			}
		}
		let x1 = Math.floor(Math.random()*this.q1.length);
		let x2 = Math.floor(Math.random()*this.q2.length);

		let qn = Math.floor(Math.random()*2)+1;
		this.answers = [];
		let answerArray = [];
		
		if (qn==1){
			this.question = this.q1[x1].split('@').join('\\');

			for (var i=0;i<this.a1[x1].length;i++){
				this.answers.push('');
			}
			answerArray = this.getRandomArray(this.a1[x1].length);
			for (var i=0;i<this.a1[x1].length;i++){
				this.answers[answerArray[i]] = this.a1[x1][i].split('@').join('\\');
			}
			
		}
		else{
			this.question = this.q2[x2].split('@').join('\\');

			for (var i=0;i<this.a2[x2].length;i++){
				this.answers.push('');
			}
			answerArray = this.getRandomArray(this.a2[x2].length);
			for (var i=0;i<this.a2[x2].length;i++){
				this.answers[answerArray[i]] = this.a2[x2][i].split('@').join('\\');
			}
		}
		this.cAnswer = answerArray[0];

		
		this.bWidth = (this.nCorrect*10).toString()+'px';
		this.storage.set(this.pointsHere, this.nCorrect);

	}

	getRandomArray(arrayLen){
		var this_array = [];
		var rand_array = [];
		let i=0;
		for (i =0; i<arrayLen;i++){
			this_array.push(i);
		}
		for(i = 0;i<arrayLen;i++){
			var randX = Math.floor(Math.random() * (arrayLen-i));
			rand_array.push(this_array[randX]);
			this_array.splice(randX,1);
			
		}

		return rand_array;
	}

}
