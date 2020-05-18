import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[remove-special-char]'
})
export class RemoveSpecialCharacterDirective {
  constructor(private el: ElementRef) {}

  @HostListener('keyup')
  onChange() {
    this.el.nativeElement.value = this.removeSpecialCharactersAndWhiteSpace(
      this.el.nativeElement.value
    );
  }

  private removeSpecialCharactersAndWhiteSpace(value: string): string {
    value = value.replace(/\s+/g, '');
    value = value.replace(/[^0-9a-zA-Z_-]/g, '');
    return value;
  }
}
