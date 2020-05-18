import { createAction, props } from '@ngrx/store';
import { Entity } from '@palmyra-devkit/core-api/shared';

export const LOAD_MODELS = createAction('[SE Models] Load Models');
export const LOAD_MODELS_SUCCESSFULLY = createAction(
  '[SE Models] Load Models Successfully',
  props<{ entities: Entity[] }>()
);
export const LOAD_MODELS_FAILED = createAction(
  '[SE Models] Load Models Failed',
  props<{ err: any }>()
);
