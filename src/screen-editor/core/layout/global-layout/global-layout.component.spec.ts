import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { GlobalLayoutComponent } from './global-layout.component';
import { SharedModule } from '../../../shared/shared.module';
import { LayoutService } from '../../services/layout.service';

describe('GlobalLayoutComponent', () => {
  let component: GlobalLayoutComponent;
  let fixture: ComponentFixture<GlobalLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [GlobalLayoutComponent],
      providers: [
        {
          provide: LayoutService,
          useValue: {
            isUcPolicyModeActive: () => {
              return of(false);
            }
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should collapse left container', () => {
    component.collapseLeft();
    expect(component.leftCollapsed).toBeTruthy();
  });

  it('should collapse right container', () => {
    component.collapseRight();
    expect(component.rightCollapsed).toBeTruthy();
  });
});
