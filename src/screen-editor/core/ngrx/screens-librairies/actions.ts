import { createAction, props } from '@ngrx/store';

import { ScreensLibraryModel } from '../../../models/screens-library';

export const LOAD_SCREENS_LIBRAIRIES = createAction(
  '[SE - Screens Libraries] Load Screens Libraries'
);
export const LOAD_SCREENS_LIBRAIRIES_SUCCESSFULLY = createAction(
  '[SE - Screens Libraries] Load Screens Libraries Successfully',
  props<{ screensLibrairies: ScreensLibraryModel[] }>()
);
export const LOAD_SCREENS_LIBRAIRIES_FAILED = createAction(
  '[SE - Screens Libraries] Load Screens Libraries Failed',
  props<{ err: any }>()
);
