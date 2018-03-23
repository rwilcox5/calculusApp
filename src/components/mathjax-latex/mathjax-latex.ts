import { Component, Input } from '@angular/core';

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

  @Input() private equation: string = '';
  @Input() private inline: boolean = false;
  private mlid: string = '';
  private mjh = MathJax.Hub;

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

  }
  ngAfterViewChecked(){

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
  ngOnChanges(){

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
