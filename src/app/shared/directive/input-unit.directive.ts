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
    private renderer: Renderer2,
    private ngControl: NgControl,
  ) {
  }
  @HostListener( 'mouseenter' ) onMouseEnter() {
    // this.el.nativeElement.innerText += 'Diem';
    this.renderer.setProperty( this.el.nativeElement, 'innerHTML', '<h1>Hello world</h1>' );
  }
  @HostListener( 'mouseleave' ) onMouseLeave() {

  }

  formatInputValue( value ) {
    this.ngControl.valueAccessor.writeValue( value + 'Quang đẹp trai' );
  }


}
