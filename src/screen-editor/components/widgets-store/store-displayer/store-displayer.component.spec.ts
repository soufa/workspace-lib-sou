import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeDragDropService } from 'primeng/api';

import { StoreDisplayerComponent } from './store-displayer.component';
/*import {
  WidgetStubComponent,
  WIDGET_STORE,
  COMPONENTS,
  HORIZONTAL_LAYOUT_NODE_STRUCTURE
} from '../../../../stub';*/
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'sc-store-displayer-test',
  template: `
    <sc-store-displayer [store]="store" [screen]="screen"> </sc-store-displayer>
  `
})
class TestStoreDisplayerComponent {
  @ViewChild(StoreDisplayerComponent, { static: false })
  storeDisplayerComponent: StoreDisplayerComponent;
 // store = WIDGET_STORE;
  screen = 'edit';
}

describe('StoreDisplayerComponent', () => {
  let component: StoreDisplayerComponent;
  let fixture: ComponentFixture<StoreDisplayerComponent>;
  let testComponent: TestStoreDisplayerComponent;
  let testFixture: ComponentFixture<TestStoreDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StoreDisplayerComponent,
      //  WidgetStubComponent,
        TestStoreDisplayerComponent
      ],
      providers: [TreeDragDropService],
      imports: [SharedModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDisplayerComponent);
    component = fixture.componentInstance;
   // component.store = WIDGET_STORE;
    testFixture = TestBed.createComponent(TestStoreDisplayerComponent);
    testComponent = testFixture.componentInstance;

    testFixture.detectChanges();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctry filter components', () => {
   // testComponent.store = WIDGET_STORE;
    testFixture.detectChanges();
    /*expect(testComponent.storeDisplayerComponent.components).toEqual(
      COMPONENTS
    );*/
  });

  it('it should correctly build node tree', () => {
    //component.components = COMPONENTS;
   /* const node = component.buildNodeTree(
      [COMPONENTS[5].defaultContent],
      COMPONENTS
    )[0];*/
    //console.log(node.children);
    //expect(node).toEqual(HORIZONTAL_LAYOUT_NODE_STRUCTURE);
  });
});
