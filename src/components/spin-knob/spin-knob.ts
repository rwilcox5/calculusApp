import { Component} from '@angular/core';
import { AngularDraggableModule } from 'angular2-draggable';
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

  angle: number[] = [];
  nRotations: number = 0;
  cAngle: number[] = [4,3];
  nCorrect: number = 0;
  bWidth: string = '';
  allDenoms: number[] = [1,2,3,4,6];
  allNumers: any[] = [[],[0,1],[1,3],[1,2,4,5],[1,3,5,7],[],[1,5,7,11]];
  rotRadians: string = 'rotate(0rad)';
  finRadians: number = 0;
  kWidth: string = "400";

  constructor() {
    console.log('Hello SpinKnobComponent Component');
    this.angle = [0,1];

  }

  ngOnViewInit(){
  	this.setCAngle();

  }
  

  setCAngle(){
  	let x = Math.floor(Math.random()*this.allDenoms.length);
  	let y = Math.floor(Math.random()*this.allNumers[this.allDenoms[x]].length);
  	this.cAngle = [this.allNumers[this.allDenoms[x]][y],this.allDenoms[x]];
  }
  checkAngle(){
  	if (this.angle[0]==this.cAngle[0] && this.angle[1]==this.cAngle[1]){
  		this.nCorrect++;
  		this.bWidth = (this.nCorrect*10).toString()+'px';

  		this.setCAngle();

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
  getKnob(event){
    let picLeft = 0;
    let picTop = 0;
    let tx = event.offsetX || event.clientX -Math.floor(picLeft) || event.pageX -Math.floor(picLeft) || event.screenX -Math.floor(picLeft) || event.touches[0].offsetX || event.touches[0].clientX -Math.floor(picLeft) || event.touches[0].pageX -Math.floor(picLeft) || event.touches[0].screenX -Math.floor(picLeft) || 0;
    let ty = event.offsetY || event.clientY -Math.floor(picTop) || event.pageY -Math.floor(picTop) || event.screenY -Math.floor(picTop) || event.touches[0].offsetY || event.touches[0].clientY -Math.floor(picTop) || event.touches[0].pageY -Math.floor(picTop) || event.touches[0].screenY -Math.floor(picTop) || 0;

    this.rotRadians = 'rotate(-'+this.getAngleRad(tx-200,-1*ty+200).toString()+'rad)';  
    this.finRadians = this.finalAngle(this.getAngleRad(tx-200,-1*ty+200)*180/Math.PI);

  }


  finalAngle(endValue){

      //this function gets called when the mouse/finger is released and it plots where rotation should normally end and we can alter that value and return a new one instead. This gives us an easy way to apply custom snapping behavior with any logic we want. In this case, just make sure the end value snaps to 90-degree increments but only when the "snap" checkbox is selected.
      let angleNum = Math.round(endValue/15)*-1;
      let rotationSnap = 90;

      if (angleNum%12==1 || angleNum%12==5 || angleNum%12==7 || angleNum%12==11 || angleNum%12==-1 || angleNum%12==-5 || angleNum%12==-7 || angleNum%12==-11){
      	if (endValue%30>15 || (endValue<0 && endValue%30>-15)){
      		angleNum -=1;
      	}
      	else{
      		angleNum +=1;
      	}
      }
      if (angleNum%12==2 || angleNum%12==10 || angleNum%12==-2 || angleNum%12==-10){
      	this.angle = [this.nRotations*12+angleNum/2,6];
      }
      else if (angleNum%12==3 || angleNum%12==9 || angleNum%12==-3 || angleNum%12==-9){
      	this.angle = [this.nRotations*8+angleNum/3,4];
      }
      else if (angleNum%12==4 || angleNum%12==8 || angleNum%12==-4 || angleNum%12==-8){
      	this.angle = [this.nRotations*6+angleNum/4,3];
      }
      else if (angleNum%12==6 || angleNum%12==-6){
      	this.angle = [this.nRotations*4+angleNum/6,2];
      }
      else if (angleNum%12==0){
      	this.angle = [this.nRotations*2+angleNum/12,1];
      }
      
      endValue = endValue-Math.floor(endValue/360)*360;
      if (endValue%180<15){
      	return 0+Math.floor(endValue/180)*180;
      }
      else if (endValue%180<37.5){
      	return 30+Math.floor(endValue/180)*180;
      }
      else if (endValue%180<52.5){
      	return 45+Math.floor(endValue/180)*180;
      }
      else if (endValue%180<75){
      	return 60+Math.floor(endValue/180)*180;
      }
      else if (endValue%180<105){
      	return 90+Math.floor(endValue/180)*180;
      }
      else if (endValue%180<127.5){
      	return 120+Math.floor(endValue/180)*180;
      }
      else if (endValue%180<142.5){
      	return 135+Math.floor(endValue/180)*180;
      }
      else if (endValue%180<165){
      	return 150+Math.floor(endValue/180)*180;
      }
      else if (endValue%180<180){
      	return 180+Math.floor(endValue/180)*180;
      }
      else {

      	return Math.round(endValue / rotationSnap) * rotationSnap;
    	}

    	

	}
  otherfn(){
    this.nRotations = Math.floor(this.angle[0]/(this.angle[1]*2))+1;
      this.checkAngle();
  }
}





