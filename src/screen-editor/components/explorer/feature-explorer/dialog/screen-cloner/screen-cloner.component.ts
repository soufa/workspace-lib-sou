import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  Dialog,
  ScreenValidationService,
  DialogService
} from '../../../../../core';

@Component({
  selector: 'sc-feature-cloner',
  templateUrl: './screen-cloner.component.html',
  styleUrls: ['./screen-cloner.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScreenClonerComponent extends Dialog {
  screenName: string;
  private screenToClone: string;
  private featureName: string;

  @Input()
  setOptions(options: { featureName: string; screenName: string }): void {
    this.screenToClone = options.screenName;
    this.featureName = options.featureName;
    this.screenName = `${options.screenName}0001`;
  }

  constructor(
    private screenValidation: ScreenValidationService,
    private dialogService: DialogService,
    // private featuresManagement: Store<FeaturesState>
  ) {
    super();
  }
  apply(){

  }
  /*apply(): void {
    this.featuresManagement.dispatch(
      cloneScreen({
        featureName: this.featureName,
        screenName: this.screenName,
        clonedScreenName: this.screenToClone
      })
    );
    this.dialogService.closeDialog();
  }*/
  cancel(): void {
    this.dialogService.closeDialog();
  }

  disableApplyButton(): boolean {
    return false;
  }

  inValidScreen(): Observable<string> {
   /* if (this.screenName) {
      return this.featuresManagement
        .select(getScreensNameToDisplayByFeature, {
          featureName: this.featureName
        })
        .pipe(
          map(screensNames => {
            const validationResult = this.screenValidation.validateScreensNames(
              [].concat(screensNames, {
                displayed: this.screenName,
                name: this.screenName
              })
            );
            return (
              validationResult[this.screenName] &&
              validationResult[this.screenName].error
            );
          })
        );
    }*/
    return of('The screen name is mandatory');
  }
}
