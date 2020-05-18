import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateTemplateComponent } from './simulate-template.component';

describe('SimulateTemplateComponent', () => {
  let component: SimulateTemplateComponent;
  let fixture: ComponentFixture<SimulateTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulateTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulateTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
