import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { PreviewStore } from '../../../core/store';


@Injectable()
export class Navigator {
  private view$: BehaviorSubject<string> = new BehaviorSubject('feature');

  constructor(
    private previwerStore: PreviewStore,
//    private propertiesManagement: Store<PropertiesState>
  ) {}

  view(): Observable<string> {
    return this.view$;
  }

  goToScreenExplorer(): void {
    this.view$.next('screen');
  }

  goToPageExplorer(): void {
    this.view$.next('page');
  }

  goToFeatureExplorer(): void {
    this.previwerStore.next(undefined);
  //  this.propertiesManagement.dispatch(editScreenWidgetProperties(undefined));
    this.view$.next('feature');
  }
}
