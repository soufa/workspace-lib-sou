import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'global-layout',
  templateUrl: './global-layout.component.html',
  styleUrls: ['./global-layout.component.css']
})
export class GlobalLayoutComponent implements OnInit {
  leftCollapsed = false;
  rightCollapsed = false;
  ucPolicyActive = false;
  constructor(
    private layoutService: LayoutService
  ) { }

  ngOnInit() {
    this.layoutService.isUcPolicyModeActive().subscribe(isActive => {
      this.rightCollapsed = isActive;
      this.ucPolicyActive = isActive;
    });
  }

  /**
   * Collapse/Expand the left container
   *
   */
  collapseLeft() {
    this.leftCollapsed = !this.leftCollapsed;
  }

  /**
   * Collapse/Expand the right container
   *
   */
  collapseRight() {
    this.rightCollapsed = !this.rightCollapsed;
  }

}
