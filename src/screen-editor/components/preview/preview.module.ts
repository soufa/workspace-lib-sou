import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from './preview.component';
import { CoreModule } from '../../core';
import { SharedModule } from '../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { DesignSpaceComponent } from './design-space/design-space.component';
import { ImportTemplateComponent } from './import-template/import-template.component';
import { SearchTemplateComponent } from './search-template/search-template.component';
import { SimulateTemplateComponent } from './simulate-template/simulate-template.component';
import { StoreManagementComponent } from './store-management/store-management.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ],
  declarations: [PreviewComponent, CreateTemplateComponent, DesignSpaceComponent, ImportTemplateComponent, SearchTemplateComponent, SimulateTemplateComponent, StoreManagementComponent],
  exports: [PreviewComponent]
})
export class PreviewModule {}
