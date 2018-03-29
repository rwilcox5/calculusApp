import { Component, ElementRef, ViewChild, Input } from '@angular/core';

/**
 * Generated class for the DrawDerivativesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'draw-derivatives',
  templateUrl: 'draw-derivatives.html'
})
export class DrawDerivativesComponent {
    @ViewChild('canvas') canvasEl: ElementRef;
	@Input() private optType: string = 'box';
	private canvas;
	private ctx;
	private isDrawing: boolean = false;
	private startX: number = 0;
	private startY: number = 0;
	private mouseX: number = 0;
	private mouseY: number = 0;
	private currentBox: number[][] = [];
	private stretch;
	private allPoints: any[] = [];
	private volume: number = 0;
	


  constructor() {
    console.log('Hello OptimizationCanvasComponent Component');
    
  }

  ngAfterViewInit(){
  	
  	this.canvas = this.canvasEl.nativeElement;
  	this.canvas.height = 400;
  	this.canvas.width = 400;
  	this.ctx = this.canvas.getContext('2d');
  	drawAxis(this.ctx,this.canvas);
  }

    handleMouseUp() {
		if (this.isDrawing){
			this.isDrawing = false;
			this.canvas.style.cursor = "crosshair";
		}

	}


	handleMouseMove(event,touchE=true) {
		if (this.isDrawing) {
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
			this.mouseX = tx;
			this.mouseY = ty;
			if (tx>this.allPoints[this.allPoints.length-1][0]){
				this.allPoints.push([tx,ty]);
				drawCurve(this.ctx,this.canvas,this.allPoints);
			}

		}		

	}
	handleMouseOver(e) {
		this.canvas.style.cursor = "crosshair";	
	}
	handleMouseDown(event,touchE=true) {
		event.preventDefault();
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
		this.startX = tx;
		this.startY = ty;

		this.allPoints = [[tx,ty]];
		this.isDrawing = true;

			

	}

}

function drawAxis(ctx,canvas){
	ctx.setLineDash([2, 2]);
	ctx.strokeStyle = 'rgba(0,0,0,.66)';
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.moveTo(0,canvas.height/2);
	ctx.lineTo(canvas.width,canvas.height/2);
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.moveTo(canvas.width/2,0);
	ctx.lineTo(canvas.width/2,canvas.height);
	ctx.stroke();
	ctx.closePath();
}

function drawCurve(ctx,canvas,allPoints){
	
	drawAxis(ctx,canvas);
	ctx.setLineDash([]);
	ctx.strokeStyle = 'rgba(0,0,0,1)';
	let newPoints = [];

	for (var ii=0;ii<10;ii++){
		newPoints = [];
		if (allPoints.length>5+2*ii){
			for (i=0;i<2*(ii+1);i++){
				newPoints.push([allPoints[i][0],allPoints[i][1]]);
			}

		   for (i = 2*(ii+1); i < allPoints.length - 2*(ii+1); i ++)
		   {
		      newPoints.push([allPoints[i][0], expectedValue([allPoints[i-2*(ii+1)],allPoints[i-(ii+1)],allPoints[i],allPoints[i+(ii+1)],allPoints[i+2*(ii+1)]],ii)]);
		   }
		   for (i=0;i<2*(ii+1);i++){
				newPoints.push([allPoints[allPoints.length-1-i][0],allPoints[allPoints.length-1-i][1]]);
			}

		 }
		 allPoints = newPoints.slice(0);
	}

	for (var ii=0;ii<10;ii++){
		newPoints = [];
		if (allPoints.length>5+2*ii){
			for (i=0;i<2*(ii+1);i++){
				newPoints.push([allPoints[i][0],allPoints[i][1]]);
			}

		   for (i = 2*(ii+1); i < allPoints.length - 2*(ii+1); i ++)
		   {
		      newPoints.push([allPoints[i][0], expectedValue([allPoints[i-2*(ii+1)],allPoints[i-(ii+1)],allPoints[i],allPoints[i+(ii+1)],allPoints[i+2*(ii+1)]],ii)]);
		   }
		   for (i=0;i<2*(ii+1);i++){
				newPoints.push([allPoints[allPoints.length-1-i][0],allPoints[allPoints.length-1-i][1]]);
			}

		 }
		 allPoints = newPoints.slice(0);
	}



	 ctx.setLineDash([]);
	ctx.strokeStyle = 'rgba(0,0,0,1)';
	if (newPoints.length>1){
		ctx.beginPath();
		ctx.moveTo(newPoints[0][0],newPoints[0][1]);
		for (var i=1;i<newPoints.length;i++){
			ctx.lineTo(newPoints[i][0],newPoints[i][1]);
		}
		ctx.stroke();
		ctx.closePath();
	}




	ctx.strokeStyle = 'rgba(0,0,255,1)';
	let dPoints = []
	if (allPoints.length>5){
		ctx.beginPath();
		let initD = (allPoints[2][1]-allPoints[4][1])/(allPoints[2][0]-allPoints[4][0])+(allPoints[2][1]-allPoints[3][1])/(allPoints[2][0]-allPoints[3][0])+(allPoints[2][1]-allPoints[1][1])/(allPoints[2][0]-allPoints[1][0])+(allPoints[2][1]-allPoints[0][1])/(allPoints[2][0]-allPoints[0][0]);
		ctx.moveTo(allPoints[2][0],canvas.height/2+50*initD/4);
		dPoints.push([allPoints[2][0],canvas.height/2+50*initD/4]);
		for (var i=3;i<allPoints.length-3;i++){
			initD = (allPoints[i+3][1]-allPoints[i][1])/(allPoints[i+3][0]-allPoints[i][0])/2;
			initD += (allPoints[i-3][1]-allPoints[i][1])/(allPoints[i-3][0]-allPoints[i][0])/2;

			ctx.lineTo(allPoints[i][0],canvas.height/2+50*initD);
			dPoints.push([allPoints[i][0],canvas.height/2+50*initD]);

		}
		ctx.stroke();
		ctx.closePath();
	}


	if (dPoints.length>5){
		ctx.beginPath();
		ctx.moveTo(dPoints[0][0], dPoints[0][1]);

	   for (i = 1; i < dPoints.length; i ++)
	   {
	      ctx.lineTo(dPoints[i][0], dPoints[i][1]);
	   }

	 	//ctx.stroke();
	 	ctx.closePath();
	 }
}

function expectedValue(points5,ii){
	let leftY = (points5[1][1]-points5[0][1])/(points5[1][0]-points5[0][0])*(points5[2][0]-points5[1][0])+points5[1][1];
	let rightY = (points5[3][1]-points5[4][1])/(points5[3][0]-points5[4][0])*(points5[2][0]-points5[3][0])+points5[3][1];
	return (leftY/(Math.pow(ii,1.5)+1)+rightY/(Math.pow(ii,1.5)+1)+points5[2][1])/(1+2/(Math.pow(ii,1.5)+1));
}