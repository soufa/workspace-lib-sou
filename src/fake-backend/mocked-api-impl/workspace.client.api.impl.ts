import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

import {
  Entity,
  Service,
  Feature,
  Project,
  Screen,
  Page
} from '@palmyra-devkit/core-api/shared';
import { WorkspaceClientApi } from '@palmyra-devkit/core-api/client';

const API_BASE_PATH = '/api';

@Injectable()
export class WorkspaceClientApiImpl extends WorkspaceClientApi {
  private shareProjectWithReplay: ReplaySubject<Project>;
  constructor(private http: HttpClient) {
    super();
  }

  getCurrentProjectInfo(): Observable<Project> {
    if (this.shareProjectWithReplay) {
      return this.shareProjectWithReplay;
    } else {
      this.shareProjectWithReplay = new ReplaySubject<Project>();
      return this.http
        .get<Project>(`${API_BASE_PATH}/workspace/project/info`)
        .pipe(
          tap(data => {
            this.shareProjectWithReplay.next(data);
          })
        );
      // shareReplay
    }
  }

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(`${API_BASE_PATH}/workspace/services`);
  }

  getModels(): Observable<Entity[]> {
    return this.http.get<Entity[]>(`${API_BASE_PATH}/workspace/models`);
  }

  getModel(featureName: string): Observable<Entity> {
    if (
      featureName === undefined ||
      featureName === null ||
      featureName === ''
    ) {
      throw new Error(
        'Required parameter featureName was empty, null or undefined.'
      );
    }
    return this.http
      .get<Entity>(`${API_BASE_PATH}/workspace/models/${featureName}`)
      .pipe(shareReplay());
  }

  getAllFeatures(): Observable<Feature[]> {
    return this.http.get<Feature[]>(`${API_BASE_PATH}/workspace/features/all`);
  }
  getFeature(featureName: string): Observable<Feature> {
    if (
      featureName === undefined ||
      featureName === null ||
      featureName === ''
    ) {
      throw new Error(
        'Required parameter featureName was empty, null or undefined.'
      );
    }
    return this.http.get<Feature>(
      `${API_BASE_PATH}/workspace/features/${featureName}`
    );
  }

  getAllScreens(): Observable<Screen[]> {
    return this.http.get<Screen[]>(`${API_BASE_PATH}/workspace/screens/all`);
  }

  getPage(name: string): Observable<Page> {
    return undefined;
  }

  getAllPages(): Observable<Page[]> {
    /*const data = [
      {
        label: 'Dashboard',
        name: 'Dashboard',
        template: 'page',
        routePath: '/dashboard',
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-file',
        content: {
          name: 'Dashboard',
          template: 'page',
          components: [
            {
              name: 'updatorUserId',
              type: 'Label',
              properties: {
                readOnly: true,
                label: 'updatorUserId',
                wordSize: 0,
                mandatory: false,
                showLabel: true
              }
            },
            {
              name: 'updateDate',
              type: 'Label',
              properties: {
                readOnly: true,
                label: 'updateDate',
                wordSize: 0,
                mandatory: false,
                showLabel: true
              }
            },
            {
              name: 'creatorUserId',
              type: 'Label',
              properties: {
                readOnly: true,
                label: 'creatorUserId',
                wordSize: 0,
                mandatory: false,
                showLabel: true
              }
            },
            {
              name: 'creationDate',
              type: 'Label',
              properties: {
                readOnly: true,
                label: 'creationDate',
                wordSize: 0,
                mandatory: false,
                showLabel: true
              }
            }
          ]
        }
      },
      {
        label: 'Data Visualization',
        name: 'Data Visualization',
        template: 'page',
        routePath: '/data-visualization',
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-file'
      },
      {
        label: 'Currency exchange',
        name: 'Currency exchange',
        template: 'page',
        routePath: '/currency',
        expandedIcon: 'fa fa-file',
        collapsedIcon: 'fa fa-file'
      }
    ];*/
    return this.http.get<Page[]>(`${API_BASE_PATH}/workspace/pages/all`);
  }
}
