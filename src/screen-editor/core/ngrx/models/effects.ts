import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, catchError } from 'rxjs/operators';
import { WorkspaceClientApi } from '@palmyra-devkit/core-api/client';

import {
  LOAD_MODELS,
  LOAD_MODELS_SUCCESSFULLY,
  LOAD_MODELS_FAILED
} from './actions';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ModelsEffects {
  constructor(
    private actions$: Actions,
    private modelsApi: WorkspaceClientApi
  ) {}

  loadModels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_MODELS),
      concatMap(() => {
        return this.modelsApi.getModels().pipe(
          map(entities => LOAD_MODELS_SUCCESSFULLY({ entities })),
          catchError(err => of(LOAD_MODELS_FAILED({ err })))
        );
      })
    )
  );
}
