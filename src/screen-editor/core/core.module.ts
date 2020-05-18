import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ConfirmationService } from 'primeng/api';

import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from './layout';
import { ValidationStore, PreviewStore, SwaggerServicesStore } from './store';
import {
  WidgetsLibrairiesAPIService,
  ScreensLibrairiesAPIService,
  PreviewService
} from './services/api';
import {
  ScreenValidationService,
  UnloadModuleService,
  UuidService
} from './services';
import { DialogModule } from './dialog/dialog.module';
import { ExplorerHeaderPipe } from './directives/explorer-header.pipe';
import { SafePipe } from './directives/safe.pipe';
import { LayoutService } from './services/layout.service';
import { LoadingModule } from './loading/loading.module';
import { DndService } from '../core/services/dnd/dnd.service';

import * as widgetsLibrairiesManagement from '../core/ngrx/widgets-librairies';
import * as screensLibrairiesManagement from '../core/ngrx/screens-librairies';
import * as modelsManagement from './ngrx/models';
import { WidgetsLibrairiesEffects } from '../core/ngrx/widgets-librairies';
// import { ScreensLibrairiesEffects } from '../core/ngrx/screens-librairies';
import { ModelsEffects } from './ngrx/models';

@NgModule({
  declarations: [ExplorerHeaderPipe, SafePipe],
  imports: [
    SharedModule,
    LayoutModule,
    DialogModule,
    LoadingModule,
    StoreModule.forFeature(
      widgetsLibrairiesManagement.key,
      widgetsLibrairiesManagement.reducer
    ),
    StoreModule.forFeature(
      screensLibrairiesManagement.key,
      screensLibrairiesManagement.reducer
    ),
    StoreModule.forFeature(modelsManagement.key, modelsManagement.reducer),
    EffectsModule.forFeature([
      WidgetsLibrairiesEffects,
      // ScreensLibrairiesEffects,
      ModelsEffects
    ])
  ],
  exports: [
    LayoutModule,
    DialogModule,
    ExplorerHeaderPipe,
    SafePipe,
    LoadingModule
  ],
  providers: [
    ConfirmationService,
    WidgetsLibrairiesAPIService,
    ScreensLibrairiesAPIService,
    PreviewService,
    ScreenValidationService,
    ValidationStore,
    PreviewStore,
    UnloadModuleService,
    LayoutService,
    DndService,
    SwaggerServicesStore,
    UuidService
  ]
})
export class CoreModule {}
