import {
  async,
  ComponentFixture,
  TestBed,
  getTestBed
} from '@angular/core/testing';
import { of } from 'rxjs';

import { PreviewComponent } from './preview.component';
import {
  PreviewStore,
  PreviewerLoadingService
} from '../../core';
import { SharedModule } from '../../shared/shared.module';
import { Device } from '../../models/device';
/*import {
  PreviewerLoadingStubComponent,
  StatusBarStubComponent,
  SafeStubPipe
} from '../../../stub';*/

/**
 * STUB AND MOCKS
 */
/* const PreviewServiceMock = jest.fn<PreviewService>(() => ({
  init: () => {
    return of(undefined);
  }
}));
const PreviewerStoreMock = jest.fn<PreviewStore>(() => ({
  select: () => {
    return of({});
  }
}));
const PreviewerLoadingServiceMock = jest.fn<PreviewerLoadingService>(() => ({
  show: () => {},
  hide: () => {}
}));
*/
/*describe('PreviewComponent', () => {
  let component: PreviewComponent;
  let fixture: ComponentFixture<PreviewComponent>;
  let injector: TestBed;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [
        PreviewComponent,
        PreviewerLoadingStubComponent,
        StatusBarStubComponent,
        SafeStubPipe
      ],
      providers: [
        { provide: PreviewService, useValue: new PreviewServiceMock() },
        { provide: PreviewStore, useValue: new PreviewerStoreMock() },
        {
          provide: PreviewerLoadingService,
          useValue: new PreviewerLoadingServiceMock()
        }
      ]
    }).compileComponents();
    injector = getTestBed();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.device = Device.DESKTOP;
    fixture.detectChanges();
  });
});*/
