import { Component, Input} from '@angular/core';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SpinKnobComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'spin-knob',
  templateUrl: 'spin-knob.html'
})
export class SpinKnobComponent {
  @Input() private showAngle: boolean = true;
  @Input() private rotateAngle: boolean = true;
  @Input() private showSin: boolean = false;
  @Input() private showCos: boolean = false;
  @Input() private pointsHere: string = '';
  
  angle: number[] = [0,0];
  nRotations: number = 0;
  cAngle: number[] = [4,3];
  nCorrect: number = 0;
  bWidth: string = '';
  allDenoms: number[] = [1,2,3,4,6];
  allNumers: any[] = [[],[0,1],[1,3],[1,2,4,5],[1,3,5,7],[],[1,5,7,11]];
  rotRadians: string = 'rotate(0rad)';
  kWidth: string = "1000";
  kkWidth: string = "2000";
  sideLen: number = 1000;
  angleTex: string = '';
  dragging: boolean = false;
  gridWidth: string = '1000px';
  cAngleTex: string = '';
  fLeft: string = 'center';
  setRotations: boolean = false;
  currentQuadrant: number = 1;
  rotTop: string = '';
  rotHeight: string = '';
  rotWidth: string = '';
  rotLeft: string = '';
  rotTopC: string = '';
  rotLeftC: string = '';

  constructor(private platform: Platform, private storage: Storage) {

    this.angle = [0,1];
    this.angleToTex();
    
    this.sideLen = Math.min(this.platform.width()/1.1,this.platform.height()/1.8);
    this.kWidth = this.sideLen.toString();
    this.kkWidth = (this.sideLen*2).toString();
    if (this.sideLen*1.1>this.platform.width()/1.4){
      this.gridWidth = this.platform.width().toString()+'px';
      this.fLeft = 'left';
    }
    else {
      this.gridWidth = (this.sideLen*1.1).toString()+'px';
      this.fLeft = 'center';
    }
    this.setCAngle([0,0]);

    this.storage.get(this.pointsHere).then((val) => {
        this.nCorrect = val;
        this.bWidth = (this.nCorrect*10).toString()+'px';      
      
      });
    

  }

  ngAfterViewInit(){
    

  }
  
  setCAngle(oldAngle){
  	let x = Math.floor(Math.random()*this.allDenoms.length);
    while (this.allDenoms[x]==oldAngle[1]){
      x = Math.floor(Math.random()*this.allDenoms.length);
    }
    let y = Math.floor(Math.random()*this.allNumers[this.allDenoms[x]].length);
  	this.cAngle = [this.allNumers[this.allDenoms[x]][y],this.allDenoms[x]];
    this.cAngleToTex();
  }

  checkAngle(){
    if (!this.rotateAngle){
    	if ( (this.angle[0]-this.cAngle[0])%(2*this.angle[1])==0 && this.angle[1]==this.cAngle[1]){
    		this.nCorrect++;
    		this.bWidth = (this.nCorrect*10).toString()+'px';
        this.storage.set(this.pointsHere, this.nCorrect);

    		this.setCAngle(this.cAngle);

    	}
    }
    else {
      if (this.angle[0]==this.cAngle[0] && this.angle[1]==this.cAngle[1]){
        this.nCorrect++;
        this.bWidth = (this.nCorrect*10).toString()+'px';
        this.storage.set(this.pointsHere, this.nCorrect);

        this.setCAngle(this.cAngle);

      }
    }
  }

  getAngleRad(x,y){
    if (x<0 && y<0){
      return Math.atan(y/x)+Math.PI;
    }
    else if (x>=0 && y<0){
      return Math.atan(y/x)+2*Math.PI;
    }
    else if (x>=0 && y>=0){
      return Math.atan(y/x);
    }
    else if (x<0 && y>=0){
      return Math.atan(y/x)+Math.PI;
    }
  }

