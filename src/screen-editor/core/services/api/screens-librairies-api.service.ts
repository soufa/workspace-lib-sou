import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ScreensLibraryModel } from '../../../models/screens-library/model';

@Injectable()
export class ScreensLibrairiesAPIService {
  constructor(
    private http: HttpClient,
    @Inject('API_PATHS') private api: string
  ) {}

  /**
   * Get the template library
   * return a multi casting Replay subject
   */
  getAllScreensLibrairies(): Observable<Array<ScreensLibraryModel>> {
    return this.http.get<Array<ScreensLibraryModel>>(
      `${this.api['screen-editor']}/templates/all`
    );
  }
}
