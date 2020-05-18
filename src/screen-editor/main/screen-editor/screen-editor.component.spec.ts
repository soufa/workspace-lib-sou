import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  async,
  ComponentFixture,
  TestBed,
  getTestBed
} from '@angular/core/testing';
import { of } from 'rxjs';

import {
  UnloadModuleService,
  SwaggerServicesStore,
  PreviewStore
} from '../../core';
import { SharedModule } from '../../shared/shared.module';
import { Device } from '../../models/device';
import { LayoutModule } from '../../core/layout';
/*import {
  ExplorerStubComponent,
  DeviceSwitcherStubComponent,
  PreviewStubComponent,
  PolicyHeaderActionStubComponent,
  UseCasePolicyStubComponent,
  WidgetStoreStubComponent,
  PropertiesStubComponent,
  DialogStubComponent,
  SlidingStubComponent,
  ExplorerHeaderStubPipe,
  WidgetsLibrairiesAPIServiceMock,
  UnloadModuleServiceMock,
  LayoutServiceMock,
  WorkspaceApiMock,
  WidgetScreenSwitcherStubComponent,
  FeaturePageSwitcherStubComponent
} from '../../../stub';*/
import { ScreenEditorComponent } from './screen-editor.component';
import { ConfirmationService } from 'primeng/api';
import { LayoutService } from '../../core/services/layout.service';
import { WorkspaceClientApi } from '@palmyra-devkit/core-api/client';
// import { SwaggerServicesStoreMock } from '../../../stub/stub.store';
import { Navigator } from '../../components/explorer/navigator/navigator';
import { WidgetsLibrairiesAPIService } from '../../core/services/api';

describe('ScreenEditorComponent', () => {
  let component: ScreenEditorComponent;
  let fixture: ComponentFixture<ScreenEditorComponent>;
  let injector: TestBed;
 // const workspaceApi: WorkspaceClientApi = new WorkspaceApiMock();
  // jest.spyOn(workspaceApi, 'getServices').mockReturnValue(of([]));
  beforeEach(async(() => {
    const screenStore: any = {};
    /* jest.spyOn(screenStore, 'select').mockReturnValue(
      of({
        name: 'mockedScreen',
        featureName: 'mockedFeature'
      })
    );*/
  //  const layoutService = new LayoutServiceMock();
   /* jest
      .spyOn(layoutService, 'isUcPolicyModeActive')
      .mockReturnValue(of(false));

    const widgetsLibrairiesAPIServiceService = new WidgetsLibrairiesAPIServiceMock();
    jest
      .spyOn(widgetsLibrairiesAPIServiceService, 'getAllWidgetsLibraries')
      .mockReturnValue(of(undefined));

    const previewerLauncherService: any = {};
    jest
      .spyOn(previewerLauncherService, 'getScreenName')
      .mockReturnValue(of(undefined));
*/
    TestBed.configureTestingModule({
      imports: [SharedModule, LayoutModule, BrowserAnimationsModule],
      declarations: [
        ScreenEditorComponent,
      /*  ExplorerStubComponent,
        DeviceSwitcherStubComponent,
        PreviewStubComponent,
        PolicyHeaderActionStubComponent,
        UseCasePolicyStubComponent,
        WidgetStoreStubComponent,
        PropertiesStubComponent,
        DialogStubComponent,
        SlidingStubComponent,
        ExplorerHeaderStubPipe,
        WidgetScreenSwitcherStubComponent,
        FeaturePageSwitcherStubComponent*/
      ],
      providers: [
        {
          provide: WidgetsLibrairiesAPIService,
        //  useValue: widgetsLibrairiesAPIServiceService
        },
        {
          provide: UnloadModuleService,
        //  useValue: new UnloadModuleServiceMock()
        },
        // { provide: LayoutService, useValue: layoutService },
        // { provide: WorkspaceClientApi, useValue: workspaceApi },
        {
          provide: SwaggerServicesStore,
          // useValue: new SwaggerServicesStoreMock()
        },
        Navigator,
        PreviewStore,
        ConfirmationService
      ]
    }).compileComponents();
    injector = getTestBed();
    fixture = TestBed.createComponent(ScreenEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should collapse components', () => {
    component.onCollapseComponents();
    fixture.detectChanges();
    expect(component.collapseComponents).toEqual(true);
  });

  it('should collapse properties', () => {
    component.onCollapseProperties();
    fixture.detectChanges();
    expect(component.collapseProperties).toEqual(true);
  });

  it('should select device', () => {
    const mockedDevice: Device = Device.DESKTOP;
    component.selectDevice(mockedDevice);
    fixture.detectChanges();
    expect(component.selectedDevice).toEqual('desktop');
  });
});
