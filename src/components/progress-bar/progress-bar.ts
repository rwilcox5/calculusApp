import { Component, Input } from '@angular/core';

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {

  

  @Input()
  private bWidth: string = '0px';
  @Input()
  private tWidth: string = '200px';
  @Input()
  private height: string = '15px';


  constructor() {
    console.log('Hello ProgressBarComponent Component');
    
  }


}
