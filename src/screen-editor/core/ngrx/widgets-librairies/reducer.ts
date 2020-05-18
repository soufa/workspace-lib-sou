import {
  createReducer,
  on,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import {
  LOAD_WIDEGTS_LIBRAIRIES,
  LOAD_WIDEGTS_LIBRAIRIES_SUCCESSFULLY
} from './actions';
import { WidgetsLibraryModel, UiComponent } from '../../../models';

export class WidgetsLibrairiesState {
  data: WidgetsLibraryModel[];
}

export const initialState = new WidgetsLibrairiesState();

const widgetsLibrairiesReducer = createReducer(
  initialState,
  on(LOAD_WIDEGTS_LIBRAIRIES, state => ({ ...state })),
  on(LOAD_WIDEGTS_LIBRAIRIES_SUCCESSFULLY, (state, { widgetsLibrairies }) => ({
    ...state,
    data: [...widgetsLibrairies]
  }))
);

export function reducer(state: WidgetsLibrairiesState, action) {
  return widgetsLibrairiesReducer(state, action);
}

export const getWidgetsLibrairiesState = createFeatureSelector(
  'SE - Widgets Librairies'
);

export const getWidgetsLibrairies = createSelector(
  getWidgetsLibrairiesState,
  (state: WidgetsLibrairiesState) => state.data
);
export const getAllWidgets = createSelector(
  getWidgetsLibrairies,
  widgetsLibrairies =>
    widgetsLibrairies
      ? widgetsLibrairies
          .reduce((result, item) => {
            return result.concat(item.categories);
          }, [])
          .filter(Boolean)
          .map(category => category.components)
          .reduce((allComponents, uiComponent) => {
            return allComponents.concat(uiComponent);
          }, [])
      : []
);
export const getAvailableWidgetsForGivenScreenType = createSelector(
  getAllWidgets,
  (widgets, props) =>
    widgets.filter(component => {
      if (props.screenType && component.rules) {
        const screenRules = component.rules.filter(rule =>
          isScreenAllowed(rule, props.screenType)
        );
        return screenRules.length > 0 ? true : false;
      }
      return true;
    })
);

export const getWidgetsToAutoGenerateSection = createSelector(
  getAvailableWidgetsForGivenScreenType,
  (widgets: UiComponent[], { screenType, section }) =>
    widgets &&
    widgets.filter(
      widget =>
        widget.defaultScreen &&
        widget.defaultScreen.defaultTypes[screenType] &&
        widget.scope &&
        widget.scope.filter(
          scope => scope.split('.').find(item => item === section) !== undefined
        ).length > 0
    )
);
export const getAllLayoutsWidgets = createSelector(getAllWidgets, widgets =>
  widgets.filter(widget => widget.layouts)
);
export const getWidgetByName = createSelector(
  getAllWidgets,
  (widgets, { name }) =>
    (widgets && widgets.find(widget => widget.name.toLowerCase() === name.toLowerCase())) || ''
);
export const key = 'SE - Widgets Librairies';

/**
 * Verify wether the component is allowed inside the screen or not
 * @param rule the rule
 * @param screen the current screen template
 */
const isScreenAllowed = (rule: any, screen: string): boolean => {
  return (
    (rule.includedScreens &&
      rule.includedScreens.includes(screen) &&
      !(rule.excludedScreens && rule.excludedScreens.includes(screen))) ||
    (rule.includedScreens &&
      rule.includedScreens.length === 0 &&
      rule.excludedScreens &&
      rule.excludedScreens.length === 0)
  );
};
