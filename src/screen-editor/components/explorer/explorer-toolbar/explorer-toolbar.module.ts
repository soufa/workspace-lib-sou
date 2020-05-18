import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FeatureExplorerToolbarComponent } from '../feature-explorer/feature-explorer-toolbar/feature-explorer-toolbar.component';
import { ExplorerToolbarComponent } from './explorer-toolbar.component';
import { ExplorerSharedModule } from '../shared/explorer-shared.module';
import { FeatureCreatorComponent } from '../feature-explorer/dialog/feature-creator/feature-creator.component';

@NgModule({
  imports: [SharedModule, ExplorerSharedModule],
  declarations: [
    FeatureExplorerToolbarComponent,
    ExplorerToolbarComponent,
    FeatureCreatorComponent
  ],
  exports: [
    FeatureExplorerToolbarComponent,
    ExplorerToolbarComponent,
    FeatureCreatorComponent
  ]
})
export class ExplorerToolbarModule {}
