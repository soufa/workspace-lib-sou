import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { ToolbarFinderComponent } from './toolbar-finder/toolbar-finder.component';
import { ToolbarAddBtnComponent } from './toolbar-btn/toolbar-add-btn.component';
import { ToolbarSaveBtnComponent } from './toolbar-btn/toolbar-save-btn.component';

@NgModule({
  imports: [SharedModule],
  declarations: [
    ToolbarFinderComponent,
    ToolbarAddBtnComponent,
    ToolbarSaveBtnComponent
  ],
  exports: [
    ToolbarFinderComponent,
    ToolbarAddBtnComponent,
    ToolbarSaveBtnComponent
  ]
})
export class ExplorerSharedModule {}
