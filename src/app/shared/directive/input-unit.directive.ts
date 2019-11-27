import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appInputUnit]',
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '(blur)': 'formatInputValue($event.target.value )',
    '(focus)': 'formatInputValueFocus($event.target.value)',
    '(keypress)': 'numberOnly($event)',
  }
})
export class InputUnitDirective {
  valueFocus;
  @Input() maxleng: number;
  constructor(
    private el: ElementRef,
    private ngControl: NgControl,
  ) {
  }

  formatInputValue(value) {
    this.ngControl.valueAccessor.writeValue(value + ' Điểm');
  }
  formatInputValueFocus(value) {
    const valueNew = value.replace(/ Điểm/g, '');
    this.ngControl.valueAccessor.writeValue(valueNew);

  }
  numberOnly(event): boolean {
    if (this.el.nativeElement.value.length >= this.maxleng) {
      event.preventDefault();
    } else {
      const charCode = (event.which) ? event.which : event.keyCode;
      if (charCode > 31  && (charCode < 46 || charCode > 57 || charCode === 47)) {
        return false;
      }
      return true;
    }
  }

}
