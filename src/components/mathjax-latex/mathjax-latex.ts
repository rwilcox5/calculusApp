import { Component, Input, ElementRef, ViewChild } from '@angular/core';

/**
 * Generated class for the MathjaxLatexComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mathjax-latex',
  templateUrl: 'mathjax-latex.html'
})
export class MathjaxLatexComponent {
  @ViewChild('canvas') canvasEl: ElementRef;
  @Input() private equation: string = '';
  @Input() private inline: boolean = false;
  @Input() private canvasSize: number[] = [];
  private mlid: string = '';
  private mjh = MathJax.Hub;
  private isCanvas: boolean = false;

  private ctx;
  private cw;
  private ch;

  constructor() {

    this.mlid = Math.random().toString(36).substring(7);
    this.mjh.Queue(["Typeset",this.mjh]);
    if (this.mlid.length>0){
  		eval('this.mjh.processSectionDelay = 0');
  		if (this.inline){
		    let math = this.mjh.getAllJax(this.mlid+'i')[0];
		    if (math){
		    	this.mjh.Queue(['Text',math,this.equation]);
			}
		}
		else{
		    let math = this.mjh.getAllJax(this.mlid+'d')[0];
		    if (math){
		    	this.mjh.Queue(['Text',math,this.equation]);
			}
		}
	}

	if (this.equation.substring(0,6)=='canvas'){
		this.isCanvas = true;
	}
	else{
		this.isCanvas = false;
	}



  }
  ngAfterViewChecked(){

  	if (this.equation.substring(0,6)=='canvas'){
		
		this.isCanvas = true;
		if (this.canvasEl){

			this.ctx = this.canvasEl.nativeElement.getContext('2d');
			this.canvasEl.nativeElement.width = this.canvasSize[0];
			this.canvasEl.nativeElement.height = this.canvasSize[1];
			drawCurve(this.ctx,this.canvasSize[0],this.canvasSize[1],this.equation.substring(6),this.canvasSize[2],this.canvasSize[3]);
			
		}
	}
	else{
		this.isCanvas = false;
	  	this.mjh.Queue(["Typeset",this.mjh]);
	  	if (this.mlid.length>0){
	  		eval('this.mjh.processSectionDelay = 0');
	  		if (this.inline){
			    let math = this.mjh.getAllJax(this.mlid+'i')[0];
			    if (math){
			    	this.mjh.Queue(['Text',math,this.equation]);
				}
			}
			else{
			    let math = this.mjh.getAllJax(this.mlid+'d')[0];
			    if (math){
			    	this.mjh.Queue(['Text',math,this.equation]);
				}
			}
		}
	}

  }
  ngOnChanges(){
  	if (this.equation.substring(0,6)=='canvas'){
		this.isCanvas = true;
		if (this.canvasEl){
			this.ctx = this.canvasEl.nativeElement.getContext('2d');
			this.canvasEl.nativeElement.width = this.canvasSize[0];
			this.canvasEl.nativeElement.height = this.canvasSize[1];
			drawCurve(this.ctx,this.canvasSize[0],this.canvasSize[1],this.equation.substring(6),this.canvasSize[2],this.canvasSize[3]);
		}
	}
	else{
		this.isCanvas = false;
	  	this.mjh.Queue(["Typeset",this.mjh]);
	  	if (this.mlid.length>0){
	  		eval('this.mjh.processSectionDelay = 0');
	  		if (this.inline){
			    let math = this.mjh.getAllJax(this.mlid+'i')[0];
			    if (math){
			    	this.mjh.Queue(['Text',math,this.equation]);
				}
			}
			else{
			    let math = this.mjh.getAllJax(this.mlid+'d')[0];
			    if (math){
			    	this.mjh.Queue(['Text',math,this.equation]);
				}
			}
		}
	}

  }

}
function myf(x,xfn,adjW,adjH,cw,ch){
	x = (x-cw/2)*adjW;
	let fres = eval(xfn);
	return ch/2-parseFloat(fres)/adjH;
}

function drawCurve(ctx,cw,ch,xfn,adjW,adjH){

	ctx.fillStyle='rgba(255,255,255, 1)';
	ctx.strokeStyle='rgba(0,0,0, .5)';
	ctx.setLineDash([1, 1]);
	ctx.fillRect(0,0,cw,ch);
	ctx.beginPath();
	ctx.moveTo(0,ch/2);
	ctx.lineTo(cw,ch/2);
	ctx.moveTo(cw/2,0);
	ctx.lineTo(cw/2,ch);
	ctx.stroke();
	ctx.closePath();
	ctx.strokeStyle='rgba(0,0,0, 1)';
	ctx.setLineDash([]);
	ctx.beginPath();
	ctx.moveTo(0,myf(0,xfn,adjW,adjH,cw,ch));
	for (var i=0;i<cw;i++){
		ctx.lineTo(i,myf(i,xfn,adjW,adjH,cw,ch));
	}
	ctx.stroke();
	ctx.closePath();

}