  startKnob(event){
    if (!this.setRotations){
      let picLeft = event.target.getBoundingClientRect().left;
      let picTop = event.target.getBoundingClientRect().top;
      let tx = event.offsetX || event.clientX -Math.floor(picLeft) || event.pageX -Math.floor(picLeft) || event.screenX -Math.floor(picLeft) || event.touches[0].offsetX || event.touches[0].clientX -Math.floor(picLeft) || event.touches[0].pageX -Math.floor(picLeft) || event.touches[0].screenX -Math.floor(picLeft) || 0;
      let ty = event.offsetY || event.clientY -Math.floor(picTop) || event.pageY -Math.floor(picTop) || event.screenY -Math.floor(picTop) || event.touches[0].offsetY || event.touches[0].clientY -Math.floor(picTop) || event.touches[0].pageY -Math.floor(picTop) || event.touches[0].screenY -Math.floor(picTop) || 0;
      let currentAngle = this.getAngleRad(tx-this.sideLen/2,-1*ty+this.sideLen/2);
      if (currentAngle>Math.PI){
        this.nRotations = -1;
      }
      else{
        this.nRotations = 0;
      }
      if (currentAngle<Math.PI/2){
        this.currentQuadrant = 1;
      }
      else if (currentAngle<Math.PI){
        this.currentQuadrant = 2;
      }
      else if (currentAngle<3*Math.PI/2){
        this.currentQuadrant = 3;
      }
      else if (currentAngle<=Math.PI*2){
        this.currentQuadrant = 4;
      }
      this.setRotations = true;
    }
    event.preventDefault();
    this.dragging = true;
  }

  getKnob(event){

    if (this.dragging){


      let picLeft = event.target.getBoundingClientRect().left;
      let picTop = event.target.getBoundingClientRect().top;
      let tx = event.offsetX || event.clientX -Math.floor(picLeft) || event.pageX -Math.floor(picLeft) || event.screenX -Math.floor(picLeft) || event.touches[0].offsetX || event.touches[0].clientX -Math.floor(picLeft) || event.touches[0].pageX -Math.floor(picLeft) || event.touches[0].screenX -Math.floor(picLeft) || 0;
      let ty = event.offsetY || event.clientY -Math.floor(picTop) || event.pageY -Math.floor(picTop) || event.screenY -Math.floor(picTop) || event.touches[0].offsetY || event.touches[0].clientY -Math.floor(picTop) || event.touches[0].pageY -Math.floor(picTop) || event.touches[0].screenY -Math.floor(picTop) || 0;

      let currentAngle = this.getAngleRad(tx-this.sideLen/2,-1*ty+this.sideLen/2);
      let oldQuadrant = this.currentQuadrant+1-1;
      if (currentAngle<Math.PI/2){
        this.currentQuadrant = 1;
      }
      else if (currentAngle<Math.PI){
        this.currentQuadrant = 2;
      }
      else if (currentAngle<3*Math.PI/2){
        this.currentQuadrant = 3;
      }
      else if (currentAngle<=Math.PI*2){
        this.currentQuadrant = 4;
      }
      if (this.currentQuadrant==4 && oldQuadrant == 1){
        this.nRotations--;
      }
      else if (this.currentQuadrant==1 && oldQuadrant == 4){
        this.nRotations++;
      }

      this.rotRadians = 'rotate(-'+currentAngle.toString()+'rad)'; 
      if (this.showSin){
        if (currentAngle<Math.PI){
          this.rotHeight = (this.sideLen/2*Math.sin(currentAngle)).toString(); 
          this.rotTop = (this.sideLen/2-this.sideLen/2*Math.sin(currentAngle)).toString()+'px'; 
          this.rotLeft = (this.sideLen/2+this.sideLen/2*Math.cos(currentAngle)).toString()+'px'; 
        }
        else{
          this.rotHeight = (-1*this.sideLen/2*Math.sin(currentAngle)).toString(); 
          this.rotTop = (this.sideLen/2).toString()+'px'; 
          this.rotLeft = (this.sideLen/2+this.sideLen/2*Math.cos(currentAngle)).toString()+'px'; 
        }
      }
      if (this.showCos){
        if (currentAngle<Math.PI/2 || currentAngle>3*Math.PI/2){
          this.rotWidth = (this.sideLen/2*Math.cos(currentAngle)).toString(); 
          this.rotTopC = (this.sideLen/2-this.sideLen/2*Math.sin(currentAngle)).toString()+'px'; 
          this.rotLeftC = (this.sideLen/2).toString()+'px'; 
        }
        else{
          this.rotWidth = (-1*this.sideLen/2*Math.cos(currentAngle)).toString(); 
          this.rotTopC = (this.sideLen/2-this.sideLen/2*Math.sin(currentAngle)).toString()+'px'; 
          this.rotLeftC = (this.sideLen/2+this.sideLen/2*Math.cos(currentAngle)).toString()+'px'; 
        }
      }

      this.finalAngle(this.getAngleRad(tx-this.sideLen/2,-1*ty+this.sideLen/2)*180/Math.PI);
      this.angleToTex();
    }

  }

