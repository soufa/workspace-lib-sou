import { View } from '../services/api';
import { BehaviorSubject, Observer, Observable } from 'rxjs';
import { OnDestroy, Injectable } from '@angular/core';

@Injectable()
export class PreviewStore implements Observer<View>, OnDestroy {
  private shareWithBehavior$ = new BehaviorSubject<View>(undefined);

  next(view: View) {
    this.shareWithBehavior$.next(view);
  }

  select(): Observable<View> {
    return this.shareWithBehavior$.asObservable();
  }

  error(err: any) {}
  complete() {
    // Noop
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
