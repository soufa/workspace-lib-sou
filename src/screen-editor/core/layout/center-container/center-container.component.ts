import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'center-container',
  template: '<ng-content></ng-content>'
})
export class CenterContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
