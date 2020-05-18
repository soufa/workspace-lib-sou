import { Injectable, Component, Type } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class DialogService {
  private shareWithReplay$ = new BehaviorSubject<{
    type: Type<Component>;
    data: any;
    title?: string;
  }>(undefined);

  openDialog(content: any) {
    this.shareWithReplay$.next(content);
  }

  closeDialog() {
    this.shareWithReplay$.next(undefined);
  }

  content(): Observable<{
    type: Type<Component>;
    data: any;
    title?: string;
  }> {
    return this.shareWithReplay$;
  }
}
