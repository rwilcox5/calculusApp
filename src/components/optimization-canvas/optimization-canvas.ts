import { Component, ElementRef, ViewChild, Input } from '@angular/core';

/**
 * Generated class for the OptimizationCanvasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'optimization-canvas',
  templateUrl: 'optimization-canvas.html'
})
export class OptimizationCanvasComponent {
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
	private startBox1;
	private startBox2;
	private startBox3;
	private startBox4;
	private startBox5;
	private startBox6;
	private volume: number = 0;
	


  constructor() {
    console.log('Hello OptimizationCanvasComponent Component');
    
  }

  ngAfterViewInit(){
  	
  	this.canvas = this.canvasEl.nativeElement;
  	this.canvas.height = 400;
  	this.canvas.width = 400;
  	this.ctx = this.canvas.getContext('2d');
  	if (this.optType=='box'){
  		this.currentBox = [[50,100],[50,50],[25,-25]];
		drawBox(this.ctx,this.canvas,this.currentBox);
	}
	else if (this.optType=='cylinder'){
		this.currentBox = [[25,50]];
		drawCylinder(this.ctx,this.canvas,this.currentBox,200,300);
	}
	else if (this.optType=='cone'){
		this.currentBox = [[25,50]];
		drawCone(this.ctx,this.canvas,this.currentBox,200,300);
	}
	else if (this.optType=='fence'){
		this.currentBox = [[25,50]];
		drawFence(this.ctx,this.canvas,this.currentBox,200,200);
	}
	else if (this.optType=='fold'){
		this.canvas.width = 800;
		this.currentBox = [[150,150],[175,175]];
		drawFold(this.ctx,this.canvas,this.currentBox,200,200,450,350);
	}
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

			if (this.optType=='box'){
				this.moveBox();
			}
			else if (this.optType=='cylinder'){
				this.moveCylinder();
			}
			else if (this.optType=='cone'){
				this.moveCone();
			}
			else if (this.optType=='fence'){
				this.moveFence();
			}
			else if (this.optType=='fold'){
				this.moveFold();
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

		if (this.optType=='box'){
			this.startBox();
		}
		else if (this.optType=='cylinder'){
			this.startCylinder();	
		}
		else if (this.optType=='cone'){
			this.startCone();	
		}
		else if (this.optType=='fence'){
			this.startFence();	
		}
		else if (this.optType=='fold'){
			this.startFold();	
		}

			

	}

	moveBox(){
		if (this.stretch=='front'){  //Changes width of box
			let maxDiff = Math.max(this.startX-this.mouseX,this.mouseY-this.startY);
			this.currentBox[0][0]= this.startBox1-maxDiff;
			this.currentBox[0][1]= this.startBox2+maxDiff;
			this.currentBox[2][0]= this.startBox5+maxDiff;
			this.currentBox[2][1]= this.startBox6-maxDiff;
		}
		if (this.stretch=='side'){ //Changes length of box
			let maxDiff = this.mouseX-this.startX;
			this.currentBox[1][0]= this.startBox3+maxDiff;

			let lwDiff = ltow(maxDiff);
			this.currentBox[0][0]= this.startBox1-lwDiff;
			this.currentBox[0][1]= this.startBox2+lwDiff;
			this.currentBox[2][0]= this.startBox5+lwDiff;
			this.currentBox[2][1]= this.startBox6-lwDiff;

			let lhDiff = ltoh(maxDiff,this.startBox3,this.startBox4);
			this.currentBox[0][1]= this.startBox2+lhDiff;
			this.currentBox[1][1]= this.startBox4-lhDiff;
		}
		if (this.stretch=='top'){ //Changes height of box
			let maxDiff = this.mouseY-this.startY;
			this.currentBox[0][1]= this.startBox2+maxDiff;
			this.currentBox[1][1]= this.startBox4-maxDiff;
		}
				
		drawBox(this.ctx,this.canvas,this.currentBox);	
	}

	moveCylinder(){
		if (this.stretch=='top'){  //Changes width of box
			let maxDiff = this.mouseY-this.startY;
			this.currentBox[0][1]= this.startBox2-maxDiff;
		}
		else if (this.stretch=='right'){ //Changes length of box
			let maxDiff = this.mouseX-this.startX;
			this.currentBox[0][0]= this.startBox1+maxDiff;
		}
		else if (this.stretch=='left'){ //Changes height of box
			let maxDiff = this.startX-this.mouseX;
			this.currentBox[0][0]= this.startBox1+maxDiff;
		}
				
		drawCylinder(this.ctx,this.canvas,this.currentBox,200,300);	
	}

	moveCone(){
		if (this.stretch=='top'){  //Changes width of box
			let maxDiff = this.mouseY-this.startY;
			this.currentBox[0][1]= this.startBox2-maxDiff;
		}
		else if (this.stretch=='right'){ //Changes length of box
			let maxDiff = this.mouseX-this.startX;
			this.currentBox[0][0]= this.startBox1+maxDiff;
		}
		else if (this.stretch=='left'){ //Changes height of box
			let maxDiff = this.startX-this.mouseX;
			this.currentBox[0][0]= this.startBox1+maxDiff;
		}
				
		drawCone(this.ctx,this.canvas,this.currentBox,200,300);	
	}

	moveFence(){
		if (this.stretch=='top'){  //Changes width of box
			let maxDiff = this.mouseY-this.startY;
			this.currentBox[0][1]= this.startBox2-maxDiff;
		}
		else if (this.stretch=='right'){ //Changes length of box
			let maxDiff = this.mouseX-this.startX;
			this.currentBox[0][0]= this.startBox1+maxDiff;
		}
		else if (this.stretch=='left'){ //Changes height of box
			let maxDiff = this.startX-this.mouseX;
			this.currentBox[0][0]= this.startBox1+maxDiff;
		}
		else if (this.stretch=='bottom'){ //Changes height of box
			let maxDiff = this.startY-this.mouseY;
			this.currentBox[0][1]= this.startBox2-maxDiff;
		}
				
		drawFence(this.ctx,this.canvas,this.currentBox,200,200);	
	}

	moveFold(){
		if (this.stretch=='topi'){  //Changes width of box
			let maxDiff = this.mouseY-this.startY;
			this.currentBox[0][1]= this.startBox2-maxDiff;
			this.currentBox[0][0]= this.startBox1-maxDiff;
			//this.currentBox[1][1]= this.startBox4-maxDiff;
		}
		else if (this.stretch=='righti'){ //Changes length of box
			let maxDiff = this.mouseX-this.startX;
			this.currentBox[0][0]= this.startBox1+maxDiff;
			this.currentBox[0][1]= this.startBox2+maxDiff;
			//this.currentBox[1][0]= this.startBox3+maxDiff;
		}
		else if (this.stretch=='lefti'){ //Changes height of box
			let maxDiff = this.startX-this.mouseX;
			this.currentBox[0][0]= this.startBox1+maxDiff;
			this.currentBox[0][1]= this.startBox2+maxDiff;
			//this.currentBox[1][0]= this.startBox3+maxDiff;
		}
		else if (this.stretch=='bottomi'){ //Changes height of box
			let maxDiff = this.startY-this.mouseY;
			this.currentBox[0][1]= this.startBox2-maxDiff;
			this.currentBox[0][0]= this.startBox1-maxDiff;
			//this.currentBox[1][1]= this.startBox4-maxDiff;
		}
		else if (this.stretch=='topo'){  //Changes width of box
			let maxDiff = this.mouseY-this.startY;
			this.currentBox[1][1]= this.startBox4-maxDiff;
			this.currentBox[0][1]= this.startBox2-maxDiff;

		}
		else if (this.stretch=='righto'){ //Changes length of box
			let maxDiff = this.mouseX-this.startX;
			this.currentBox[1][0]= this.startBox3+maxDiff;
			this.currentBox[0][0]= this.startBox1+maxDiff;
		}
		else if (this.stretch=='lefto'){ //Changes height of box
			let maxDiff = this.startX-this.mouseX;
			this.currentBox[1][0]= this.startBox3+maxDiff;
			this.currentBox[0][0]= this.startBox1+maxDiff;
		}
		else if (this.stretch=='bottomo'){ //Changes height of box
			let maxDiff = this.startY-this.mouseY;
			this.currentBox[1][1]= this.startBox4-maxDiff;
			this.currentBox[0][1]= this.startBox2-maxDiff;
		}
		this.volume = this.currentBox[0][0]*this.currentBox[0][1]*(this.currentBox[1][1]-this.currentBox[0][1])/2;
		drawFold(this.ctx,this.canvas,this.currentBox,200,200,450,350);	
	}

	startBox(){
		if (isFront([this.startX,this.startY],this.currentBox)){
			this.stretch = 'front';
			this.isDrawing = true;
			this.startBox1 = this.currentBox[0][0];
			this.startBox2 = this.currentBox[0][1];
			this.startBox3 = this.currentBox[1][0];
			this.startBox4 = this.currentBox[1][1];
			this.startBox5 = this.currentBox[2][0];
			this.startBox6 = this.currentBox[2][1];
		}
		if (isSide([this.startX,this.startY],this.currentBox)){
			this.stretch = 'side';
			this.isDrawing = true;
			this.startBox1 = this.currentBox[0][0];
			this.startBox2 = this.currentBox[0][1];
			this.startBox3 = this.currentBox[1][0];
			this.startBox4 = this.currentBox[1][1];
			this.startBox5 = this.currentBox[2][0];
			this.startBox6 = this.currentBox[2][1];
		}
		if (isTop([this.startX,this.startY],this.currentBox)){
			this.stretch = 'top';
			this.isDrawing = true;
			this.startBox1 = this.currentBox[0][0];
			this.startBox2 = this.currentBox[0][1];
			this.startBox3 = this.currentBox[1][0];
			this.startBox4 = this.currentBox[1][1];
			this.startBox5 = this.currentBox[2][0];
			this.startBox6 = this.currentBox[2][1];
		}
		
	}

	startCylinder(){
		if (isTopCylinder([this.startX,this.startY],200,300,this.currentBox[0][0],this.currentBox[0][1])){
			this.stretch = 'top';
			this.isDrawing = true;
			this.startBox1 = this.currentBox[0][0];
			this.startBox2 = this.currentBox[0][1];
		}
		else if (isRightCylinder([this.startX,this.startY],200,300,this.currentBox[0][0],this.currentBox[0][1])){
			this.stretch = 'right';
			this.isDrawing = true;
			this.startBox1 = this.currentBox[0][0];
			this.startBox2 = this.currentBox[0][1];
		}
		else if (isLeftCylinder([this.startX,this.startY],200,300,this.currentBox[0][0],this.currentBox[0][1])){
			this.stretch = 'left';
			this.isDrawing = true;
			this.startBox1 = this.currentBox[0][0];
			this.startBox2 = this.currentBox[0][1];
		}
		else{
			console.log('out');
		}
	}
	startCone(){
		if (isRightCone([this.startX,this.startY],200,300,this.currentBox[0][0],this.currentBox[0][1])){
			this.stretch = 'right';
			this.isDrawing = true;
			this.startBox1 = this.currentBox[0][0];
			this.startBox2 = this.currentBox[0][1];
		}
		else if (isLeftCone([this.startX,this.startY],200,300,this.currentBox[0][0],this.currentBox[0][1])){
			this.stretch = 'left';
			this.isDrawing = true;
			this.startBox1 = this.currentBox[0][0];
			this.startBox2 = this.currentBox[0][1];
		}
		else if (isTopCone([this.startX,this.startY],200,300,this.currentBox[0][0],this.currentBox[0][1])){
			this.stretch = 'top';
			this.isDrawing = true;
			this.startBox1 = this.currentBox[0][0];
			this.startBox2 = this.currentBox[0][1];
		}
		else{
			console.log('out');
		}
	}
	startFence(){
		let pof = partOfFence([this.startX,this.startY],200,200,this.currentBox[0][0],this.currentBox[0][1]);
		if (pof[0]){
			this.stretch = pof[1];
			this.isDrawing = true;
			this.startBox1 = this.currentBox[0][0];
			this.startBox2 = this.currentBox[0][1];
		}
		else{
			console.log('out');
		}
	}
	startFold(){
		let pof = partOfFold([this.startX,this.startY],200,200,this.currentBox[0][0],this.currentBox[0][1],this.currentBox[1][0],this.currentBox[1][1]);
		if (pof[0]){
			this.stretch = pof[1];
			console.log(this.stretch);
			this.isDrawing = true;
			this.startBox1 = this.currentBox[0][0];
			this.startBox2 = this.currentBox[0][1];
			this.startBox3 = this.currentBox[1][0];
			this.startBox4 = this.currentBox[1][1];
		}
		else{
			console.log('out');
		}
	}

}

function ltow(length){
	let lwConstraint = .7;
	return length*lwConstraint/Math.pow(2,.5);
}
function ltoh(length,startBox3,startBox4){
	let volume = 87500;
	let oldLength = startBox3;
	let trueHeight = volume/(oldLength+length)/ltow(oldLength+length)/Math.pow(2,.5);
	let oldHeight = startBox4;
	let diffHeight = trueHeight-oldHeight;
	return -1*diffHeight;
}

function isFront(xy,currentBox){
	if (xy[0]>currentBox[0][0] && xy[0]<currentBox[0][0]+currentBox[1][0] && xy[1]>currentBox[0][1] && xy[1]<currentBox[0][1]+currentBox[1][1]){
		return true;
	}
	else{
		return false;
	}
}

function isSide(xy,currentBox){
	if (xy[0]>currentBox[0][0]+currentBox[1][0] && xy[0]<currentBox[0][0]+currentBox[1][0]+currentBox[2][0] && xy[1]<currentBox[2][1]/currentBox[2][0]*(xy[0]-currentBox[0][0]-currentBox[1][0])+currentBox[0][1]+currentBox[1][1] && xy[1]>currentBox[2][1]/currentBox[2][0]*(xy[0]-currentBox[0][0]-currentBox[1][0])+currentBox[0][1]){
		return true;
	}
	else{
		return false;
	}
}

function isTop(xy,currentBox){
	if (xy[1]<currentBox[0][1] && xy[1]>currentBox[0][1]+currentBox[2][1] && xy[1]>currentBox[2][1]/currentBox[2][0]*(xy[0]-currentBox[0][0])+currentBox[0][1] && xy[1]<currentBox[2][1]/currentBox[2][0]*(xy[0]-currentBox[0][0]-currentBox[1][0])+currentBox[0][1]){
		return true;
	}
	else{
		return false;
	}
}

function isTopCylinder(xy,cxtop,cybot,r,h){
	let cytop = cybot-h;
	if (Math.pow(xy[0]-cxtop,2)/Math.pow(r,2)+Math.pow(xy[1]-cytop,2)/Math.pow(r/2,2)<1){
		return true;
	}
	else{
		return false;
	}
}
function isRightCylinder(xy,cxtop,cybot,r,h){
	let cytop = cybot-h;
	if (xy[0]>cxtop && xy[1]>cytop && xy[0]<cxtop+r && xy[1]<cybot){
		return true;
	}
	else if (isTopCylinder(xy,cxtop,cybot,r,0) && xy[0]>cxtop){
		return true;
	}
	else{
		return false;
	}
}
function isLeftCylinder(xy,cxtop,cybot,r,h){
	let cytop = cybot-h;
	if (xy[0]<cxtop && xy[1]>cytop && xy[0]>cxtop-r && xy[1]<cybot){
		return true;
	}
	else if (isTopCylinder(xy,cxtop,cybot,r,0) && xy[0]<cxtop){
		return true;
	}
	else{
		return false;
	}
}

function isTopCone(xy,cxbot,cybot,r,h){
	if (xy[1]<cybot){
		return true;
	}
	else{
		return false;
	}
}
function isRightCone(xy,cxbot,cybot,r,h){
	if (Math.pow(xy[0]-cxbot,2)/Math.pow(r,2)+Math.pow(xy[1]-cybot,2)/Math.pow(r/2,2)<1 && xy[0]>cxbot){
		return true;
	}
	else{
		return false;
	}
}
function isLeftCone(xy,cxbot,cybot,r,h){
	if (Math.pow(xy[0]-cxbot,2)/Math.pow(r,2)+Math.pow(xy[1]-cybot,2)/Math.pow(r/2,2)<1 && xy[0]<cxbot){
		return true;
	}
	else{
		return false;
	}
}

function partOfFence(xy,cxbot,cybot,l,w){

	if (xy[1]<cybot+w/2+20 && xy[1]>cybot-w/2-20 && xy[0]<cxbot+l/2+20 && xy[0]>cxbot-l/2-20){
		let dToTop = Math.abs(xy[1]-(cybot-w/2));
		let dToBot = Math.abs(cybot+w/2-xy[1]);
		let dToLeft = Math.abs(xy[0]-(cxbot-l/2));
		let dToRight = Math.abs(cxbot+l/2-xy[0]);

		if (dToTop<dToBot && dToTop<dToLeft && dToTop<dToRight){
			return [true,'top'];
		}
		else if (dToBot<dToTop && dToBot<dToLeft && dToBot<dToRight){
			return [true,'bottom'];
		}
		else if (dToLeft<dToTop && dToLeft<dToBot && dToLeft<dToRight){
			return [true,'left'];
		}
		else{
			return [true,'right'];
		}
	}
	else{
		return [false];
	}
}

function partOfFold(xy,cxbot,cybot,il,iw,ol,ow){

	if (xy[1]<cybot+ow/2+30 && xy[1]>cybot-ow/2-30 && xy[0]<cxbot+ol/2+30 && xy[0]>cxbot-ol/2-30){
		if (xy[1]<cybot+iw/2 && xy[1]>cybot-iw/2 && xy[0]<cxbot+il/2 && xy[0]>cxbot-il/2){
			let dToTop = Math.abs(xy[1]-(cybot-iw/2));
			let dToBot = Math.abs(cybot+iw/2-xy[1]);
			let dToLeft = Math.abs(xy[0]-(cxbot-il/2));
			let dToRight = Math.abs(cxbot+il/2-xy[0]);

			if (dToTop<dToBot && dToTop<dToLeft && dToTop<dToRight){
				return [true,'topi'];
			}
			else if (dToBot<dToTop && dToBot<dToLeft && dToBot<dToRight){
				return [true,'bottomi'];
			}
			else if (dToLeft<dToTop && dToLeft<dToBot && dToLeft<dToRight){
				return [true,'lefti'];
			}
			else{
				return [true,'righti'];
			}
		}
		else{
			let dToTop = Math.abs(xy[1]-(cybot-ow/2));
			let dToBot = Math.abs(cybot+ow/2-xy[1]);
			let dToLeft = Math.abs(xy[0]-(cxbot-ol/2));
			let dToRight = Math.abs(cxbot+ol/2-xy[0]);

			if (dToTop<dToBot && dToTop<dToLeft && dToTop<dToRight){
				return [true,'topo'];
			}
			else if (dToBot<dToTop && dToBot<dToLeft && dToBot<dToRight){
				return [true,'bottomo'];
			}
			else if (dToLeft<dToTop && dToLeft<dToBot && dToLeft<dToRight){
				return [true,'lefto'];
			}
			else{
				return [true,'righto'];
			}
		}
	}
	else{
		return [false];
	}
}

function drawBox(ctx,canvas,pointsRaw){

	ctx.setLineDash([1, 0]);
	ctx.strokeStyle = 'rgba(0,0,0,1)';
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	let points5 = [pointsRaw[0],[pointsRaw[0][0]+pointsRaw[1][0],pointsRaw[0][1]],[pointsRaw[0][0]+pointsRaw[1][0],pointsRaw[0][1]+pointsRaw[1][1]],[pointsRaw[0][0],pointsRaw[0][1]+pointsRaw[1][1]],pointsRaw[2]];
	let boxDimensions = [Math.round(points5[2][0]-points5[3][0]),Math.round(Math.pow(pointsRaw[2][0]*pointsRaw[2][0]+pointsRaw[2][1]*pointsRaw[2][1],.5)),Math.round(points5[2][1]-points5[1][1])];



	ctx.beginPath();
	ctx.moveTo(points5[0][0],points5[0][1]);
	ctx.lineTo(points5[1][0],points5[1][1]);
	ctx.lineTo(points5[2][0],points5[2][1]);
	ctx.lineTo(points5[3][0],points5[3][1]);
	ctx.lineTo(points5[0][0],points5[0][1]);
	ctx.stroke();
	ctx.font="italic 12pt Calibri";
	ctx.fillText("l="+(points5[2][0]-points5[3][0]).toFixed(0),(points5[2][0]+points5[3][0])/2-5,points5[2][1]+16);

	ctx.beginPath();
	ctx.moveTo(points5[0][0],points5[0][1]);
	ctx.lineTo(points5[0][0]+points5[4][0],points5[0][1]+points5[4][1]);
	ctx.lineTo(points5[1][0]+points5[4][0],points5[1][1]+points5[4][1]);
	ctx.moveTo(points5[1][0],points5[1][1]);
	ctx.lineTo(points5[1][0]+points5[4][0],points5[1][1]+points5[4][1]);
	ctx.lineTo(points5[2][0]+points5[4][0],points5[2][1]+points5[4][1]);
	ctx.lineTo(points5[2][0],points5[2][1]);
	ctx.stroke();
	ctx.fillText("w="+Math.pow(pointsRaw[2][0]*pointsRaw[2][0]+pointsRaw[2][1]*pointsRaw[2][1],.5).toFixed(0),(points5[1][0]+points5[1][0]+points5[4][0])/2-5,(points5[2][1]+points5[2][1]+pointsRaw[2][1])/2+16);

	ctx.beginPath();
	ctx.moveTo(points5[0][0]+points5[4][0],points5[0][1]+points5[4][1]);
	ctx.lineTo(points5[3][0]+points5[4][0],points5[3][1]+points5[4][1]);
	ctx.lineTo(points5[2][0]+points5[4][0],points5[2][1]+points5[4][1]);
	ctx.moveTo(points5[3][0]+points5[4][0],points5[3][1]+points5[4][1]);
	ctx.lineTo(points5[3][0],points5[3][1]);
	ctx.setLineDash([4, 2]);
	ctx.strokeStyle = 'rgba(0,0,0,.25)';
	ctx.stroke();
	ctx.fillText("h="+(points5[2][1]-points5[1][1]).toFixed(0),points5[1][0]+points5[4][0]+5,(points5[1][1]+pointsRaw[2][1]+points5[2][1]+pointsRaw[2][1])/2);

	ctx.fillText("v="+(boxDimensions[0]*boxDimensions[1]*boxDimensions[2]).toString(),0,16);
	ctx.fillText("c="+(boxDimensions[0]*boxDimensions[1]*boxDimensions[2]).toString(),0,32);

}

function drawCylinder(ctx,canvas,pointsRaw,cbx,cby){

	

	ctx.setLineDash([1, 0]);
	ctx.strokeStyle = 'rgba(0,0,0,1)';
	ctx.clearRect(0, 0, canvas.width, canvas.height);



	let r = pointsRaw[0][0];
	let h = pointsRaw[0][1];


	ctx.beginPath();
	ctx.ellipse(cbx,cby,r,r/2,0,0,Math.PI);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(cbx+r,cby);
	ctx.lineTo(cbx+r,cby-h);
	ctx.ellipse(cbx,cby-h,r,r/2,0,0,2*Math.PI);
	ctx.moveTo(cbx-r,cby-h);
	ctx.lineTo(cbx-r,cby);
	ctx.stroke();
	ctx.closePath();

	ctx.setLineDash([4, 2]);
	ctx.strokeStyle = 'rgba(0,0,0,.25)';
	ctx.beginPath();
	ctx.ellipse(cbx,cby,r,r/2,0,Math.PI,2*Math.PI);
	ctx.stroke();
	ctx.closePath();

	ctx.font="italic 12pt Calibri";
	ctx.fillText("",0,0);

}

function drawCone(ctx,canvas,pointsRaw,cbx,cby){
	ctx.setLineDash([1, 0]);
	ctx.strokeStyle = 'rgba(0,0,0,1)';
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	let r = pointsRaw[0][0];
	let h = pointsRaw[0][1];

	ctx.beginPath();
	ctx.ellipse(cbx,cby,r,r/2,0,0,Math.PI);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(cbx+r,cby);
	ctx.lineTo(cbx,cby-h);
	ctx.lineTo(cbx-r,cby);
	ctx.stroke();
	ctx.closePath();

	ctx.setLineDash([4, 2]);
	ctx.strokeStyle = 'rgba(0,0,0,.25)';
	ctx.beginPath();
	ctx.ellipse(cbx,cby,r,r/2,0,Math.PI,2*Math.PI);
	ctx.stroke();
	ctx.closePath();

	ctx.font="italic 12pt Calibri";
	ctx.fillText("",0,0);

}

function drawFence(ctx,canvas,pointsRaw,cbx,cby){

	ctx.setLineDash([1, 0]);
	ctx.strokeStyle = 'rgba(0,0,0,1)';
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	let l = pointsRaw[0][0];
	let w = pointsRaw[0][1];


	ctx.beginPath();
	ctx.moveTo(cbx+l/2,cby+w/2);
	ctx.lineTo(cbx+l/2,cby-w/2);
	ctx.lineTo(cbx-l/2,cby-w/2);
	ctx.lineTo(cbx-l/2,cby+w/2);
	ctx.lineTo(cbx+l/2,cby+w/2);
	ctx.stroke();
	ctx.closePath();



	ctx.font="italic 12pt Calibri";
	ctx.fillText("",0,0);

}

function drawFold(ctx,canvas,pointsRaw,cbx,cby,cbxx,cbyy){

	ctx.setLineDash([1, 0]);
	ctx.strokeStyle = 'rgba(0,0,0,1)';
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	let il = pointsRaw[0][0];
	let iw = pointsRaw[0][1];
	let ol = pointsRaw[1][0];
	let ow = pointsRaw[1][1];


	ctx.beginPath();
	ctx.moveTo(cbx+il/2,cby+iw/2);
	ctx.lineTo(cbx+il/2,cby-iw/2);
	ctx.lineTo(cbx-il/2,cby-iw/2);
	ctx.lineTo(cbx-il/2,cby+iw/2);
	ctx.lineTo(cbx+il/2,cby+iw/2);
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.moveTo(cbx+ol/2,cby+ow/2);
	ctx.lineTo(cbx+ol/2,cby-ow/2);
	ctx.lineTo(cbx-ol/2,cby-ow/2);
	ctx.lineTo(cbx-ol/2,cby+ow/2);
	ctx.lineTo(cbx+ol/2,cby+ow/2);
	ctx.stroke();
	ctx.closePath();

	ctx.setLineDash([2, 2]);
	ctx.strokeStyle = 'rgba(0,0,0,.6)';
	ctx.fillStyle = 'rgba(0,0,0,1)';

	ctx.beginPath();
	ctx.moveTo(cbx-il/2,cby+iw/2);
	ctx.lineTo(cbx-il/2,cby+ow/2);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(cbx-il/2,cby+iw/2);
	ctx.lineTo(cbx-ol/2,cby+iw/2);
	ctx.stroke();
	ctx.closePath();

	ctx.font="italic 12pt Calibri";
	ctx.fillText(ol.toString(),cbx-12,cby+ow/2+13);
	ctx.fillText(ow.toString(),cbx+ol/2+2,cby+6);
	ctx.fillText(il.toString(),cbx-12,cby-iw/2+13);
	ctx.fillText(iw.toString(),cbx-il/2+2,cby+6);
	ctx.fillText((ow/2-iw/2).toString(),cbx-il/2+2,cby+(iw/2+ow/2)/2+6);

	ctx.setLineDash([1, 0]);
	ctx.strokeStyle = 'rgba(0,0,0,1)';
	pointsRaw = [[cbxx,cbyy-(ow-iw)/2],[il,ow/2-iw/2],[iw/Math.sqrt(2),-1*iw/Math.sqrt(2)]];

	let points5 = [pointsRaw[0],[pointsRaw[0][0]+pointsRaw[1][0],pointsRaw[0][1]],[pointsRaw[0][0]+pointsRaw[1][0],pointsRaw[0][1]+pointsRaw[1][1]],[pointsRaw[0][0],pointsRaw[0][1]+pointsRaw[1][1]],pointsRaw[2]];


	ctx.fillText("w="+Math.pow(pointsRaw[2][0]*pointsRaw[2][0]+pointsRaw[2][1]*pointsRaw[2][1],.5).toFixed(0),(points5[1][0]+points5[1][0]+points5[4][0])/2-5,(points5[2][1]+points5[2][1]+pointsRaw[2][1])/2+16);
	ctx.fillText("h="+(points5[2][1]-points5[1][1]).toFixed(0),points5[1][0]+points5[4][0]+5,(points5[1][1]+pointsRaw[2][1]+points5[2][1]+pointsRaw[2][1])/2);
	ctx.fillText("l="+(points5[2][0]-points5[3][0]-25).toFixed(0),(points5[2][0]+points5[3][0])/2-5,points5[2][1]+16);


	let backtopleft = [points5[0][0]+points5[4][0],points5[0][1]+points5[4][1]];
	let backtopright = [points5[1][0]+points5[4][0],points5[1][1]+points5[4][1]];
	let backbottomright = [points5[2][0]+points5[4][0],points5[2][1]+points5[4][1]];
	let backbottomleft = [points5[3][0]+points5[4][0],points5[3][1]+points5[4][1]];
	
	let fronttopleft = [points5[0][0],points5[0][1]];
	let fronttopright = [points5[1][0],points5[1][1]];
	let frontbottomright = [points5[2][0],points5[2][1]];
	let frontbottomleft = [points5[3][0],points5[3][1]];


	ctx.beginPath();
	ctx.moveTo(backtopleft[0],backtopleft[1]);
	ctx.lineTo(backbottomleft[0],backbottomleft[1]);
	ctx.lineTo(frontbottomleft[0],frontbottomleft[1]);
	ctx.lineTo(fronttopleft[0],fronttopleft[1]);
	ctx.lineTo(backtopleft[0],backtopleft[1]);
	ctx.fillStyle = 'rgba(100,100,100,1)';
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(backtopleft[0],backtopleft[1]);
	ctx.lineTo(backbottomleft[0],backbottomleft[1]);
	ctx.lineTo(backbottomright[0],backbottomright[1]);
	ctx.lineTo(backtopright[0],backtopright[1]);
	ctx.lineTo(backtopleft[0],backtopleft[1]);
	ctx.fillStyle = 'rgba(255,255,255,1)';
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(backbottomleft[0],backbottomleft[1]);
	ctx.lineTo(backbottomright[0],backbottomright[1]);
	ctx.lineTo(frontbottomright[0],frontbottomright[1]);
	ctx.lineTo(frontbottomleft[0],frontbottomleft[1]);
	ctx.lineTo(backbottomleft[0],backbottomleft[1]);
	ctx.fillStyle = 'rgba(255,255,255,1)';
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(fronttopleft[0],fronttopleft[1]);
	ctx.lineTo(frontbottomleft[0],frontbottomleft[1]);
	ctx.lineTo(frontbottomright[0],frontbottomright[1]);
	ctx.lineTo(fronttopright[0],fronttopright[1]);
	ctx.lineTo(fronttopleft[0],fronttopleft[1]);
	ctx.fillStyle = 'rgba(255,255,255,1)';
	ctx.fill();
	ctx.stroke();
	ctx.closePath();




	ctx.beginPath();
	ctx.moveTo(points5[1][0],points5[1][1]);
	ctx.lineTo(points5[1][0]+points5[4][0],points5[1][1]+points5[4][1]);
	ctx.lineTo(points5[2][0]+points5[4][0],points5[2][1]+points5[4][1]);
	ctx.lineTo(points5[2][0],points5[2][1]);
	ctx.lineTo(points5[1][0],points5[1][1]);
	ctx.fillStyle = 'rgba(150,150,150,1)';
	ctx.fill();
	ctx.stroke();
	ctx.closePath();






}
