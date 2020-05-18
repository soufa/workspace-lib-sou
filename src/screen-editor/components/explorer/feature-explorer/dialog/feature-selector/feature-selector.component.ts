import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { withLatestFrom, map } from 'rxjs/operators';

import { Feature, Entity } from '@palmyra-devkit/core-api/shared';

import { Dialog } from '../../../../../core/dialog/dialog';
import { FeatureUpdatorComponent } from '../feature-updator/feature-updator.component';
import { ModelsState, getAllModels } from '../../../../../core/ngrx/models';

@Component({
  selector: 'sc-feature-selector',
  templateUrl: './feature-selector.component.html',
  styleUrls: ['./feature-selector.component.css']
})
export class FeatureSelectorComponent extends Dialog
  implements OnInit, AfterViewInit {
  @ViewChild('featureInput', { static: false }) feature;
  @ViewChild('featureUpdator', { static: false })
  updator: FeatureUpdatorComponent;

  models$: Observable<Entity[]>;
  features$: Observable<Feature[]>;
  options: {};

  selectedFeature: Entity;

  constructor(
    private modelsManagementStore: Store<ModelsState>,
    // private featuresManagement: Store<FeaturesState>
  ) {
    super();
  }

  ngOnInit() {
   /* this.features$ = this.featuresManagement.select(getFeaturesAsData);
    this.models$ = this.modelsManagementStore.select(getAllModels).pipe(
      withLatestFrom(this.features$, (entities, features) => ({
        entities,
        features
      })),
      map(({ entities, features }) => {
        const featuresNames = features.map(feature =>
          feature.name.toLocaleLowerCase()
        );
        return entities.filter(
          entity => !featuresNames.includes(entity.name.toLocaleLowerCase())
        );
      })
    );*/
  }

  ngAfterViewInit() {
    this.selectFeature();
  }

  selectFeature() {
    if (this.selectedFeature) {
      this.updator.setOptions({
        featureName:
          this.selectedFeature.name.charAt(0).toLowerCase() +
          this.selectedFeature.name.slice(1)
      });
    }
  }
}
