import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ExplorerModule } from './explorer/explorer.module';
import { WidgetsStoreComponent,  WidgetComponent } from './widgets-store';
import { CoreModule } from '../core';
import { PreviewModule } from './preview/preview.module';
import { StoreSelectorComponent } from './widgets-store/store-selector/store-selector.component';
import { StoreDisplayerComponent } from './widgets-store/store-displayer/store-displayer.component';
import { WidgetsToScreenSwitcherComponent } from './widgets-store/widgets-to-screen-switcher/widgets-to-screen-switcher.component';
import { WidgetsToScreenSwitcherService } from './widgets-store/widgets-to-screen-switcher/widgets-to-screen-switcher.service';
import { ScreensStoreComponent } from './widgets-store/screens-store/screens-store.component';
import { ExplorerToolbarModule } from './explorer/explorer-toolbar/explorer-toolbar.module';
import {CreateTemplateComponent} from './preview/create-template/create-template.component';
import {SearchTemplateComponent} from './preview/search-template/search-template.component';
import {SimulateTemplateComponent} from './preview/simulate-template/simulate-template.component';
import {DesignSpaceComponent} from './preview/design-space/design-space.component';
import {ImportTemplateComponent} from './preview/import-template/import-template.component';
import {StoreManagementComponent} from './preview/store-management/store-management.component';
import {RouterModule, Routes} from '@angular/router';
import {PreviewComponent} from './preview/preview.component';
import {PanelMenuModule} from 'primeng/panelmenu';
const appRoutes: Routes = [
  {path: 'createTemplate' , component: CreateTemplateComponent},
  {path: 'searchTemplate' , component: SearchTemplateComponent},
  {path: 'simulateTemplate' , component: SimulateTemplateComponent},
  {path: 'designSpace' , component: DesignSpaceComponent},
  {path: 'importTemplate' , component: ImportTemplateComponent},
  {path: 'store', component: StoreManagementComponent},
  {path: '' , component: PreviewComponent}
];
@NgModule({
  imports: [SharedModule, ExplorerModule, CoreModule,
    PanelMenuModule,
    RouterModule.forRoot(appRoutes)],
  declarations: [
    WidgetComponent,
    WidgetsStoreComponent,
    StoreSelectorComponent,
    StoreDisplayerComponent,
    WidgetsToScreenSwitcherComponent,
    ScreensStoreComponent
  ],
  exports: [
    ExplorerModule,
    ExplorerToolbarModule,
    WidgetsStoreComponent,
    WidgetsToScreenSwitcherComponent,
    PreviewModule,

  ],
  providers: [WidgetsToScreenSwitcherService]
})
export class ComponentsModule {}
