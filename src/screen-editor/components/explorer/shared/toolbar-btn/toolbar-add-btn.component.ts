import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sc-toolbar-add-btn',
  template: `
    <p-button
      icon="fa fa-fw fa-plus"
      pTooltip="{{ tooltip }}"
      tooltipPosition="bottom"
      (click)="click.emit($event)"
    ></p-button>
  `,
  styles: [
    `
      :host ::ng-deep .ui-button {
        color: #d83431;
        background: transparent;
        border: none;
        border-radius: 0;
        height: 25px;
        width: 25px;
        margin-right: 0;
        margin-left: 2px;
      }
    `,
    `
      :host ::ng-deep .ui-button:focus,
      :host ::ng-deep .ui-button:enabled:hover {
        background: transparent;
        color: #d83431 !important;
      }
    `
  ]
})
export class ToolbarAddBtnComponent {
  @Input() tooltip: string;
  @Output() click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
}
