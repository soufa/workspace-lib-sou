import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureExplorerToolbarComponent } from './feature-explorer-toolbar.component';
import { SharedModule } from '../../../../shared/shared.module';
import { ExplorerSharedModule } from '../../shared/explorer-shared.module';

describe('FeatureExplorerToolbarComponent', () => {
  let component: FeatureExplorerToolbarComponent;
  let fixture: ComponentFixture<FeatureExplorerToolbarComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, ExplorerSharedModule],
      declarations: [FeatureExplorerToolbarComponent]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureExplorerToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should do filter', () => {
    spyOn(component.filter, 'emit');
    component.doFilter('foo');
    fixture.detectChanges();
    expect(component.filter.emit).toHaveBeenCalledTimes(1);
  });

  it('should add Feature dialog', () => {
    spyOn(component.addFeature, 'emit');
    component.openAddFeatureDialog();
    fixture.detectChanges();
    expect(component.addFeature.emit).toHaveBeenCalledTimes(1);
  });

  it('should save Feature', () => {
    spyOn(component.saveFeatures, 'emit');
    component.doSaveFeatures();
    fixture.detectChanges();
    expect(component.saveFeatures.emit).toHaveBeenCalledTimes(1);
  });
});
