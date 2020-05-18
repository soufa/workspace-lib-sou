import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'left-container',
  template: '<ng-content></ng-content>'
})
export class LeftContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
