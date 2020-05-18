import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from './../../shared/shared.module';
import { FeatureExplorerComponent } from './feature-explorer/feature-explorer.component';

import { ExplorerToolbarModule } from './explorer-toolbar/explorer-toolbar.module';
import { ExplorerComponent } from './explorer.component';
import { Navigator } from './navigator/navigator';
import { CoreModule } from '../../core';

import { FeatureSelectorComponent } from './feature-explorer/dialog/feature-selector/feature-selector.component';
import { FeatureUpdatorComponent } from './feature-explorer/dialog/feature-updator/feature-updator.component';
import { ScreenClonerComponent } from './feature-explorer/dialog/screen-cloner/screen-cloner.component';

@NgModule({
  imports: [
    SharedModule,
    // UsecasePolicyModule,
    ExplorerToolbarModule,
    CoreModule,
    // StoreModule.forFeature(featuresManagement.key, featuresManagement.reducer),
    /*StoreModule.forFeature(

      screenExplorerManagement.reducerKey,
      screenExplorerManagement.reducer
    ),*/
    // EffectsModule.forFeature([FeaturesEffects, ScreenExplorerEffects])
    EffectsModule.forFeature([])

  ],
  declarations: [
  //  ScreenExplorerComponent,
    FeatureExplorerComponent,
   // SectionExplorerComponent,
    FeatureSelectorComponent,
    FeatureUpdatorComponent,
    ScreenClonerComponent,
    ExplorerComponent
  ],
  exports: [ExplorerComponent],
  providers: [Navigator],
  entryComponents: [
    FeatureSelectorComponent,
    FeatureUpdatorComponent,
    ScreenClonerComponent
  ]
})
export class ExplorerModule {}
