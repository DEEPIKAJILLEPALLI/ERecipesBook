import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {
@HostBinding('class.Open') get Opened(){
return this.isOpen
}
@HostListener('click')  Open(){
  this.isOpen = true;
}
@HostListener('mouseleave')  Close(){
  this.isOpen = true;
}
private isOpen = false;

}
