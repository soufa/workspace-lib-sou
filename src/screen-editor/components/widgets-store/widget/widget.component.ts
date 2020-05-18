import { Input, Component } from '@angular/core';
import { UiComponent } from '../../../models/widgets-library/ui-component';

@Component({
  selector: 'sc-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent {
  @Input() component: UiComponent;
  constructor() {}
}
