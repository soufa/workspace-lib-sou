import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, concatMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  LOAD_SCREENS_LIBRAIRIES,
  LOAD_SCREENS_LIBRAIRIES_SUCCESSFULLY,
  LOAD_SCREENS_LIBRAIRIES_FAILED
} from './actions';
import { ScreensLibrairiesAPIService } from '../../services/api';
import { Injectable } from '@angular/core';

@Injectable()
export class ScreensLibrairiesEffects {
  constructor(
    private actions$: Actions,
    private screensLibrariesApi: ScreensLibrairiesAPIService
  ) {}

  loadWidgetsLibraries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_SCREENS_LIBRAIRIES),
      concatMap(() =>
        this.screensLibrariesApi.getAllScreensLibrairies().pipe(
          map(
            screensLibrairies =>
              LOAD_SCREENS_LIBRAIRIES_SUCCESSFULLY({ screensLibrairies }),
            catchError(err => of(LOAD_SCREENS_LIBRAIRIES_FAILED({ err })))
          )
        )
      )
    )
  );
}
