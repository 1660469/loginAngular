import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputPhonenumberDirective } from './directive/input-phonenumber.directive';
import { InputUnitDirective } from './directive/input-unit.directive';



@NgModule({
  declarations: [InputPhonenumberDirective, InputUnitDirective],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FormsModule, InputPhonenumberDirective, InputUnitDirective]
})
export class SharedModule { }
