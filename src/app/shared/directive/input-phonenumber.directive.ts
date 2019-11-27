import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputStudent]',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '(keypress)': 'numberOnly($event)',
  }

})
export class InputPhonenumberDirective {
  constructor(private el: ElementRef) {
    this.numberOnly(this.el.nativeElement);
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 46 || charCode > 57 || charCode === 47)) {
      return false;
    }
    return true;
  }
}
