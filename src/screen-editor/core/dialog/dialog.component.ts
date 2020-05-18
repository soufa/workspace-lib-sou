import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs';

import { DialogHostDirective } from './dialog-host/dialog-host.directive';
import { DialogService } from './dialog.service';
import { Dialog } from '../../core/dialog/dialog';

@Component({ selector: 'sc-dialog', templateUrl: './dialog.component.html' })
export class DialogComponent implements OnInit, OnDestroy {
  @ViewChild(DialogHostDirective, { static: false })
  dialogHost: DialogHostDirective;

  showDialog: boolean;
  title: string;

  private dialogService$: Subscription;

  constructor(
    private dialogService: DialogService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.dialogService$ = this.dialogService.content().subscribe(cmp => {
      if (cmp !== undefined) {
        const viewContainerRef = this.dialogHost.viewContainerRef;
        viewContainerRef.clear();
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          cmp.type
        );
        const componentRef = viewContainerRef.createComponent(componentFactory);
        (componentRef.instance as Dialog).setOptions(cmp.data);
        componentRef.changeDetectorRef.detectChanges();
        this.title = cmp.title || componentRef.instance['title'];
        this.showDialog = true;
      } else {
        this.showDialog = false;
      }
    });
  }

  hideDialog() {
    const viewContainerRef = this.dialogHost.viewContainerRef;
    viewContainerRef.clear();
  }

  ngOnDestroy() {
    if (this.dialogService$) {
      this.dialogService$.unsubscribe();
    }
  }
}
