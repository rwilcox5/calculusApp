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
import { Functions1Page } from '../pages/functions1/functions1';
import { Functions2Page } from '../pages/functions2/functions2';
import { Functions3Page } from '../pages/functions3/functions3';
import { Functions4Page } from '../pages/functions4/functions4';
import { Functions5Page } from '../pages/functions5/functions5';
import { Derappopt1Page } from '../pages/derappopt1/derappopt1';
import { Derappopt0Page } from '../pages/derappopt0/derappopt0';
import { Derappnewton0Page } from '../pages/derappnewton0/derappnewton0';
import { Derapprelated0Page } from '../pages/derapprelated0/derapprelated0';
import { Derappvelocity0Page } from '../pages/derappvelocity0/derappvelocity0';
import { Derappbiology0Page } from '../pages/derappbiology0/derappbiology0';
import { Derappeconomics0Page } from '../pages/derappeconomics0/derappeconomics0';
import { Derappsecond0Page } from '../pages/derappsecond0/derappsecond0';
import { Derappfirst0Page } from '../pages/derappfirst0/derappfirst0';
import { Derappopt2Page } from '../pages/derappopt2/derappopt2';
import { Derappopt3Page } from '../pages/derappopt3/derappopt3';
import { Derappopt4Page } from '../pages/derappopt4/derappopt4';
import { Derappopt5Page } from '../pages/derappopt5/derappopt5';
import { Derappopt6Page } from '../pages/derappopt6/derappopt6';
import { Derappopt7Page } from '../pages/derappopt7/derappopt7';
import { Derappfirst1Page } from '../pages/derappfirst1/derappfirst1';
import { Derappfirst2Page } from '../pages/derappfirst2/derappfirst2';
import { Derappfirst3Page } from '../pages/derappfirst3/derappfirst3';
import { Derappfirst4Page } from '../pages/derappfirst4/derappfirst4';
import { Derappfirst5Page } from '../pages/derappfirst5/derappfirst5';
import { Derappbiology1Page } from '../pages/derappbiology1/derappbiology1';
import { Derappbiology2Page } from '../pages/derappbiology2/derappbiology2';
import { Derappbiology3Page } from '../pages/derappbiology3/derappbiology3';
import { Derappbiology4Page } from '../pages/derappbiology4/derappbiology4';
import { Derappbiology5Page } from '../pages/derappbiology5/derappbiology5';
import { Derappbiology6Page } from '../pages/derappbiology6/derappbiology6';
import { Derappnewton1Page } from '../pages/derappnewton1/derappnewton1';
import { Derappnewton2Page } from '../pages/derappnewton2/derappnewton2';
import { Derappnewton3Page } from '../pages/derappnewton3/derappnewton3';
import { Derappnewton4Page } from '../pages/derappnewton4/derappnewton4';
import { Derappnewton5Page } from '../pages/derappnewton5/derappnewton5';
import { Derappnewton6Page } from '../pages/derappnewton6/derappnewton6';
import { Derappeconomics1Page } from '../pages/derappeconomics1/derappeconomics1';
import { Derappeconomics2Page } from '../pages/derappeconomics2/derappeconomics2';
import { Derappeconomics3Page } from '../pages/derappeconomics3/derappeconomics3';
import { Derappeconomics4Page } from '../pages/derappeconomics4/derappeconomics4';
import { Derappeconomics5Page } from '../pages/derappeconomics5/derappeconomics5';
import { Derappeconomics6Page } from '../pages/derappeconomics6/derappeconomics6';
import { Derappsecond1Page } from '../pages/derappsecond1/derappsecond1';
import { Derappsecond2Page } from '../pages/derappsecond2/derappsecond2';
import { Derappsecond3Page } from '../pages/derappsecond3/derappsecond3';
import { Derappsecond4Page } from '../pages/derappsecond4/derappsecond4';
import { Derappsecond5Page } from '../pages/derappsecond5/derappsecond5';
import { Derappsecond6Page } from '../pages/derappsecond6/derappsecond6';
import { Derapprelated1Page } from '../pages/derapprelated1/derapprelated1';
import { Derapprelated2Page } from '../pages/derapprelated2/derapprelated2';
import { Derapprelated3Page } from '../pages/derapprelated3/derapprelated3';
import { Derapprelated4Page } from '../pages/derapprelated4/derapprelated4';
import { Derapprelated5Page } from '../pages/derapprelated5/derapprelated5';
import { Derapprelated6Page } from '../pages/derapprelated6/derapprelated6';
import { Derappvelocity1Page } from '../pages/derappvelocity1/derappvelocity1';
import { Derappvelocity2Page } from '../pages/derappvelocity2/derappvelocity2';
import { Derappvelocity3Page } from '../pages/derappvelocity3/derappvelocity3';
import { Derappvelocity4Page } from '../pages/derappvelocity4/derappvelocity4';
import { Derappvelocity5Page } from '../pages/derappvelocity5/derappvelocity5';
import { Derappvelocity6Page } from '../pages/derappvelocity6/derappvelocity6';
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
import { OptimizationCanvasComponent } from '../components/optimization-canvas/optimization-canvas';
import { DrawDerivativesComponent } from '../components/draw-derivatives/draw-derivatives';

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

	Functions1Page,
	Functions2Page,
	Functions3Page,
	Functions4Page,
	Functions5Page,
	Derappopt1Page,
	Derappopt0Page,
	Derappnewton0Page,
	Derapprelated0Page,
	Derappvelocity0Page,
	Derappbiology0Page,
	Derappeconomics0Page,
	Derappsecond0Page,
	Derappfirst0Page,
	Derappopt2Page,
	Derappopt3Page,
	Derappopt4Page,
	Derappopt5Page,
	Derappopt6Page,
	Derappopt7Page,
	Derappfirst1Page,
	Derappfirst2Page,
	Derappfirst3Page,
	Derappfirst4Page,
	Derappfirst5Page,
	Derappbiology1Page,
	Derappbiology2Page,
	Derappbiology3Page,
	Derappbiology4Page,
	Derappbiology5Page,
	Derappbiology6Page,
	Derappnewton1Page,
	Derappnewton2Page,
	Derappnewton3Page,
	Derappnewton4Page,
	Derappnewton5Page,
	Derappnewton6Page,
	Derappeconomics1Page,
	Derappeconomics2Page,
	Derappeconomics3Page,
	Derappeconomics4Page,
	Derappeconomics5Page,
	Derappeconomics6Page,
	Derappsecond1Page,
	Derappsecond2Page,
	Derappsecond3Page,
	Derappsecond4Page,
	Derappsecond5Page,
	Derappsecond6Page,
	Derapprelated1Page,
	Derapprelated2Page,
	Derapprelated3Page,
	Derapprelated4Page,
	Derapprelated5Page,
	Derapprelated6Page,
	Derappvelocity1Page,
	Derappvelocity2Page,
	Derappvelocity3Page,
	Derappvelocity4Page,
	Derappvelocity5Page,
	Derappvelocity6Page,
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
    OptimizationCanvasComponent,
    DrawDerivativesComponent,
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

	Functions1Page,
	Functions2Page,
	Functions3Page,
	Functions4Page,
	Functions5Page,
	Derappopt1Page,
	Derappopt0Page,
	Derappnewton0Page,
	Derapprelated0Page,
	Derappvelocity0Page,
	Derappbiology0Page,
	Derappeconomics0Page,
	Derappsecond0Page,
	Derappfirst0Page,
	Derappopt2Page,
	Derappopt3Page,
	Derappopt4Page,
	Derappopt5Page,
	Derappopt6Page,
	Derappopt7Page,
	Derappfirst1Page,
	Derappfirst2Page,
	Derappfirst3Page,
	Derappfirst4Page,
	Derappfirst5Page,
	Derappbiology1Page,
	Derappbiology2Page,
	Derappbiology3Page,
	Derappbiology4Page,
	Derappbiology5Page,
	Derappbiology6Page,
	Derappnewton1Page,
	Derappnewton2Page,
	Derappnewton3Page,
	Derappnewton4Page,
	Derappnewton5Page,
	Derappnewton6Page,
	Derappeconomics1Page,
	Derappeconomics2Page,
	Derappeconomics3Page,
	Derappeconomics4Page,
	Derappeconomics5Page,
	Derappeconomics6Page,
	Derappsecond1Page,
	Derappsecond2Page,
	Derappsecond3Page,
	Derappsecond4Page,
	Derappsecond5Page,
	Derappsecond6Page,
	Derapprelated1Page,
	Derapprelated2Page,
	Derapprelated3Page,
	Derapprelated4Page,
	Derapprelated5Page,
	Derapprelated6Page,
	Derappvelocity1Page,
	Derappvelocity2Page,
	Derappvelocity3Page,
	Derappvelocity4Page,
	Derappvelocity5Page,
	Derappvelocity6Page,
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
