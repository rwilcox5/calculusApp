import { Component,Input } from '@angular/core';

/**
 * Generated class for the DoubleSudokuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'double-sudoku',
  templateUrl: 'double-sudoku.html'
})
export class DoubleSudokuComponent {
	@Input() private sudoku1: number[] = [];
	@Input() private sudoku2: number[] = [];
  sudokuRow: any[] = [[],[],[],[]];
  inputRow: any[] = [[],[]];
  cell: any[] = [];
  colorArray: string[] = ['white','blue','yellow','red','green'];
  textArray: string[] = ['','1','2','3','4'];
  bgArray: string[] = ["white","url('assets/imgs/baseyyyy.png')","url('assets/imgs/baseyyyy.png')","url('assets/imgs/baseyyyy.png')","url('assets/imgs/baseyyyy.png')"];
  currentSelected: any[] = ['',0];
  piecesStatus: any[] = [];
  changeCell: string = '';


  constructor() {
    console.log('Hello DoubleSudokuComponent Component');
    for (var i=0;i<4;i++){
    	this.sudokuRow[i].push(i*4+0);
    	this.sudokuRow[i].push(i*4+1);
    	this.sudokuRow[i].push(i*4+2);
    	this.sudokuRow[i].push(i*4+3);
    	this.inputRow[0].push(i+1);
    	this.inputRow[1].push(i+1);
	}
	for (var i=0;i<16;i++){
		this.cell.push(['1','white','black']);
	}
  }

  ngOnInit(){
  	for (var i=0;i<16;i++){
		this.cell[i][0]=this.textArray[this.sudoku1[i]];
		this.cell[i][1]=this.colorArray[this.sudoku2[i]];
		this.piecesStatus.push(true);
	}
	this.checkPieces();
  }

  checkPieces(){
  	for (var i=0;i<16;i++){
		if (this.sudoku1[i]!=0 && this.sudoku2[i]!=0){
			this.piecesStatus[(this.sudoku1[i]-1)*4+this.sudoku2[i]-1]=false;
		}
	}
	let bgValue = '';
	for (var ii=0;ii<4;ii++){
		bgValue = "url('assets/imgs/base";
		for (var i=0;i<4;i++){
			if (this.piecesStatus[ii*4+i]){
				bgValue += 'y';
			}
			else{
				bgValue += 'n';
			}
		}
		this.bgArray[ii+1]=bgValue+".png')";
	}
  }

  onCell(cellID){
  	if (this.currentSelected[1]!=0){
  		if (this.sudoku1[cellID]!=0 && this.sudoku2[cellID]!=0){
			this.piecesStatus[(this.sudoku1[cellID]-1)*4+this.sudoku2[cellID]-1]=true;
		}
  		if (this.currentSelected[0]=='text'){
  			this.cell[cellID][0]=this.textArray[this.currentSelected[1]];
  			this.sudoku1[cellID]=this.currentSelected[1];
  			this.currentSelected = ['',0];
  		}
  		else if (this.currentSelected[0]=='color'){
  			this.cell[cellID][1]=this.colorArray[this.currentSelected[1]];
  			this.sudoku2[cellID]=this.currentSelected[1];
  			this.currentSelected = ['',0];
  		}
  		this.checkPieces();		
  	}
  	else if (this.changeCell!=''){
  		if (this.changeCell=='text'){
  			if (this.sudoku1[cellID]!=0 && this.sudoku2[cellID]!=0){
				this.piecesStatus[(this.sudoku1[cellID]-1)*4+this.sudoku2[cellID]-1]=true;
			}
  			if (this.sudoku1[cellID]==4){
  				this.sudoku1[cellID]=0;
  			}
  			else{
  				this.sudoku1[cellID]++;
  			}
  			this.cell[cellID][0]=this.textArray[this.sudoku1[cellID]];
  		}
  		else if (this.changeCell=='color'){
  			if (this.sudoku1[cellID]!=0 && this.sudoku2[cellID]!=0){
				this.piecesStatus[(this.sudoku1[cellID]-1)*4+this.sudoku2[cellID]-1]=true;
			}
  			if (this.sudoku2[cellID]==4){
  				this.sudoku2[cellID]=0;
  			}
  			else{
  				this.sudoku2[cellID]++;
  			}
  			this.cell[cellID][1]=this.colorArray[this.sudoku2[cellID]];
  		}
  		this.checkPieces();
  	}
  }

  onText(textID){
  	this.changeCell='';
  	this.currentSelected = ['text',textID];

  }

  onColor(colorID){
  	this.changeCell='';
  	this.currentSelected = ['color',colorID];
  }

  onChg(typeChg){
  	this.changeCell = typeChg;

  }

}
