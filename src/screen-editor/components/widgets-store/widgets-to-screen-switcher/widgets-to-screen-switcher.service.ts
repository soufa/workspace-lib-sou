import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class WidgetsToScreenSwitcherService {
  private switcher: BehaviorSubject<string> = new BehaviorSubject<string>(
    'components'
  );

  stat(): Observable<string> {
    return this.switcher.asObservable();
  }

  switchToComponents() {
    this.switcher.next('components');
  }

  switchToScreens() {
    this.switcher.next('screens');
  }
}