  stopKnob(){

    this.dragging = false;
    this.rotRadians = 'rotate(-'+((this.angle[0]*Math.PI/this.angle[1])*180/Math.PI).toString()+'deg)';
    this.angleToTex();
    this.checkAngle();
  }
  
  angleToTex(){
    if (this.angle[1]==1){
      if (this.angle[0]==0){
        this.angleTex = '0';
      }
      else if (this.angle[0]==1){
        this.angleTex = '\\pi';
      }
      else{
        this.angleTex = this.angle[0].toString()+'\\pi';
      }
    }
    else if (this.angle[0]==1){
      this.angleTex = '\\frac{\\pi}{'+this.angle[1].toString()+'}';
    }
    else{
      this.angleTex = '\\frac{'+this.angle[0].toString()+'\\pi}{'+this.angle[1].toString()+'}';
    }
    
  }

  cAngleToTex(){
    if (this.cAngle[1]==1){
      if (this.cAngle[0]==0){
        this.cAngleTex = '0';
      }
      else if (this.cAngle[0]==1){
        this.cAngleTex = '\\pi';
      }
      else{
        this.cAngleTex = this.cAngle[0].toString()+'\\pi';
      }
    }
    else if (this.cAngle[0]==1){
      this.cAngleTex = '\\frac{\\pi}{'+this.cAngle[1].toString()+'}';
    }
    else{
      this.cAngleTex = '\\frac{'+this.cAngle[0].toString()+'\\pi}{'+this.cAngle[1].toString()+'}';
    }
    
  }

  finalAngle(endValue){



      endValue = endValue-Math.floor(endValue/360)*360;
      if (endValue%180<15){
        this.angle = [this.nRotations*2+Math.floor(endValue/180),1];
      	return 0+Math.floor(endValue/180)*180;
      }
      else if (endValue%180<37.5){
        this.angle = [this.nRotations*12+Math.floor(endValue/180)*6+1,6];
      	return 30+Math.floor(endValue/180)*180;
      }
      else if (endValue%180<52.5){
        this.angle = [this.nRotations*8+Math.floor(endValue/180)*4+1,4];
      	return 45+Math.floor(endValue/180)*180;
      }
      else if (endValue%180<75){
        this.angle = [this.nRotations*6+Math.floor(endValue/180)*3+1,3];
      	return 60+Math.floor(endValue/180)*180;
      }
      else if (endValue%180<105){
        this.angle = [this.nRotations*4+Math.floor(endValue/180)*2+1,2];
      	return 90+Math.floor(endValue/180)*180;
      }
      else if (endValue%180<127.5){
        this.angle = [this.nRotations*6+Math.floor(endValue/180)*3+2,3];
      	return 120+Math.floor(endValue/180)*180;
      }
      else if (endValue%180<142.5){
        this.angle = [this.nRotations*8+Math.floor(endValue/180)*4+3,4];
      	return 135+Math.floor(endValue/180)*180;
      }
      else if (endValue%180<165){
        this.angle = [this.nRotations*12+Math.floor(endValue/180)*6+5,6];
      	return 150+Math.floor(endValue/180)*180;
      }
      else if (endValue%180<=180){
        this.angle = [this.nRotations*2+Math.floor(endValue/180)+1,1];
      	return 180+Math.floor(endValue/180)*180;
      }

    	

	}
  otherfn(){
    this.nRotations = Math.floor(this.angle[0]/(this.angle[1]*2))+1;
      this.checkAngle();
  }
}





