import { Directive, HostListener, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import { NgControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ScorePipe } from '../pipes/score.pipe';
@Directive({
  selector: '[appInputUnit]',
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '(blur)': 'formatInputValue($event.target.value )',
    '(focus)': 'formatInputValueFocus($event.target.value)',
    '(keypress)': 'numberOnly($event)',
  },
  providers: [ScorePipe]
})
export class InputUnitDirective implements OnInit {
  valueFocus;
  form: FormGroup;
  @Input() maxleng: number;
  @Input() max: number;
  score;
  constructor(
    private el: ElementRef,
    private ngControl: NgControl,
    private fb: FormBuilder,
    private scorePipe: ScorePipe
  ) {
  }
  ngOnInit() {
  }
  formatInputValue(value) {
    if (this.el.nativeElement.value > 10 || this.el.nativeElement.value < 0) {
      alert('Nhap so > 0 va < 10');
      this.ngControl.valueAccessor.writeValue('');
    } else {
      this.ngControl.valueAccessor.writeValue(this.scorePipe.transform(value));
    }
  }
  formatInputValueFocus(value) {
    const valueNew = value.replace(/ Điểm/g, '');
    this.ngControl.valueAccessor.writeValue(valueNew);
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 46 || charCode > 57 || charCode === 47)) {
      return false;
    }
    return true;
  }
}
