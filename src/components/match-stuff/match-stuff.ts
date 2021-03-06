import { Component,Input, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Trig0Page } from '../../pages/trig0/trig0';

/**
 * Generated class for the MatchStuffComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'match-stuff',
  templateUrl: 'match-stuff.html'
})
export class MatchStuffComponent {
	@ViewChild('matchCol1') matchCol1: ElementRef;
	@ViewChild('matchCol2') matchCol2: ElementRef;
	@ViewChild('matchCol3') matchCol3: ElementRef;
	@Input() private pointsHere: string = '';
	@Input() private matchArrayArray: any[]= [];
	@Input() private canvasSize: number[] = [];
	catName = Trig0Page;

  private cellBG: string[][] = [['black','black','black'],['black','black','black'],['black','black','black']];
  private cellValue: string[][] = [['black','black','black'],['black','black','black'],['black','black','black']];
  private matched: number[] = [];
  private letters: any[][][] = [[['a',0],['b',1],['c',3]],[['a',0],['b',1],['c',3]],[['a',0],['b',1],['c',3]]];
  private firstClick: number[] = [-1,-1];
  private nCorrect: number = 0;
  private nsize: number = 3;
  private matchArray: any[] = [];
  private bWidth: string;
  private rHeight: string = '100px';
  private cellID: string[][] = [['ml1','ml2','ml3'],['ml4','ml5','ml6'],['ml7','ml8','ml9']];
  private fSize: string = '1.5em';
  constructor(private platform: Platform, public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  	this.rHeight = (this.platform.height()*.26).toString()+'px';

  }

  ngAfterViewInit(){
  	if (this.matchCol1.nativeElement.offsetWidth>this.platform.width()/3 || this.matchCol2.nativeElement.offsetWidth>this.platform.width()/3 || this.matchCol3.nativeElement.offsetWidth>this.platform.width()/3){
  		this.fSize = "1em";
  	}
  	this.matchArray = this.matchArrayArray[0];
  	this.createMatching();
  	this.storage.get(this.pointsHere).then((val) => {
	    this.nCorrect = val;
	    this.bWidth = (this.nCorrect*10).toString()+'px'; 
	  });

  	
  	
  }



  cellClick(rowID,colID){
  		this.cellBG[rowID][colID] = 'yellow';
  		if (this.firstClick[0]>-1){
  			if (this.firstClick[0]!=rowID || this.firstClick[1]!=colID){
				if (this.letters[this.firstClick[0]][this.firstClick[1]][1]==this.letters[rowID][colID][1]){
					this.cellBG[rowID][colID] = 'green';
					this.cellBG[this.firstClick[0]][this.firstClick[1]] = 'green';
					this.matched.push(this.letters[rowID][colID][1]);
					this.firstClick = [-1,-1];
					if (this.matched.length==Math.floor(this.matchArray.length/2)){
						this.nCorrect++;
						this.bWidth = (this.nCorrect*10).toString()+'px'; 
						this.storage.set(this.pointsHere, this.nCorrect);	

						this.createMArray();
						this.createMatching();
					}
				}
				else{
					this.cellBG[rowID][colID] = 'red';
					this.cellBG[this.firstClick[0]][this.firstClick[1]] = 'red';
					this.firstClick = [-1,-1];
				}
			}
		}
		else{
			
			for (var i =0;i<this.nsize;i++){
				for (var ii = 0; ii<this.nsize;ii++){
					if (i != rowID || ii != colID){
						this.cellBG[i][ii] = 'black';
						for (var iii=0;iii<this.matched.length;iii++){
							if (this.letters[i][ii][1]==this.matched[iii]){
								this.cellBG[i][ii] = 'green';
							}
						}
					}
				}

			}
			this.firstClick = [rowID,colID];
			this.cellBG[rowID][colID] = 'yellow';
		}
  }

  	createMArray(){
  		let x = Math.floor(Math.random()*this.matchArrayArray.length);
		this.matchArray = this.matchArrayArray[x];
	}


	

	createMatching(){
		this.firstClick=[-1,-1];
		this.nsize=3;
		this.matched=[];

		let sortThis = this.getRandomArray(this.nsize*this.nsize);
		var i =0; var ii= 0;
		for (i=0;i<this.nsize;i++){
			for (ii=0;ii<this.nsize;ii++){
				this.letters[i][ii] =this.matchArray[sortThis[i*this.nsize+ii]];
			}
		}

		
		for (i=0;i<this.nsize;i++){
			for (ii=0;ii<this.nsize;ii++){
				this.cellValue[i][ii] = this.letters[i][ii][0];
				this.cellBG[i][ii] = 'black';	
			}
		}

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
		if (arrayLen>1){
			if (rand_array[0]==0 && rand_array[1]==1){
				rand_array[0]=1;
				rand_array[1]=0;
			}
		}
		return rand_array;
	}

}
