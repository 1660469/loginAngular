import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputPhonenumberDirective } from './directive/input-phonenumber.directive';
import { InputUnitDirective } from './directive/input-unit.directive';
import { ScorePipe } from './pipes/score.pipe';
import { FeePipe } from './pipes/fee.pipe';



@NgModule({
  declarations: [InputPhonenumberDirective, InputUnitDirective, ScorePipe, FeePipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FormsModule, InputPhonenumberDirective, InputUnitDirective, ScorePipe, FeePipe]
})
export class SharedModule { }
