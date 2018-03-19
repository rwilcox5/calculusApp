import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Trig1Page } from './trig1';
import { MultiChoiceComponent } from '../../components/multi-choice/multi-choice';


@NgModule({
  declarations: [
    Trig1Page,
    MultiChoiceComponent,
  ],
  imports: [
    IonicPageModule.forChild(Trig1Page),
  ],
})
export class Trig1PageModule {}
