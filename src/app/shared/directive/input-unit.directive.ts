import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInputUnit]'
})
export class InputUnitDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
  }
  @HostListener('mouseenter') onMouseEnter() {
    // this.el.nativeElement.innerText += 'Diem';
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', '<h1>Hello world</h1>');
  }
  @HostListener('mouseleave') onMouseLeave() {

  }


}
