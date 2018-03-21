import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { KatexModule } from 'ng-katex';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Trig0Page } from '../pages/trig0/trig0';
import { Trig1Page } from '../pages/trig1/trig1';
import { Trig2Page } from '../pages/trig2/trig2';
import { Trig3Page } from '../pages/trig3/trig3';
import { Trig4Page } from '../pages/trig4/trig4';
import { Trig5Page } from '../pages/trig5/trig5';
import { Trig6Page } from '../pages/trig6/trig6';
import { Trig7Page } from '../pages/trig7/trig7';

import { MultiChoiceComponent } from '../components/multi-choice/multi-choice';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { OrderStuffComponent } from '../components/order-stuff/order-stuff';
import { MatchStuffComponent } from '../components/match-stuff/match-stuff';
import { SpinKnobComponent } from '../components/spin-knob/spin-knob';
import { MasterMindComponent } from '../components/master-mind/master-mind';
import { DoubleSudokuComponent } from '../components/double-sudoku/double-sudoku';
import { MathjaxLatexComponent } from '../components/mathjax-latex/mathjax-latex';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Trig0Page,
    Trig1Page,
    Trig2Page,
    Trig3Page,
    Trig4Page,
    Trig5Page,
    Trig6Page,
    Trig7Page,
    MultiChoiceComponent,
    ProgressBarComponent,
    OrderStuffComponent,
    MatchStuffComponent,
    SpinKnobComponent,
    MasterMindComponent,
    DoubleSudokuComponent,
    MathjaxLatexComponent,
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
    Trig0Page,
    Trig1Page,
    Trig2Page,
    Trig3Page,
    Trig4Page,
    Trig5Page,
    Trig6Page,
    Trig7Page,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
