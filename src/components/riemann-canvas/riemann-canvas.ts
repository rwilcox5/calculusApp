import { Component, ElementRef, ViewChild, Input } from '@angular/core';

/**
 * Generated class for the RiemannCanvasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'riemann-canvas',
  templateUrl: 'riemann-canvas.html'
})
export class RiemannCanvasComponent {
	@ViewChild('canvas') canvasEl: ElementRef;
	@Input() xfn: string = '';
	@Input() maxRects: number = 1000;
	@Input() maxError: number[] = [-20,20];
	private canvas;
	private isDrawing: boolean = false;
	private startX: number = 0;
	private startY: number = 0;
	private mouseX: number = 0;
	private mouseY: number = 0;
	private rectangles: any[] = [];
	private lastRec: any[]= [];
	private totalArea: number = 0;
	private ctx;
	private predArea: string = '';
	private actArea: number;
	private predError: string = '';
	private nextLevel: string = '';
	private borderCanvas: number = 0;
	private message: string = '';



  constructor() {
  	this.borderCanvas = 10;
    

  }

  ngAfterViewInit(){
  	console.log('Hello RiemannCanvasComponent Component');
  	this.canvas = this.canvasEl.nativeElement;
  	this.canvas.height = 400;
  	this.canvas.width = 400;
  	this.ctx = this.canvas.getContext('2d');
  	this.createCanvas();
   
  }

  createCanvas(){
  	this.rectangles = [];
  	this.totalArea = 0;
  	this.lastRec = [];
	this.actArea = drawCurve(this.ctx,this.canvas.height,this.canvas.width,this.xfn,this.borderCanvas);
  }
	
	handleMouseUp() {
		if (this.isDrawing){
			this.isDrawing = false;
			this.canvas.style.cursor = "crosshair";
			this.rectangles.push(this.lastRec);
			this.totalArea += (Math.abs(this.lastRec[2])+1)*(Math.abs(this.lastRec[3])+1);
			console.log(this.lastRec);
		}

	}


	handleMouseMove(event,touchE=true) {
		if (this.isDrawing) {
			let picLeft = event.target.getBoundingClientRect().left;
      		let picTop = event.target.getBoundingClientRect().top;
      		console.log(picLeft, picTop);
      		let tx = 0;
      		let ty = 0;
      		if (event.touches){
				tx = event.offsetX || event.clientX -Math.floor(picLeft) || event.pageX -Math.floor(picLeft) || event.screenX -Math.floor(picLeft) || event.touches[0].offsetX || event.touches[0].clientX -Math.floor(picLeft) || event.touches[0].pageX -Math.floor(picLeft) || event.touches[0].screenX -Math.floor(picLeft) || 0;
	      		ty = event.offsetY || event.clientY -Math.floor(picTop) || event.pageY -Math.floor(picTop) || event.screenY -Math.floor(picTop) || event.touches[0].offsetY || event.touches[0].clientY -Math.floor(picTop) || event.touches[0].pageY -Math.floor(picTop) || event.touches[0].screenY -Math.floor(picTop) || 0;
      		}
      		else{
      			tx = event.offsetX || event.clientX -Math.floor(picLeft) || event.pageX -Math.floor(picLeft) || event.screenX -Math.floor(picLeft) || 0;
	      		ty = event.offsetY || event.clientY -Math.floor(picTop) || event.pageY -Math.floor(picTop) || event.screenY -Math.floor(picTop) || 0;      		
      		}
			this.mouseX = tx;
			this.mouseY = ty;	
			if (this.mouseX<=this.borderCanvas){
				this.mouseX = this.borderCanvas+1;
			}
			else if (this.mouseX>=this.canvas.width-this.borderCanvas){
				this.mouseX = this.canvas.width-this.borderCanvas;
			}
			if (this.mouseY<=this.borderCanvas){
				this.mouseY = this.borderCanvas+1;
			}
			else if (this.mouseY>=this.canvas.height-this.borderCanvas){
				this.mouseY = this.canvas.height-this.borderCanvas;
			}			
			
			this.actArea = drawCurve(this.ctx,this.canvas.height,this.canvas.width,this.xfn,this.borderCanvas);
			for (var i=0;i<this.rectangles.length;i++){
				this.ctx.beginPath();
				this.ctx.rect(this.rectangles[i][0],this.rectangles[i][1],this.rectangles[i][2],this.rectangles[i][3]);
				this.ctx.stroke();
			}
			this.ctx.beginPath();
			this.ctx.rect(this.startX, this.startY, this.mouseX - this.startX, this.mouseY - this.startY);
			this.ctx.stroke();
			this.lastRec = [this.startX, this.startY, this.mouseX - this.startX, this.mouseY - this.startY];
			
		}
	}
	handleMouseOver(e) {
		this.canvas.style.cursor = "crosshair";	
	}
	handleMouseDown(event,touchE=true) {
		event.preventDefault();
		if (this.rectangles.length<this.maxRects){
			let picLeft = event.target.getBoundingClientRect().left;
      		let picTop = event.target.getBoundingClientRect().top;
			let tx = 0;
      		let ty = 0;
      		if (event.touches){
				tx = event.offsetX || event.clientX -Math.floor(picLeft) || event.pageX -Math.floor(picLeft) || event.screenX -Math.floor(picLeft) || event.touches[0].offsetX || event.touches[0].clientX -Math.floor(picLeft) || event.touches[0].pageX -Math.floor(picLeft) || event.touches[0].screenX -Math.floor(picLeft) || 0;
	      		ty = event.offsetY || event.clientY -Math.floor(picTop) || event.pageY -Math.floor(picTop) || event.screenY -Math.floor(picTop) || event.touches[0].offsetY || event.touches[0].clientY -Math.floor(picTop) || event.touches[0].pageY -Math.floor(picTop) || event.touches[0].screenY -Math.floor(picTop) || 0;
      		}
      		else{
      			tx = event.offsetX || event.clientX -Math.floor(picLeft) || event.pageX -Math.floor(picLeft) || event.screenX -Math.floor(picLeft) || 0;
	      		ty = event.offsetY || event.clientY -Math.floor(picTop) || event.pageY -Math.floor(picTop) || event.screenY -Math.floor(picTop) || 0;      		
      		}
			this.canvas.style.cursor = "crosshair";		
			this.isDrawing = true
			this.startX = tx;
			this.startY = ty;
			if (this.startX<=this.borderCanvas){
				this.startX = this.borderCanvas+1;
			}
			else if (this.startX>=this.canvas.width-this.borderCanvas){
				this.startX = this.canvas.width-this.borderCanvas;
			}
			if (this.startY<=this.borderCanvas){
				this.startY = this.borderCanvas+1;
			}
			else if (this.startY>=this.canvas.height-this.borderCanvas){
				this.startY = this.canvas.height-this.borderCanvas;
			}
		}
		else{
			this.message = 'Max Rectangles';
		}
	}


    guessArea(){
    	this.predError = (Math.abs(parseFloat(this.predArea)-this.actArea)*100.0/(this.actArea)).toFixed(2)+'%';
    	if ((parseFloat(this.predArea)-this.actArea)*100.0/(this.actArea)<this.maxError[1] && (parseFloat(this.predArea)-this.actArea)*100.0/(this.actArea)>this.maxError[0]){
			this.nextLevel = 'next';
		}
		else{
			this.nextLevel = 'wrong';
		}
		console.log(this.actArea, this.predArea, this.predError);
		this.xfn = '6';
		this.createCanvas();

	}
	clearCanvas(){
		this.createCanvas();
	}

	

}

function myf(x,xfn){
	if (xfn=='pic'){
		return 1;
	}
	return eval(xfn);
}

function drawCurve(ctx,cw,ch,xfn,borderCanvas){
	ctx.clearRect(0, 0, cw,ch);

	ctx.fillStyle='rgba(150,150,150, .5)';
	ctx.fillRect(borderCanvas, borderCanvas, cw-2*borderCanvas,ch-2*borderCanvas);

	ctx.fillStyle='rgba(135,206,250, .25)';
	ctx.beginPath();
	ctx.moveTo(borderCanvas,ch-25*myf(0,xfn)-borderCanvas);
	let actArea = 0;

	for (var i=borderCanvas;i<cw-borderCanvas;i++){
		let heightOfFunction = myf((i-borderCanvas)/100,xfn);
		if (heightOfFunction>=0){
			ctx.lineTo(i,ch-25*heightOfFunction-borderCanvas);
			actArea+=25*heightOfFunction;
		}
		else{
			ctx.lineTo(i,ch-borderCanvas);
		}
	}
	console.log(xfn);
	ctx.stroke();
	
	ctx.lineTo(cw-borderCanvas,ch-borderCanvas);
	ctx.lineTo(borderCanvas,ch-borderCanvas);
	ctx.fill();
	ctx.fillStyle='black';
	return actArea;
}



