import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

import { WorkspaceClientApi } from '@palmyra-devkit/core-api/client';

import { UnloadModuleService, LayoutService } from '../../core/services';
import { SwaggerServicesStore } from '../../core/store';
import { Device } from '../../models/device';
import { UiComponent } from '../../models/widgets-library/ui-component';
import { WidgetsLibraryModel } from '../../models/widgets-library/model';
import { Navigator } from '../../components/explorer/navigator/navigator';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'screen-editor',
  templateUrl: './screen-editor.component.html',
  styleUrls: ['./screen-editor.component.scss']
})
export class ScreenEditorComponent implements OnInit, OnDestroy {
  components: UiComponent[];
  componentLibrary: WidgetsLibraryModel;
  selectedDevice: Device = Device.DESKTOP;
  landscapeMode = false;
  collapseComponents = false;
  collapseProperties = false;
  componentLibraries$: Observable<WidgetsLibraryModel[]>;
  // tslint:disable-next-line: ban-types
  displayDeviceSwitcher$: Observable<Boolean>;
  // tslint:disable-next-line: ban-types
  displayUseCasePolicy$: Observable<Boolean>;

  propertiesTitle$: Observable<any>;

  private swaggerServices$: Subscription;

  constructor(
    private unloadModuleService: UnloadModuleService,
    private layoutService: LayoutService,
    private workspaceApi: WorkspaceClientApi,
    private swaggerServicesStore: SwaggerServicesStore,
    private navigator: Navigator,
  //  private featuresManagementStore: Store<FeaturesState>,
   // private widgetsLibrairiesStore: Store<WidgetsLibrairiesState>,
    // private screensLibrairiesStore: Store<ScreensLibrairiesState>,
    // private modelsManagementStore: Store<ModelsState>,
   // private propertiesManagementStore: Store<PropertiesState>
  ) {}

  ngOnInit() {
  //  this.featuresManagementStore.dispatch(loadFeatures());
    // this.widgetsLibrairiesStore.dispatch(LOAD_WIDEGTS_LIBRAIRIES());
     // this.screensLibrairiesStore.dispatch(LOAD_SCREENS_LIBRAIRIES());
    // this.modelsManagementStore.dispatch(LOAD_MODELS());

    this.navigator.goToFeatureExplorer();
    this.displayDeviceSwitcher$ = this.layoutService
      .isUcPolicyModeActive()
      .pipe(map(display => !display));
    this.displayUseCasePolicy$ = this.layoutService.isUcPolicyModeActive();
  /*  this.propertiesTitle$ = this.propertiesManagementStore
      .select(getProperties)
      .pipe(
        map(value =>
          value && value.data && value.data.type ? value.data.type : ''
        ),
        distinctUntilChanged()
      );
*/
    this.swaggerServices$ = this.workspaceApi
      .getServices()
      .subscribe(services => {
        this.swaggerServicesStore.next(services);
      });
  }

  onCollapseComponents() {
    this.collapseComponents = !this.collapseComponents;
  }

  onCollapseProperties() {
    this.collapseProperties = !this.collapseProperties;
  }

  selectDevice(device) {
    this.selectedDevice = device;
  }

  changeLayout(landscapeMode) {
    this.landscapeMode = landscapeMode;
  }

  ngOnDestroy() {
    this.unloadModuleService.unloadModules();
    if (this.swaggerServices$) {
      this.swaggerServices$.unsubscribe();
    }
  }

  backToPreview() {
    this.layoutService.disableUcPolicyMode();
  }
}
