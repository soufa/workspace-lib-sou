import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  OnDestroy
} from '@angular/core';
import { takeUntil, filter, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Observable, Subject, zip } from 'rxjs';
import { kebabCase } from 'lodash';

import { Device } from '../../models/device';


@Component({
  selector: 'sc-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit, OnDestroy {
  @Input()
  device: Device = Device.DESKTOP;
  @Input()
  landscapeMode = false;
  desktopWidth = '100%';

  @ViewChild('iframe', { static: false })
  iframe: ElementRef;

  // previewerState$: Observable<PreviewerState>;
  previewerUrl;

  private iframeLoaded$: Subject<void> = new Subject();
  private unsubscribe: Subject<void> = new Subject();
  widgetsModules: any[];
  themeUrl: string;

  constructor(
   // private propertiesManagement: Store<PropertiesState>,
    // private previewerManagement: Store<PreviewerState>
  ) {}

  ngOnInit() {
    // this.previewerManagement.dispatch(initPreviewer());
    /*this.previewerState$ = this.previewerManagement
      .select(getPreviewerState)
      .pipe(filter(Boolean));

    zip(
      this.previewerManagement
        .select(getWidgetsLibrariesModules)
        .pipe(filter(Boolean)),
      this.previewerManagement.select(getPreviewerUrl).pipe(filter(Boolean)),
      this.previewerManagement
        .select(getPreviewerThemeUrl)
        .pipe(filter(Boolean)),
      this.iframeLoaded$.asObservable()
    )
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(([componentsLibraryModules, previewerUrl, themeUrl]) => {
        if (!this.iframe) {
          return;
        }
        this.previewerUrl = previewerUrl;
        this.themeUrl = themeUrl as string;
        this.widgetsModules = componentsLibraryModules as any[];
        this.iframe.nativeElement.contentWindow.postMessage(
          {
            themeUrl,
            widgetsModules: componentsLibraryModules
          },
          `${window.location.href}/${previewerUrl}`
        );
        this.setDeskTopWitdth('100%');
      });

    this.previewerManagement
      .select(getScreenToPreview)
      .pipe(
        withLatestFrom(this.previewerManagement.select(getPreviewerUrl)),
        takeUntil(this.unsubscribe)
      )
      .subscribe(([screenRenderResult, previewerUrl]) => {
        if (!this.iframe) {
          return;
        }
        if (screenRenderResult) {
          screenRenderResult.widgetsModules = this.widgetsModules;
          screenRenderResult.themeUrl = this.themeUrl;
          this.iframe.nativeElement.contentWindow.postMessage(
            screenRenderResult,
            `${window.location.href}/${previewerUrl}`
          );
        } else {
          this.iframe.nativeElement.contentWindow.postMessage(
            'NO_SCREEN',
            `${window.location.href}/${previewerUrl}`
          );
        }
        this.setDeskTopWitdth('1200px');
      });

    this.previewerManagement
      .select(getError)
      .pipe(
        filter(Boolean),
        withLatestFrom(this.previewerManagement.select(getPreviewerUrl)),
        takeUntil(this.unsubscribe)
      )
      .subscribe(([error, previewerUrl]) => {
        if (!this.iframe) {
          return;
        }
        this.iframe.nativeElement.contentWindow.postMessage(
          error,
          `${window.location.href}/${previewerUrl}`
        );
        this.setDeskTopWitdth('100%');
      });

    this.subscribeToHighlightComonent();
    // recieve messages from the previewer iframe
    this.registerMessageEventListener();
  }
*/
  /**
   * notify the previewer to highlight the selected
   * component
   */
  /*private subscribeToHighlightComonent() {
    this.propertiesManagement.select(getProperties).subscribe(property => {
      const componentName =
        property && property.scopeToUpdate
          ? kebabCase(property.data.name)
          : undefined;
      const parentName = property && kebabCase(property.parentName);
      if (this.iframe && this.iframe.nativeElement) {
        this.iframe.nativeElement.contentWindow.postMessage(
          { HIGHTLIGHT_COMPONENT: { name: componentName, parentName } },
          `${window.location.href}/${this.previewerUrl}`
        );
      }
    });
  }
*/
  /**
   * registers a method from the given sevice as a MessageEvent listener.
   * @param previwerService: PreviewerService
   */
  /*registerMessageEventListener(): void {
    const thisComponent = this;
    if (window.addEventListener) {
      // For standards-compliant web browsers
      window.addEventListener('message', e => {
        if (e.data && e.data.from === 'previewer') {
          if (e.data.widgetsLibrariesLoaded) {
            thisComponent.previewerManagement.dispatch(
              loadPreviewerLibrairiesSuccessfully()
            );
          }
          if (e.data.renderingSuccess) {
            thisComponent.previewerManagement.dispatch(
              renderScreenClientSuccessfully()
            );
          } else if (!e.data.renderingSuccess) {
            thisComponent.previewerManagement.dispatch(
              renderScreenClientFailed()
            );
          }
        }
      });
    }
  }

  previewerFrameLoaded($event) {
    if (this.iframe) {
      this.iframeLoaded$.next();
      this.previewerManagement.dispatch(previewerLoadedSuccessfully());
    }
  }

  rotate() {
    this.landscapeMode = !this.landscapeMode;
  }

  getDeskTopWitdth() {
    return this.device === Device.DESKTOP ? this.desktopWidth : '100%';
  }

  setDeskTopWitdth(width) {
    this.desktopWidth = width;
  }

  ngOnDestroy(): void {
    if (this.unsubscribe) {
      this.unsubscribe.next();
      this.unsubscribe.complete();
    }*/
  }

  ngOnDestroy(): void {
  }
}
