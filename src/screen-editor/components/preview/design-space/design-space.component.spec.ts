import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSpaceComponent } from './design-space.component';

describe('DesignSpaceComponent', () => {
  let component: DesignSpaceComponent;
  let fixture: ComponentFixture<DesignSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
