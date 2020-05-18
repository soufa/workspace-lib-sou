import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Screen } from '@palmyra-devkit/core-api/shared';
import { Navigator } from '../navigator/navigator';
import { LayoutService } from '../../../core/services/layout.service';

@Component({
  selector: 'sc-explorer-toolbar',
  templateUrl: './explorer-toolbar.component.html',
  styleUrls: ['./explorer-toolbar.component.css']
})
export class ExplorerToolbarComponent implements OnInit {
  @Output()
  query: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  screenSaved: EventEmitter<Screen> = new EventEmitter<Screen>();

  view$: Observable<string>;

  constructor(
    private navigator: Navigator,
    private layoutService: LayoutService,
   // private featuresManagement: Store<FeaturesState>
  ) {}

  ngOnInit(): void {
    this.view$ = this.navigator.view();
  }

  openFeatureSelector() {
   // this.featuresManagement.dispatch(openDialogToAddFeature());
  }

  doSaveFeatures() {
   // this.featuresManagement.dispatch(saveFeaturesUpdates());
  }

  doFilter(query: string) {
    this.query.emit(query);
  }
}
