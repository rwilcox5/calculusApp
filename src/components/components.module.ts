import { NgModule } from '@angular/core';
import { MultiChoiceComponent } from './multi-choice/multi-choice';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { OrderStuffComponent } from './order-stuff/order-stuff';
import { MatchStuffComponent } from './match-stuff/match-stuff';
import { SpinKnobComponent } from './spin-knob/spin-knob';
import { MasterMindComponent } from './master-mind/master-mind';
import { DoubleSudokuComponent } from './double-sudoku/double-sudoku';
import { MathjaxLatexComponent } from './mathjax-latex/mathjax-latex';
import { RiemannCanvasComponent } from './riemann-canvas/riemann-canvas';
@NgModule({
	declarations: [MultiChoiceComponent,
    ProgressBarComponent,
    OrderStuffComponent,
    MatchStuffComponent,
    SpinKnobComponent,
    MasterMindComponent,
    DoubleSudokuComponent,
    MathjaxLatexComponent,
    RiemannCanvasComponent],
	imports: [],
	exports: [MultiChoiceComponent,
    ProgressBarComponent,
    OrderStuffComponent,
    MatchStuffComponent,
    SpinKnobComponent,
    MasterMindComponent,
    DoubleSudokuComponent,
    MathjaxLatexComponent,
    RiemannCanvasComponent]
})
export class ComponentsModule {}
