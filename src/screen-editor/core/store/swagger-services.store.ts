import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer, Observable } from 'rxjs';

import { Service } from '@palmyra-devkit/core-api/shared';

@Injectable()
export class SwaggerServicesStore implements Observer<Service[]> {
  private shareWithBehavior$ = new BehaviorSubject<Service[]>(undefined);
  private services = new Array<Service>();
  next(services: Service[]) {
    this.shareWithBehavior$.next(services);
    this.services = [...services];
  }

  select();
  select(featureName: string): Observable<Service[]>;
  select(featureName: string, path: string): Observable<Service>;
  select(featureName?: string, path?: string): Observable<Service[] | Service> {
    // if (featureName) {
    //   if (path) {
    //   }
    //   this._shareWithBehavior.asObservable().pipe(map(services=> services.filter()))
    // }
    return this.shareWithBehavior$.asObservable();
  }

  selectCold(): Array<Service> {
    return this.services;
  }

  error(err: any) {}
  complete() {
    // Noop
  }
}
