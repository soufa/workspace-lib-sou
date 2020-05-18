import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LeftContainerComponent } from './left-container/left-container.component';
import { RightContainerComponent } from './right-container/right-container.component';
import { CenterContainerComponent } from './center-container/center-container.component';
import { GlobalLayoutComponent } from './global-layout/global-layout.component';

@NgModule({
  imports: [SharedModule],
  declarations: [
    LeftContainerComponent,
    RightContainerComponent,
    CenterContainerComponent,
    GlobalLayoutComponent
  ],
  exports: [
    LeftContainerComponent,
    RightContainerComponent,
    CenterContainerComponent,
    GlobalLayoutComponent
  ]
})
export class LayoutModule {}
