import { Component, Input } from '@angular/core';

/**
 * Generated class for the MasterMindComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'master-mind',
  templateUrl: 'master-mind.html'
})
export class MasterMindComponent {
	@Input() private categoriesKey: any[] = [];

  keyValues: any[]= [{'color':['blue','white'],'text':''},{'color':['red','white'],'text':''},{'color':['green','black'],'text':''},{'color':['yellow','black'],'text':''},{'color':['aqua','black'],'text':''}];
  q1: any[]= [];
  q2: any[]= [];
  answerValues = {'A':['@sin(0)','0'],'B':['@cos(0)','1']};
  cell = {'A1':['Here','gray','black',''],'A2':['Here','gray','black',''],'A3':['Here','gray','black',''],'B1':['','gray','black'],'B2':['','gray','black'],'B3':['','gray','black'],'C1':['','gray','black'],'C2':['','gray','black'],'C3':['','gray','black'],'D1':['','gray','black'],'D2':['','gray','black'],'D3':['','gray','black'],'E1':['','gray','black'],'E2':['','gray','black'],'E3':['','gray','black']};
  pegA: any[]=['blue','black','white','gray'];
  pegB: any[]=['blue','black','white','gray'];
  pegC: any[]=['blue','black','white','gray'];
  pegD: any[]=['blue','black','white','gray'];
  pegE: any[]=['blue','black','white','gray'];
  E1: any[] = ['E1','E2','E3'];
  D1: any[] = ['D1','D2','D3'];
  C1: any[] = ['C1','C2','C3'];
  B1: any[] = ['B1','B2','B3'];
  A1: any[] = ['A1','A2','A3'];
  currentRow: string = 'A';
  correctCode: string[] = ['0','1','1/2'];
  guessCode: string[] = ['','',''];
  answerID: string = '';



  constructor() {
  	for (var abbrev in this.answerValues){
    	this.q1.push({'id':abbrev,'text':this.answerValues[abbrev][0]});
	}
    
  }

  ngOnInit(){
  	for (var i=0;i<this.categoriesKey.length;i++){
    	this.keyValues[i]['text']=this.categoriesKey[i];
    }
  }

  dropAnswer(answerID,spotID){

  	if (spotID[0]==this.currentRow){
  		this.cell[spotID][0]=this.answerValues[answerID][0];
  		this.answerID = '';
  		this.cell[spotID][3]= answerID;
  		
  		for (var i=0;i<this.keyValues.length;i++){
  			if (this.keyValues[i]['text']==this.answerValues[answerID][1]){
  				this.cell[spotID][1]=this.keyValues[i]['color'][0];
  				this.cell[spotID][2]=this.keyValues[i]['color'][1];
  				this.guessCode[parseInt(spotID[1])-1]=this.keyValues[i]['text'];
  			}
  		}

  	}

  }

  onClick(spotID){
  	if (this.answerID != ''){
  		this.dropAnswer(this.answerID,spotID);
  	}
  	else{
  		if (this.cell[spotID][0]!='Here'){
  			this.answerID = this.cell[spotID][3];
  		}
  	}
  }

  onChoose(answerID){
  	this.answerID = answerID;
  }



}
