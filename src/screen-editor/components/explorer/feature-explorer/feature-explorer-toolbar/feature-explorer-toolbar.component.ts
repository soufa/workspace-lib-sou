import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  HostListener,
  OnDestroy
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, filter, takeUntil } from 'rxjs/operators';

// Simport { FeaturesState, getFeatureInTrash, getScreensInTrash } from '../ngrx';
import { Store } from '@ngrx/store';
import { IdeActionsService } from '@palmyra-devkit/core-api/client';

@Component({
  selector: 'sc-feature-explorer-toolbar',
  templateUrl: './feature-explorer-toolbar.component.html',
  styleUrls: ['./feature-explorer-toolbar.component.css']
})
export class FeatureExplorerToolbarComponent implements OnInit, OnDestroy {
  @Output()
  filter: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  addFeature: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  saveFeatures: EventEmitter<any> = new EventEmitter<any>();

  deletedScreens$: Observable<number>;
  deletedFeatureCount$: Observable<number>;
  unsubscribe$ = new Subject();

  constructor(
 //   private featuresManagement: Store<FeaturesState>,
    private ideActionsSevice: IdeActionsService
  ) {}

  ngOnInit() {/*
    this.deletedScreens$ = this.featuresManagement
      .select(getScreensInTrash)
      .pipe(
        filter(Boolean),
        map((screens: []) => screens.length)
      );

    this.deletedFeatureCount$ = this.featuresManagement
      .select(getFeatureInTrash)
      .pipe(
        filter(Boolean),
        map(featuresInTrash => Object.keys(featuresInTrash).length)
      );

    this.ideActionsSevice
      .save()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(_ => this.doSaveFeatures());*/
  }
  /**
   * Used to filter tree nodes.
   * @param event - dom event.
   */
  doFilter(query: string) {
    this.filter.emit(query);
  }

  openAddFeatureDialog() {
    this.addFeature.emit();
  }

  doSaveFeatures() {
    this.saveFeatures.emit();
  }

  /**
   * Save using keybord shortcut
   * Ctrt + s
   * @param event key board event
   */
  @HostListener('window:keydown', ['$event'])
  moveNodeWithKeys(event: KeyboardEvent) {
    if ((event.ctrlKey || event.metaKey) && event.key === 's') {
      event.preventDefault();
      event.stopPropagation();
      this.doSaveFeatures();
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
