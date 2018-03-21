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

  constructor() {
    console.log('Hello MathjaxLatexComponent Component');
    this.mlid = Math.random().toString(36).substring(7);

  }
  ngAfterViewInit(){
  	eval('MathJax.Hub.Queue(["Typeset",MathJax.Hub])');
  }
  ngOnChanges(){

  	if (this.mlid.length>0){
  		eval('MathJax.Hub.processSectionDelay = 0');
	    let math = MathJax.Hub.getAllJax(this.mlid)[0];
	    if (math){
	    	MathJax.Hub.Queue(['Text',math,this.equation]);
		}
	}
  }

}
