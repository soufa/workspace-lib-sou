import {
  createReducer,
  on,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import { Entity } from '@palmyra-devkit/core-api/shared';
import { LOAD_MODELS, LOAD_MODELS_SUCCESSFULLY } from './actions';

export class ModelsState {
  constructor(entities?: Entity[]) {
    this.entities = entities;
  }
  entities: Entity[];
}

export const initialState = new ModelsState();

const modelsReducer = createReducer(
  initialState,
  on(LOAD_MODELS, state => ({ ...state })),
  on(
    LOAD_MODELS_SUCCESSFULLY,
    (state, { entities }) => new ModelsState(entities)
  )
);

export function reducer(state: ModelsState, action) {
  return modelsReducer(state, action);
}

export const getModelsState = createFeatureSelector('SE - Models');
export const getAllModels = createSelector(
  getModelsState,
  (state: ModelsState) => state.entities || []
);
export const getModel = createSelector(
  getAllModels,
  (entities, { entityName }) => {
    if (entityName) {
      let model = entities.find(
        entity => entity.name.toLowerCase() === entityName.toLowerCase()
      );
      if (model) {
        model = attachRelationShipsToModel(model, entities);
      }
      return model;
    }
    return undefined;
  }
);

export const key = 'SE - Models';

// private

// ToDo need to handle infinite loop in case of circular dependency
export function attachRelationShipsToModel(
  entity: Entity,
  allEntities: Entity[]
): Entity {
  entity.relationships.forEach(relationship => {
    if (!relationship.entity) {
      relationship.entity = allEntities.find(
        relationType =>
          relationType.name.toLowerCase() === relationship.type.toLowerCase()
      );
      if (relationship.entity && relationship.entity.relationships) {
        relationship.entity = attachRelationShipsToModel(
          relationship.entity,
          allEntities
        );
      }
    }
  });

  return entity;
}
