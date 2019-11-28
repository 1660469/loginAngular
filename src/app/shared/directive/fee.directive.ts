import { Directive, ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FeePipe } from '../pipes/fee.pipe';

@Directive({
  selector: '[appFee]',
  host: {
    '(blur)': 'formatInputValue($event.target.value )'
  },
  providers: [FeePipe]
})
export class FeeDirective implements OnInit{
  constructor(private ngControl: NgControl,
    private el: ElementRef,
    private feePipe: FeePipe) {
      
     }

     ngOnInit() {
      this.formatInputValue(this.ngControl.value);
    }
  formatInputValue(value) {
    //this.ngControl.valueAccessor.writeValue(value);
     this.ngControl.valueAccessor.writeValue(this.feePipe.transform(value));
  }
}
