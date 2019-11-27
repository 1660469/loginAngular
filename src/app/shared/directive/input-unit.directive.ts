import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive( {
  selector: '[appInputUnit]',
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '(blur)': 'formatInputValue($event.target.value)',
}
} )
export class InputUnitDirective {
  constructor (
    private el: ElementRef,
    private ngControl: NgControl,
  ) {
  }

  formatInputValue( value ) {
    this.ngControl.valueAccessor.writeValue( value + ' Điểm' );
  }


}
