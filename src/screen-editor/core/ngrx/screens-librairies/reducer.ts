import {
  createReducer,
  on,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import {
  LOAD_SCREENS_LIBRAIRIES,
  LOAD_SCREENS_LIBRAIRIES_SUCCESSFULLY
} from './actions';
import { ScreensLibraryModel } from '../../../models';

export class ScreensLibrairiesState {
  data: ScreensLibraryModel[];
}

export const initialState = new ScreensLibrairiesState();

const screensLibrairiesReducer = createReducer(
  initialState,
  on(LOAD_SCREENS_LIBRAIRIES, state => ({ ...state })),
  on(LOAD_SCREENS_LIBRAIRIES_SUCCESSFULLY, (state, { screensLibrairies }) => ({
    ...state,
    data: [...screensLibrairies]
  }))
);

export function reducer(state: ScreensLibrairiesState, action) {
  return screensLibrairiesReducer(state, action);
}

export const getScreenssLibrairiesState = createFeatureSelector(
  'SE - Screens Librairies'
);

export const getScreensLibrairies = createSelector(
  getScreenssLibrairiesState,
  (state: ScreensLibrairiesState) => state.data
);
export const getAllScreens = createSelector(
  getScreensLibrairies,
  screensLibrairies =>
    screensLibrairies &&
    screensLibrairies
      .reduce((result, item) => {
        return result.concat(item.templates);
      }, [])
      .filter(Boolean)
);
export const getScreensTemplateForGivenScreens = createSelector(
  getAllScreens,
  (allScreensTemplates, { screensTemplates }) =>
    (allScreensTemplates &&
      allScreensTemplates.filter(template =>
        screensTemplates.includes(template.template)
      )) ||
    []
);
export const getScreenTemplate = createSelector(
  getAllScreens,
  (allScreensTemplates, { templateName }) =>
    (allScreensTemplates &&
      allScreensTemplates.find(
        template => template.template === templateName
      )) ||
    []
);
export const key = 'SE - Screens Librairies';
