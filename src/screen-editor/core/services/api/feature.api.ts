import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Feature, Screen } from '@palmyra-devkit/core-api/shared';

@Injectable()
export class FeatureApi {
  constructor(
    private http: HttpClient,
    @Inject('API_PATHS') private api: string
  ) {}

  // saveFeatures(features: Feature[]): Observable<Feature[]> {
  //   if (features === null || features === undefined) {
  //     throw Error('Features are required');
  //   }
  //   return this.http.post<Feature[]>(
  //     `${this.api['screen-editor']}/feature/all`,
  //     features
  //   );
  // }
  //
  // saveFeature(feature: Feature): Observable<Feature> {
  //   if (feature === null || feature === undefined) {
  //     throw Error('Feature is required');
  //   }
  //   return this.http.post<Feature>(
  //     `${this.api['screen-editor']}/feature`,
  //     feature
  //   );
  // }
  //
  // deleteFeature(featureName: string): Observable<boolean> {
  //   if (
  //     featureName === undefined ||
  //     featureName === null ||
  //     featureName === ''
  //   ) {
  //     throw Error('FeatureName is required');
  //   }
  //   return this.http.delete<boolean>(
  //     `${this.api['screen-editor']}/feature/${featureName}`
  //   );
  // }
  //
  // saveScreen(featureName: string, screen: Screen): Observable<Screen> {
  //   if (
  //     featureName === undefined ||
  //     featureName === null ||
  //     featureName === ''
  //   ) {
  //     throw Error('FeatureName is required');
  //   }
  //   if (screen === undefined || screen === null) {
  //     throw Error('Screen is required');
  //   }
  //   return this.http.post<Screen>(
  //     `${this.api['screen-editor']}/feature/${featureName}/screen`,
  //     screen
  //   );
  // }
  //
  // deleteScreen(featureName: string, screenName: string): Observable<boolean> {
  //   if (
  //     featureName === undefined ||
  //     featureName === null ||
  //     featureName === ''
  //   ) {
  //     throw Error('FeatureName is required');
  //   }
  //   if (screenName === undefined || screenName === null || screenName === '') {
  //     throw Error('ScreenName is required');
  //   }
  //   return this.http.delete<boolean>(
  //     `${this.api['screen-editor']}/feature/${featureName}/screen/${screenName}`
  //   );
  // }
}
