import { Injectable } from '@angular/core';
import { Observer, Observable, BehaviorSubject } from 'rxjs';

import { ValidationInfo } from '../../core/services';

@Injectable()
export class ValidationStore implements Observer<ValidationInfo[]> {
  private shareWithBehaviour$ = new BehaviorSubject<ValidationInfo[]>(
    undefined
  );
  select(): Observable<ValidationInfo[]> {
    return this.shareWithBehaviour$.asObservable();
  }

  next(value: ValidationInfo[]) {
    this.shareWithBehaviour$.next([...value]);
  }
  error(err: any) {}

  complete() {
    // Noop
  }
}
