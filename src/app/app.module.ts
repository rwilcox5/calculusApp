import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { KatexModule } from 'ng-katex';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { Trig1Page } from '../pages/trig1/trig1';
import { Trig2Page } from '../pages/trig2/trig2';
import { Trig3Page } from '../pages/trig3/trig3';
import { Trig4Page } from '../pages/trig4/trig4';
import { Trig5Page } from '../pages/trig5/trig5';
import { Trig6Page } from '../pages/trig6/trig6';
import { Trig7Page } from '../pages/trig7/trig7';
import { Trig8Page } from '../pages/trig8/trig8';
import { Trig9Page } from '../pages/trig9/trig9';
import { Trig10Page } from '../pages/trig10/trig10';
import { Trig11Page } from '../pages/trig11/trig11';
import { Trig12Page } from '../pages/trig12/trig12';


import { Solve1Page } from '../pages/solve1/solve1';
import { Solve2Page } from '../pages/solve2/solve2';
import { Solve3Page } from '../pages/solve3/solve3';
import { Solve4Page } from '../pages/solve4/solve4';
import { Solve5Page } from '../pages/solve5/solve5';

import { Solve6Page } from '../pages/solve6/solve6';
import { Riemann1Page } from '../pages/riemann1/riemann1';
import { Riemann2Page } from '../pages/riemann2/riemann2';
import { Riemann3Page } from '../pages/riemann3/riemann3';
import { Riemann4Page } from '../pages/riemann4/riemann4';
import { Riemann5Page } from '../pages/riemann5/riemann5';
import { Derapp1Page } from '../pages/derapp1/derapp1';
import { Derapp2Page } from '../pages/derapp2/derapp2';
import { Derapp3Page } from '../pages/derapp3/derapp3';
import { Derapp4Page } from '../pages/derapp4/derapp4';
import { Derapp5Page } from '../pages/derapp5/derapp5';
//New Pages

import { Functions0Page } from '../pages/functions0/functions0';
import { Trig0Page } from '../pages/trig0/trig0';
import { Solve0Page } from '../pages/solve0/solve0';
import { Limits0Page } from '../pages/limits0/limits0';
import { Derivatives0Page } from '../pages/derivatives0/derivatives0';
import { Derapp0Page } from '../pages/derapp0/derapp0';
import { Riemann0Page } from '../pages/riemann0/riemann0';
import { Integrals0Page } from '../pages/integrals0/integrals0';
import { Intapp0Page } from '../pages/intapp0/intapp0';

import { MultiChoiceComponent } from '../components/multi-choice/multi-choice';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { OrderStuffComponent } from '../components/order-stuff/order-stuff';
import { MatchStuffComponent } from '../components/match-stuff/match-stuff';
import { SpinKnobComponent } from '../components/spin-knob/spin-knob';
import { MasterMindComponent } from '../components/master-mind/master-mind';
import { DoubleSudokuComponent } from '../components/double-sudoku/double-sudoku';
import { MathjaxLatexComponent } from '../components/mathjax-latex/mathjax-latex';
import { RiemannCanvasComponent } from '../components/riemann-canvas/riemann-canvas';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Functions0Page,
    Trig0Page,
    Solve0Page,
    Limits0Page,
    Derivatives0Page,
    Derapp0Page,
    Riemann0Page,
    Integrals0Page,
    Intapp0Page,

    Trig1Page,
    Trig2Page,
    Trig3Page,
    Trig4Page,
    Trig5Page,
    Trig6Page,
    Trig7Page,
    Trig8Page,
    Trig9Page,
    Trig10Page,
    Trig11Page,
    Trig12Page,

    Solve1Page,
    Solve2Page,
    Solve3Page,
    Solve4Page,
    Solve5Page,

    	Solve6Page,
	Riemann1Page,
	Riemann2Page,
	Riemann3Page,
	Riemann4Page,
	Riemann5Page,
	Derapp1Page,
	Derapp2Page,
	Derapp3Page,
	Derapp4Page,
	Derapp5Page,
//New Names

    MultiChoiceComponent,
    ProgressBarComponent,
    OrderStuffComponent,
    MatchStuffComponent,
    SpinKnobComponent,
    MasterMindComponent,
    DoubleSudokuComponent,
    MathjaxLatexComponent,
    RiemannCanvasComponent,
    ListPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    KatexModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Functions0Page,
    Trig0Page,
    Solve0Page,
    Limits0Page,
    Derivatives0Page,
    Derapp0Page,
    Riemann0Page,
    Integrals0Page,
    Intapp0Page,

    Trig1Page,
    Trig2Page,
    Trig3Page,
    Trig4Page,
    Trig5Page,
    Trig6Page,
    Trig7Page,
    Trig8Page,
    Trig9Page,
    Trig10Page,
    Trig11Page,
    Trig12Page,

    Solve1Page,
    Solve2Page,
    Solve3Page,
    Solve4Page,
    Solve5Page,

    	Solve6Page,
	Riemann1Page,
	Riemann2Page,
	Riemann3Page,
	Riemann4Page,
	Riemann5Page,
	Derapp1Page,
	Derapp2Page,
	Derapp3Page,
	Derapp4Page,
	Derapp5Page,
//New Names
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
