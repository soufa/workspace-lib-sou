import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WidgetsLibraryModel } from '../../../models';

@Component({
  selector: 'sc-store-selector',
  templateUrl: './store-selector.component.html',
  styleUrls: ['./store-selector.component.css']
})
export class StoreSelectorComponent {
  @Input() stores: WidgetsLibraryModel[];

  @Output() selectStore = new EventEmitter<WidgetsLibraryModel>();

  select(event: any) {
    this.selectStore.emit(event.value);
  }
}
