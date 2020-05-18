import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreensStoreComponent } from './screens-store.component';
// import { WorkspaceApiMock } from '../../../../stub';
import { WorkspaceClientApi } from '@palmyra-devkit/core-api/client';
import { SharedModule } from '../../../shared/shared.module';
import { TreeDragDropService } from 'primeng/api';
import { of } from 'rxjs';

describe('ScreensStoreComponent', () => {
  let component: ScreensStoreComponent;
  let fixture: ComponentFixture<ScreensStoreComponent>;

  //const workspaceApi = new WorkspaceApiMock();
  //jest.spyOn(workspaceApi, 'getAllScreens').mockReturnValue(of([]));

 /* beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [
        { provide: WorkspaceClientApi, useValue: workspaceApi },
        TreeDragDropService
      ],
      declarations: [ScreensStoreComponent]
    }).compileComponents();
  }));*/

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreensStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
