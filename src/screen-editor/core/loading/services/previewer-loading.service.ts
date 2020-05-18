import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
/**
 * Singleton Loader Service used to change the state of the loader Subject
 */
@Injectable()
export class PreviewerLoadingService {
  private loaderSubject = new BehaviorSubject<boolean>(false);

  constructor() {}

  show() {
    this.loaderSubject.next(true);
  }

  hide() {
    this.loaderSubject.next(false);
  }

  getLoaderState(): Observable<boolean> {
    return this.loaderSubject.asObservable();
  }
}
