import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { includes } from 'lodash';

import { DialogService, Dialog } from '../../../../../core';
import { ScreenTemplate } from '../../../../../models/screens-library';
import {
  ScreensLibrairiesState,
  getAllScreens
} from '../../../../../core/ngrx/screens-librairies';


import { getAllModels, ModelsState } from '../../../../../core/ngrx/models';
@Component({
  selector: 'sc-feature-updator',
  templateUrl: './feature-updator.component.html',
  styleUrls: ['./feature-updator.component.scss']
})
export class FeatureUpdatorComponent extends Dialog implements OnInit {
  featureName: string;
  featureScreensState$: Observable<any>;
  screensInTrashCount$: Observable<number>;
  disableApplyButton$: Observable<boolean>;
  templates$: Observable<ScreenTemplate[]>;
  // screens: ScreenState[];
  models$: Observable<any[]>;
  title = '';

  screensCount$: { [key: string]: Observable<string> } = {};

  @Input()
  setOptions(options: { featureName: string }): void {
    this.featureName = options.featureName;
    this.title = `Screen manager (Feature: ${this.featureName})`;
    //this.refreshFeatureScreensState(this.featureName);
  }

  constructor(
    private dialogService: DialogService,
    private screensLibrairiesManagement: Store<ScreensLibrairiesState>,
    private modelsManagementStore: Store<ModelsState>,
    // private featuresManagement: Store<FeaturesState>
  ) {
    super();
  }

  ngOnInit() {
   /* this.templates$ = this.screensLibrairiesManagement
      .select(getAllScreens)
      .pipe(
        filter(Boolean),
        tap((screensTemplates: ScreenTemplate[]) => {
          screensTemplates.reduce((result, screenTemplate) => {
            result[`${screenTemplate.template}`] = this.featuresManagement
              .select(getScreensToDisplayByType, {
                featureName: this.featureName,
                template: screenTemplate.template
              })
              .pipe(
                map(screens => `${screenTemplate.name} (${screens.length})`)
              );
            return result;
          }, this.screensCount$);
        })
      );
    this.models$ = this.modelsManagementStore.select(getAllModels).pipe(
      map(models =>
        models.map(model => {
          return { label: model.name, value: model.name };
        })
      )
    );*/
  }

 /* screenNameChanges(newName: string, index: any) {
    this.featuresManagement.dispatch(
      renameScreen({
        featureName: this.featureName,
        oldName:
          this.screens[index]['savedName'] || this.screens[index]['screenName'],
        newName
      })
    );
  }*/

 /* screenDefinitionChanges(
    screenName: string,
    savedName: string,
    modelName: string
  ) {
    this.featuresManagement.dispatch(
      changeScrrenModel({
        featureName: this.featureName,
        screenName,
        savedName,
        modelName
      })
    );
  }
*/
  /**
   * sections may have nested sections
   * @param screen the screen to delete
   */
 /* screenToDelete(screen) {
    this.featuresManagement.dispatch(
      deleteScreenFromFeature({
        featureName: this.featureName,
        screenName: screen.screenName
      })
    );
  }*/
  /**
   * sections may have nested sections
   * @param screen the screen to cancel
   */
 /* cancelDeleteScreen(screen) {
    this.featuresManagement.dispatch(
      cancelDeleteScreenFromFeature({
        featureName: this.featureName,
        screenName: screen.screenName
      })
    );
  }*/
  /**
   * sections may have nested sections
   * @param screenNode the screen node
   */
 /* confirmDeleteScreen(screen) {
    this.featuresManagement.dispatch(
      confirmDeleteScreenFromFeature({
        featureName: this.featureName,
        screenName: screen.screenName
      })
    );
  }*/

  /*addScreen(template: ScreenTemplate) {
    if (this.featureName) {
      this.featuresManagement.dispatch(
        addScreenToFeature({
          featureName: this.featureName,
          template
        })
      );
    }
  }*/

  /*apply() {
    this.featuresManagement.dispatch(
      applyFeatureUpdates({
        featureName: this.featureName
      })
    );
    this.dialogService.closeDialog();
  }*/

  /**
   * Add the 'invalid-screen-name' class name to cells having invalid input text
   * @param name the screen name
   * @param inputRef inputReference of the input text
   * @returns boolean
   */
  /*nameValidityStyle(index: number, inputRef: HTMLElement): boolean {
    const classameExist = includes(
      inputRef.parentElement.parentElement.className,
      'invalid-screen-name'
    );
    const isValid = !this.screens[index].errors;
    if (isValid !== undefined && !isValid) {
      if (!classameExist) {
        inputRef.parentElement.parentElement.className +=
          ' invalid-screen-name';
      }
      return isValid;
    } else {
      if (classameExist) {
        inputRef.parentElement.parentElement.className = inputRef.parentElement.parentElement.className.replace(
          'invalid-screen-name',
          ''
        );
      }
    }
    if (isValid !== undefined && isValid) {
      return isValid;
    }
    return !isValid;
  }*/

  /*nameValidityTooltip(index: number): string {
    return this.screens[index].errors;
  }*/

  /**
   * enabale or disable the Apply button
   */
  disableApplyButton(): Observable<boolean> {
    // require screens validated
    return this.disableApplyButton$;
  }

  /*private refreshFeatureScreensState(featureName: string) {
    this.featureScreensState$ = this.getFeatureState(featureName).pipe(
      map((screensStates: ScreenState[]) =>
        screensStates.filter(
          (screenState: ScreenState) =>
            !screenState.toBeInTrash && !screenState.inTrash
        )
      ),
      tap(screensState => {
        this.screens = screensState;
      })
    );
    this.disableApplyButton$ = this.getFeatureState(featureName).pipe(
      map(screensState =>
        screensState.every(
          (screenState: ScreenState) =>
            !screenState.toBeAdded &&
            !screenState.isInValid &&
            !screenState.toBeInTrash &&
            !screenState.inTrash &&
            !screenState.rename &&
            screenState.modelChanged
        )
      )
    );
    this.screensInTrashCount$ = this.getFeatureState(featureName).pipe(
      map(
        (screensStates: ScreenState[]) =>
          screensStates.filter(
            (screenState: ScreenState) =>
              screenState.toBeInTrash || screenState.inTrash
          ).length
      )
    );
  }*/
 /* private getFeatureState(featureName: string): Observable<any[]> {
    return this.featuresManagement
      .select(getScreensState, {
        featureName
      })
      .pipe(
        map(screensState => {
          if (screensState) {
            return Object.keys(screensState).map(key => ({
              ...screensState[key],
              screenName: screensState[key].rename || key
            }));
          }
          return [];
        })
      );
  }*/
}
