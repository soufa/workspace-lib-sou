import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, concatMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  LOAD_WIDEGTS_LIBRAIRIES,
  LOAD_WIDEGTS_LIBRAIRIES_SUCCESSFULLY,
  LOAD_WIDEGTS_LIBRAIRIES_FAILED
} from './actions';
import { WidgetsLibrairiesAPIService } from '../../services/api';
import { Injectable } from '@angular/core';

@Injectable()
export class WidgetsLibrairiesEffects {
  constructor(
    private actions$: Actions,
    private widgetsLibrariesApi: WidgetsLibrairiesAPIService
  ) {}

  loadWidgetsLibraries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_WIDEGTS_LIBRAIRIES),
      concatMap(() =>
        this.widgetsLibrariesApi.getAllWidgetsLibraries().pipe(
          map(
            widgetsLibrairies =>
              LOAD_WIDEGTS_LIBRAIRIES_SUCCESSFULLY({ widgetsLibrairies }),
            catchError(err => of(LOAD_WIDEGTS_LIBRAIRIES_FAILED({ err })))
          )
        )
      )
    )
  );
}
