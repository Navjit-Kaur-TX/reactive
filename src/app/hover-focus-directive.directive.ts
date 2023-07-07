import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverFocusDirective]'
})
export class HoverFocusDirectiveDirective {

  constructor() { }

  @HostBinding("style.background-color") backgroundColor: string | undefined;

  @HostListener('mouseover') onHover() {
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseout') onLeave() {
    this.backgroundColor = 'inherit';
  }

}
