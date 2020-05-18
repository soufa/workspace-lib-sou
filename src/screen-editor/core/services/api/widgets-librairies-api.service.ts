import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { WidgetsLibraryModel } from '../../../models/widgets-library/model';

@Injectable()
export class WidgetsLibrairiesAPIService {
  constructor(
    private http: HttpClient,
    @Inject('API_PATHS') private api: string
  ) {}

  /**
   * Get the component library
   * return a multi casting Replay subject
   */
  getAllWidgetsLibraries(): Observable<Array<WidgetsLibraryModel>> {
    return this.http.get<Array<WidgetsLibraryModel>>(
      `${this.api['screen-editor']}/components/all`
    );
  }
}
