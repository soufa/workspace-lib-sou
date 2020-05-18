import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'right-container',
  template: '<ng-content></ng-content>'
})
export class RightContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
