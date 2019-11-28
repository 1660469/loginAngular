import { Directive, ElementRef, OnInit, AfterViewInit, AfterViewChecked, DoCheck } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FeePipe } from '../pipes/fee.pipe';

@Directive({
  selector: '[appFee]',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '(blur)': 'formatInputValue($event.target.value )',
    '(focus)': 'formatInputValueFocus($event.target.value )'
  },
  providers: [FeePipe]
})
export class FeeDirective implements OnInit {
  constructor(
    private ngControl: NgControl,
    private el: ElementRef,
    private feePipe: FeePipe
  ) {
  }
  ngOnInit() {
     this.ngControl.valueAccessor.writeValue(this.feePipe.transform(this.ngControl.value));
  }
  formatInputValue(value) {
    this.ngControl.valueAccessor.writeValue(this.feePipe.transform(value));
  }
  formatInputValueFocus(value) {
    const valueOne = value.replace(/(\d+),(?=\d{3}(\D|$))/g, "$1");
    const valueTwo = valueOne.replace(/.00 vnd/g, '');
    this.ngControl.valueAccessor.writeValue(valueTwo);
  }
}
