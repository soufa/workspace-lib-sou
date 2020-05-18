import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ScreenEditorComponent } from './screen-editor/screen-editor.component';
import { ComponentsModule } from '../components/components.module';
import { CoreModule } from '../core';
@NgModule({
  imports: [SharedModule, CoreModule, ComponentsModule],
  declarations: [ScreenEditorComponent],
  exports: [ScreenEditorComponent]
})
export class MainModule {}
