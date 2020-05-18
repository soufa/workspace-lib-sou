import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Screen, Module } from '@palmyra-devkit/core-api/shared';
import { IdeMessageService } from '@palmyra-devkit/core-api/client/messages';

import { PreviewStore } from '../../store';
import { PreviewerLoadingService } from '../../loading/services/previewer-loading.service';

@Injectable()
export class PreviewService {
  private init$: BehaviorSubject<Module>;

  constructor(
    private http: HttpClient,
    private previewStore: PreviewStore,
    private slidingMessageService: IdeMessageService,
    private previewerLodingService: PreviewerLoadingService,
 //   @Inject('API_PATHS') private api: string
  ) {}

  /**
   * Sends the screenDataContent to the server which returns
   * an Observable over a View Object and write the retuned data into iframeViewSubject.
   */
  /*renderScreen(screenData: Screen): Observable<View> {
    return this.http.post<View>(
      `${this.api['screen-editor']}/preview/view`,
      screenData
    );
  }

  init(): Observable<Module> {
    if (this.init$) {
      return this.init$.asObservable();
    }
    return this.http
      .get<Module>(`${this.api['screen-editor']}/preview/init`, {})
      .pipe(
        tap(module => {
          this.init$ = new BehaviorSubject<Module>(module);
        })
      );
  }*/
}
export interface View {
  html?: string;
  componentsLibraryModules?: any;
  error?: string;
}
