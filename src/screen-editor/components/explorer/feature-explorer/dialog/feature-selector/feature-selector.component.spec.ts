import { ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

import { WorkspaceClientApi } from '@palmyra-devkit/core-api/client';

// import { ModelStore } from '../../../../../core';
import { SharedModule } from '../../../../../shared/shared.module';
import { FeatureSelectorComponent } from './feature-selector.component';
/*import {
  FeatureUpdatorStubComponent,
  WorkspaceApiMock,
  // ModelStoreMock
} from '../../../../../../stub';*/

describe('FeatureSelectorComponent', () => {
  let injector: TestBed;
  let component: FeatureSelectorComponent;
  let fixture: ComponentFixture<FeatureSelectorComponent>;

  let workspaceApi: WorkspaceClientApi;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, SharedModule, BrowserAnimationsModule],
  //    declarations: [FeatureSelectorComponent, FeatureUpdatorStubComponent],
      providers: [
        //{ provide: WorkspaceClientApi, useValue: new WorkspaceApiMock() },
       // { provide: ModelStore, useValue: new ModelStoreMock() }
      ]
    }).compileComponents();
    injector = getTestBed();
    fixture = TestBed.createComponent(FeatureSelectorComponent);
    component = fixture.componentInstance;
    workspaceApi = injector.get(WorkspaceClientApi);
   /* jest
      .spyOn(workspaceApi, 'getModels')
      .mockReturnValue(of([{ name: 'entity' }]));*/
  });
  afterEach(() => {
  //  jest.restoreAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select feature', () => {
    const expectedFeature = {
      name: 'f',
      screens: [],
      screenscount: 0,
      status: 'NEW'
    };
    component.selectedFeature = expectedFeature;
    fixture.detectChanges();
    expect(component.updator).toBeDefined();
   // jest.spyOn(component.updator, 'setOptions').mockImplementation(() => {});

    component.selectFeature();
    fixture.detectChanges();

    expect(component.updator.setOptions).toHaveBeenCalled();
    expect(component.updator.setOptions).toHaveBeenCalledWith({
      feature: { ...expectedFeature }
    });
  });
});
