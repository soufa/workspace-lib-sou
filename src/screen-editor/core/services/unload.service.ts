import { Injectable } from '@angular/core';
import { ValidationStore } from '../../core/store';

@Injectable()
export class UnloadModuleService {
  constructor(private validationStore: ValidationStore) {}

  unloadModules() {
    this.validationStore.complete();
  }
}
