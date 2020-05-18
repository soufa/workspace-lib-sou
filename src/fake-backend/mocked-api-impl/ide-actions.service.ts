import { IdeActionsService } from '@palmyra-devkit/core-api/client';
import { Injectable } from '@angular/core';

@Injectable()
export class IdeActionsServiceImpl extends IdeActionsService {
  doSave(): void {
    this.save$.next();
  }
  save() {
    return this.save$.asObservable();
  }
}
