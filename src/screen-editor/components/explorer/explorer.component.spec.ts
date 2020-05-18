import {
  async,
  ComponentFixture,
  TestBed,
  getTestBed
} from '@angular/core/testing';
import { of } from 'rxjs';
import { Feature, Screen } from '@palmyra-devkit/core-api/shared';
import { WorkspaceClientApi } from '@palmyra-devkit/core-api/client';

import { SharedModule } from '../../shared/shared.module';
import {
 /* ScreenStore,
  FeaturesStore,
  PropertiesStore,
  ModelStore,
  PreviwerLauncherService,*/
  PreviewStore,
  DialogService
} from '../../core';
import { ExplorerComponent } from './explorer.component';
import { Navigator } from './navigator/navigator';
/*import {
  ExplorerToolbarStubComponent,
  FeatureExplorerStubComponent,
  ScreenExplorerStubComponent,
  WorkspaceApiMock,
  TemplateServiceMock,
  FeaturesStoreMock,
  ScreenStoreMock,
  PropertiesStoreMock,
  ModelStoreMock,
  PreviwerLauncherServiceMock,
  PreviewStoreMock,
  NavigatorMock,
  DialogServiceMock
} from '../../../stub';*/
import { ScreensLibrairiesAPIService } from '../../core/services/api';
/*
const templateService = new TemplateServiceMock();
jest.spyOn(templateService, 'getTemplateLibrary').mockReturnValue(
  of([
    {
      name: 'tempLib',
      version: '1.0.0',
      templates: [{ name: 'template' }]
    }
  ])
);
const workspaceApi = new WorkspaceApiMock();
jest
  .spyOn(workspaceApi, 'getAllFeatures')
  .mockReturnValue(of([{ name: 'feature' }]));
jest.spyOn(workspaceApi, 'getModels').mockReturnValue(of([{ name: 'entity' }]));

const featureStore = new FeaturesStoreMock();
jest.spyOn(featureStore, 'select').mockReturnValue(of([{ name: 'feature' }]));
jest
  .spyOn(featureStore, 'selectUpdate')
  .mockReturnValue(of({ name: 'feature' }));*/
describe('FeaturesComponent', () => {
  let injector: TestBed;
  let component: ExplorerComponent;
  let fixture: ComponentFixture<ExplorerComponent>;

 /* beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [
        ExplorerToolbarStubComponent,
        FeatureExplorerStubComponent,
        ScreenExplorerStubComponent,
        ExplorerComponent
      ],
      providers: [
        { provide: WorkspaceClientApi, useValue: workspaceApi },
        { provide: ScreensLibrairiesAPIService, useValue: templateService },
        { provide: FeaturesStore, useValue: featureStore },
        { provide: ScreenStore, useValue: new ScreenStoreMock() },
        { provide: PropertiesStore, useValue: new PropertiesStoreMock() },
        { provide: ModelStore, useValue: new ModelStoreMock() },
        {
          provide: PreviwerLauncherService,
          useValue: new PreviwerLauncherServiceMock()
        },
        { provide: PreviewStore, useValue: new PreviewStoreMock() },
        { provide: Navigator, useValue: new NavigatorMock() },
        { provide: DialogService, useValue: new DialogServiceMock() }
      ]
    }).compileComponents();
    injector = getTestBed();
    fixture = TestBed.createComponent(ExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update feature', () => {
    const featureStoreSpy = injector.get(FeaturesStore);
    jest.spyOn(featureStoreSpy, 'next');
    const featureToUpdate: Feature[] = [{ name: 'feature' }];
    component.featureUpdate(featureToUpdate);
    fixture.detectChanges();
    expect(featureStoreSpy.next).toHaveBeenCalled();
  });

  it('should update screen', () => {
    const screenStoreSpy = injector.get(ScreenStore);
    jest.spyOn(screenStoreSpy, 'next');
    const screen: Screen = {
      name: 'screen',
      featureName: 'feature',
      template: 'template'
    };
    component.updateScreen(screen);
    fixture.detectChanges();
    expect(screenStoreSpy.next).toHaveBeenCalled();
  });

  it('should save screen', () => {
    const saved = {} as Screen;
    component.onScreenSaved(saved);
    fixture.detectChanges();
    expect(component.screenSaved).toBeTruthy();
  });*/
});
