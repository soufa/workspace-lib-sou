import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';

import { Feature, Screen } from '@palmyra-devkit/core-api/shared';

import { ScreenTemplate } from '../../models';
import { Navigator } from './navigator/navigator';

@Component({
  selector: 'sc-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent {
  constructor(
    public navigator: Navigator,
    // private featuresManagement: Store<FeaturesState>
  ) {}

  /**
   * Used to filter tree nodes.
   * @param event - dom event.
   */
  filter(query: string) {
    // this.featuresManagement.dispatch(filterFeature({ query }));
  }
}
