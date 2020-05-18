import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { PreviewerLoadingComponent } from './previewer-loading/previewer-loading.component';
import { PreviewerLoadingService } from './services/previewer-loading.service';

@NgModule({
  imports: [SharedModule, CommonModule],
  exports: [PreviewerLoadingComponent],
  declarations: [PreviewerLoadingComponent],
  providers: [PreviewerLoadingService],
})
export class LoadingModule { }
