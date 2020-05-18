import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sc-toolbar-save-btn',
  template: `
    <p-button
      icon="fa fa-fw fa-check"
      pTooltip="{{ tooltip }}"
      tooltipPosition="bottom"
      (click)="click.emit()"
    ></p-button>
  `,
  styles: [
    `
      :host ::ng-deep .ui-button {
        background: transparent;
        border: none;
        border-radius: 0;
        height: 25px;
        width: 25px;
        margin-right: 0;
        margin-left: 2px;
        color: #4caf50;
      }
      :host ::ng-deep .ui-button .ui-button-text {
        padding: 0px 19px;
      }
      :host ::ng-deep .ui-button-text-icon-left .ui-button-icon-left {
        font-size: 12px;
        top: 14px;
        left: 2px;
      }
    `,
    `
      :host ::ng-deep .ui-button:focus,
      :host ::ng-deep .ui-button:enabled:hover {
        color: #4caf50;
        background: transparent;
      }
    `
  ]
})
export class ToolbarSaveBtnComponent {
  @Input() tooltip: string;
  @Output() click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
}
