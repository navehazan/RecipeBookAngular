import { Directive,
        ElementRef,
        Renderer2,
       HostListener,
        HostBinding
       } from '@angular/core';

@Directive({
  selector: '[appOpen]'
})
export class OpenDirective {
 constructor() { }
@HostBinding("class.open") isOpen=false;  
@HostListener("click")toggleOpen(){
   this.isOpen=!this.isOpen;  
    }
  
}
