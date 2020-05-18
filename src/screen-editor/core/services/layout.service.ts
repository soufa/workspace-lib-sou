import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class LayoutService {
  useCasePolicyMode$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() {}

  enableUcPolicyMode() {
    this.useCasePolicyMode$.next(true);
  }

  disableUcPolicyMode() {
    this.useCasePolicyMode$.next(false);
  }

  isUcPolicyModeActive(): Observable<boolean> {
    return this.useCasePolicyMode$.asObservable();
  }
}
