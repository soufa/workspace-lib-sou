import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Feature, Page } from '@palmyra-devkit/core-api/shared';

@Injectable()
export class PageApi {
  constructor(
    private http: HttpClient,
  //  @Inject('API_PATHS') private api: string
  ) {}

  /*savePages(pages: Page[]): Observable<Page[]> {
    if (pages === null || pages === undefined) {
      throw Error('Features are required');
    }
    return this.http.post<Page[]>(
      `${this.api['screen-editor']}/page/all`,
      pages
    );
  }

  savePage(page: Page): Observable<Page> {
    if (page === null || page === undefined) {
      throw Error('Feature is required');
    }
    return this.http.post<Feature>(`${this.api['screen-editor']}/page`, page);
  }

  deletePage(pageName: string): Observable<boolean> {
    if (pageName === undefined || pageName === null || pageName === '') {
      throw Error('FeatureName is required');
    }
    return this.http.delete<boolean>(
      `${this.api['screen-editor']}/page/${pageName}`
    );
  }*/
}
