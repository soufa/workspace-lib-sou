import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ScreenEditorComponent } from './main/screen-editor/screen-editor.component';
import { MainModule } from './main/main.module';
import { SecurityClientApiImpl } from '../fake-backend/mocked-api-impl/security-client-api-impl';
import { WorkspaceClientApiImpl } from '../fake-backend/mocked-api-impl/workspace.client.api.impl';
import { IDEMessageService } from '../fake-backend/mocked-api-impl/ide-message.api';
import { IdeMessageService } from '@palmyra-devkit/core-api/client/messages';
import { IdeActionsServiceImpl } from '../fake-backend/mocked-api-impl/ide-actions.service';
const routes: Routes = [{ path: '', component: ScreenEditorComponent }];
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects';
import { WorkspaceClientApi } from '@palmyra-devkit/core-api/client/workspace.client.api';
import {
  SecurityClientApi,
  IdeActionsService
} from '@palmyra-devkit/core-api/client';
const modulesApiPaths = { 'screen-editor': '/api/screen-editor/1.5.0-beta.67' };
@NgModule({
  imports: [RouterModule.forChild(routes),  StoreModule.forRoot({}),
    EffectsModule.forRoot([])],
  exports: [MainModule],
  providers: [ { provide: 'API_PATHS', useValue: modulesApiPaths },
    { provide: WorkspaceClientApi, useClass: WorkspaceClientApiImpl },
    { provide: SecurityClientApi, useClass: SecurityClientApiImpl },
    { provide: IdeMessageService, useClass: IDEMessageService },
    { provide: IdeActionsService, useClass: IdeActionsServiceImpl }]
})
export class ScreenEditorModule {}
