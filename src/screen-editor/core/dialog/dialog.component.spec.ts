import { ComponentFactoryResolver } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DialogComponent, DialogService, DialogHostDirective } from '.';
import { SharedModule } from '../../shared/shared.module';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, BrowserAnimationsModule],
      declarations: [DialogComponent, DialogHostDirective],
      providers: [DialogService, ComponentFactoryResolver]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide dialog', () => {
    const viewContainer = component.dialogHost.viewContainerRef;
    component.hideDialog();
    fixture.detectChanges();
    expect(component.dialogHost.viewContainerRef).toEqual(viewContainer);
  });
});
