import { createAction, props } from '@ngrx/store';

import { WidgetsLibraryModel } from '../../../models/widgets-library';

export const LOAD_WIDEGTS_LIBRAIRIES = createAction(
  '[SE - Widgets Libraries] Load Widgets Libraries'
);
export const LOAD_WIDEGTS_LIBRAIRIES_SUCCESSFULLY = createAction(
  '[SE - Widgets Libraries] Load Widgets Libraries Successfully',
  props<{ widgetsLibrairies: WidgetsLibraryModel[] }>()
);
export const LOAD_WIDEGTS_LIBRAIRIES_FAILED = createAction(
  '[SE - Widgets Libraries] Load Widgets Libraries Failed',
  props<{ err: any }>()
);
