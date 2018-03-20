import {Directive, ElementRef, Input} from '@angular/core';
import * as katex from "katex";
/**
 * Generated class for the KatexDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[Katex]' // Attribute selector
})
export class KatexDirective {
  @Input('Katex') KatexInput: string;
 
  constructor(private el: ElementRef) {
  }
 
  ngOnChanges() {
    katex.render(this.KatexInput, this.el.nativeElement, {
      displayMode: true
    });
  }
}
