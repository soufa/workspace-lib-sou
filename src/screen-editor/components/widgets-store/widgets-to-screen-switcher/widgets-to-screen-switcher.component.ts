import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { WidgetsToScreenSwitcherService } from './widgets-to-screen-switcher.service';
import { WidgetsLibraryModel } from '../../../models';

@Component({
  selector: 'sc-widgets-to-screen-switcher',
  templateUrl: './widgets-to-screen-switcher.component.html',
  styleUrls: ['./widgets-to-screen-switcher.component.css']
})
export class WidgetsToScreenSwitcherComponent implements OnInit {
  @Input()
  collapseProperties: boolean;
  @Output()
  collapse: EventEmitter<any> = new EventEmitter();
  unsubscribe$: Subject<any> = new Subject();
  switcherState: string;
  constructor(private switcher: WidgetsToScreenSwitcherService) {}

  ngOnInit() {
    this.switcher
      .stat()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(state => (this.switcherState = state));
  }

  moveToComponents() {
    this.switcher.switchToComponents();
  }

  moveToScreens() {
    this.switcher.switchToScreens();
  }

  collapseComponents() {
    this.collapse.emit();
  }
}
