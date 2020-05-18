import { NgModule } from '@angular/core';
import { DialogHostDirective } from './dialog-host/dialog-host.directive';
import { DialogComponent } from './dialog.component';
import { SharedModule } from '../../shared/shared.module';
import { DialogService } from './dialog.service';

@NgModule({
  imports: [SharedModule],
  declarations: [DialogHostDirective, DialogComponent],
  providers: [DialogService],
  exports: [DialogComponent]
})
export class DialogModule {}
